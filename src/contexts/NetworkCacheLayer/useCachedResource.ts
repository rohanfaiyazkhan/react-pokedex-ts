import { useCallback, useEffect, useRef } from "react";
import {
    useNetworkCache,
    useNetworkCacheDispatch,
} from "./NetworkCacheContext";
import { NetworkCacheActions } from "./NetworkCacheActions";
import { getApiRoute } from "./getApiRoute";
import { StalenessTimeoutMs } from "./NetworkConfig";
import { LoadingStates } from "../../data/LoadingStates";
import getCurrentTimeStamp from "../../utils/getCurrentTimeStamp";
import makeFetchRequest from "./makeFetchRequest";
import usePrevious from "./../../utils/hooks/usePrevious";
import { ValidResourceNames } from "./ValidResourceNames";

/**
 * @param resource Type of resource, either "pokemon" or "species"
 * @param id ID of pokemon to be fetched
 */
export function useResourceFetchCallback(
    resource: ValidResourceNames,
    id: number
) {
    const dispatch = useNetworkCacheDispatch();
    const baseActionName =
        resource === ValidResourceNames.Pokemon
            ? NetworkCacheActions.GetPokemonRequest
            : NetworkCacheActions.GetSpeciesRequest;

    return useCallback(() => {
        dispatch({
            type: baseActionName,
            payload: {
                id,
            },
        });

        makeFetchRequest(resource, id)
            .then((value) => value.json())
            .then((data) => {
                // console.log("Request successful", data);

                dispatch({
                    type: (baseActionName + "Success") as NetworkCacheActions,
                    payload: {
                        data,
                        id,
                    },
                });
            })
            .catch((error) => {
                console.error("Request error: ", error);

                dispatch({
                    type: (baseActionName + "Failure") as NetworkCacheActions,
                    payload: {
                        error,
                        id,
                    },
                });
            });
    }, [baseActionName, dispatch, id, resource]);
}

/**
 * @param resource Type of resource, either "pokemon" or "pokemon-species"
 * @param id ID of pokemon to be fetched
 */
export default function useCachedResource(
    resource: ValidResourceNames,
    id: number,
    cacheDuration = StalenessTimeoutMs.DEFAULT
) {
    if (
        resource !== ValidResourceNames.Pokemon &&
        resource !== ValidResourceNames.Species
    ) {
        throw new Error(
            "[useResource]: Unknown value for resource. Expected 'pokemon' or 'species'"
        );
    }

    const state = useNetworkCache();

    const resourceContainer = state?.[id]?.[resource];
    const isResourceEmpty =
        resourceContainer === undefined ||
        resourceContainer.resource === undefined;
    const loadingState = resourceContainer?.loadingState;
    const fetchedOn = resourceContainer?.fetchedOn ?? 0;
    const requestOn = resourceContainer?.requestOn ?? 0;
    const resourceFetchCallback = useResourceFetchCallback(resource, id);

    const attemptRef = useRef(0);
    const previousId = usePrevious(id);

    const attemptUnblocked = attemptRef.current === 0 || id !== previousId;

    useEffect(() => {
        if (
            isResourceEmpty &&
            loadingState !== LoadingStates.Loading &&
            requestOn === undefined &&
            attemptUnblocked
        ) {
            resourceFetchCallback();
            attemptRef.current += 1;
            return;
        }

        const currentTime = getCurrentTimeStamp();
        const isCacheStale =
            currentTime - Math.max(requestOn, fetchedOn) > cacheDuration;

        if (
            loadingState !== LoadingStates.Loading &&
            isCacheStale &&
            attemptUnblocked
        ) {
            resourceFetchCallback();
            attemptRef.current += 1;
            return;
        }
    }, [
        attemptUnblocked,
        cacheDuration,
        fetchedOn,
        isResourceEmpty,
        loadingState,
        requestOn,
        resourceFetchCallback,
    ]);

    return resourceContainer;
}
