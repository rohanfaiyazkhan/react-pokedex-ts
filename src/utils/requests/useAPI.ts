import { ValidResourceNames } from "../../contexts/NetworkCacheLayer/ValidResourceNames";
import {
    useIndividualResourceCache,
    useListResourceCache,
} from "../../contexts/NetworkCacheLayer/NetworkCacheContext";
import { useCallback, useRef } from "react";
import {
    makeListPokemonRequest,
    makeSinglePokemonRequest,
} from "./makeRequest";
import { useEffect } from "react";
import { LoadingStates } from "../../data/LoadingStates";
import { isDataStale } from "./isDataStale";
import {
    ListResourceContainer,
    PaginationInfo,
    ResourceContent,
} from "../../data/ResourceContainer";
import { PokemonInferredType } from "../../data/InferredTypes";
import { useCacheStateHandlerContext } from "../../contexts/NetworkCacheLayer/NetworkCacheStateHandlers";

export function useSingePokemonAPI(
    resourceType: ValidResourceNames,
    target: number
): ResourceContent<PokemonInferredType> {
    const resource = useIndividualResourceCache(resourceType, target);

    const request = useCallback(() => {
        makeSinglePokemonRequest(resourceType, target);
    }, [resourceType, target]);

    const loadingState = resource.loadingState;
    const isResourceEmpty = !resource.data;
    const fetchedOn = resource.fetchedOn;

    useEffect(() => {
        if (isResourceEmpty && loadingState !== LoadingStates.Loading) {
            request();
        } else if (
            fetchedOn !== undefined &&
            isDataStale(fetchedOn) &&
            loadingState !== LoadingStates.Loading
        ) {
            request();
        }
    }, [fetchedOn, isResourceEmpty, loadingState, request]);

    return resource;
}

export function useListPokemonAPI(
    paginationInfo: PaginationInfo
): [ListResourceContainer, (paginationInfo: PaginationInfo) => void] {
    const resource = useListResourceCache();
    const {
        listPokemonRequestMade,
        listPokemonRequestSuccess,
        listPokemonRequestFailed,
    } = useCacheStateHandlerContext();

    const loadingState = resource.loadingState;
    const isResourceEmpty = !resource.data;
    const fetchedOn = resource.fetchedOn;

    const attemptRef = useRef(0);

    const requestPipeline = useCallback(
        (paginationInfo: PaginationInfo) => {
            const promise = makeListPokemonRequest(paginationInfo);
            listPokemonRequestMade(paginationInfo);
            attemptRef.current += 1;

            promise
                .then((response) => {
                    console.debug(`[requestPipeline]: `, response);
                    listPokemonRequestSuccess(paginationInfo, response.data);
                })
                .catch((error) => {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        listPokemonRequestFailed(
                            paginationInfo,
                            error.response
                        );
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        listPokemonRequestFailed(paginationInfo, {
                            message: "Empty response recieved from API",
                        });
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        listPokemonRequestFailed(paginationInfo, {
                            message: error.message,
                        });
                    }
                });
        },
        [
            listPokemonRequestFailed,
            listPokemonRequestMade,
            listPokemonRequestSuccess,
        ]
    );

    const isFirstRequest = attemptRef.current === 0;

    useEffect(() => {
        if (isResourceEmpty && isFirstRequest) {
            requestPipeline(paginationInfo);
        } else if (
            fetchedOn !== undefined &&
            isDataStale(fetchedOn) &&
            loadingState !== LoadingStates.Loading
        ) {
            requestPipeline(paginationInfo);
        }
    }, [
        fetchedOn,
        isFirstRequest,
        isResourceEmpty,
        loadingState,
        paginationInfo,
        requestPipeline,
    ]);

    return [resource, requestPipeline];
}
