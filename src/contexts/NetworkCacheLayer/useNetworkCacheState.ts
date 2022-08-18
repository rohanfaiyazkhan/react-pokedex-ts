import { useMemo, useState } from "react";
import { IndividualResourceContainer } from "../../data/ResourceContainer";
import { ListResourceContainer } from "./../../data/ResourceContainer";
import { NetworkCacheStateHandlers } from "./NetworkCacheStateHandlers";
import getCurrentTimeStamp from "./../../utils/getCurrentTimeStamp";
import { LoadingStates } from "../../data/LoadingStates";

export function useNetworkCacheState(): {
    individualPokemonState: IndividualResourceContainer;
    listPokemonState: ListResourceContainer;
    stateHandlers: NetworkCacheStateHandlers;
} {
    const [individualPokemonState, setIndividualPokemonState] =
        useState<IndividualResourceContainer>({});
    const [listPokemonState, setListPokemonState] =
        useState<ListResourceContainer>({});

    const stateHandlers: NetworkCacheStateHandlers = useMemo(
        () => ({
            individualPokemonInfoRequestMade: (resourceType, target) => {
                setIndividualPokemonState((prev) => ({
                    ...prev,
                    [target]: {
                        ...prev?.[target],
                        [resourceType]: {
                            ...prev?.[target]?.[resourceType],
                            requestOn: getCurrentTimeStamp(),
                            loadingState: LoadingStates.Loading,
                        },
                    },
                }));
            },

            individualPokemonInfoRequestSucceeded: (
                resourceType,
                target,
                results
            ) => {
                setIndividualPokemonState((prev) => ({
                    ...prev,
                    [target]: {
                        ...prev?.[target],
                        [resourceType]: {
                            ...prev?.[target]?.[resourceType],
                            fetchedOn: getCurrentTimeStamp(),
                            loadingState: LoadingStates.Success,
                            resource: results,
                        },
                    },
                }));
            },

            individualPokemonInfoRequestFailed: (
                resourceType,
                target,
                error
            ) => {
                setIndividualPokemonState((prev) => ({
                    ...prev,
                    [target]: {
                        ...prev?.[target],
                        [resourceType]: {
                            ...prev?.[target]?.[resourceType],
                            failedOn: getCurrentTimeStamp(),
                            loadingState: LoadingStates.Fail,
                            error,
                        },
                    },
                }));
            },

            listPokemonRequestMade: (pagination) => {
                setListPokemonState((prev) => ({
                    pagination,
                    loadingState: LoadingStates.Loading,
                    requestOn: getCurrentTimeStamp(),
                }));
            },
            listPokemonRequestSuccess: (pagination, results) => {
                setListPokemonState((prev) => ({
                    pagination,
                    loadingState: LoadingStates.Success,
                    fetchedOn: getCurrentTimeStamp(),
                    resource: results,
                }));
            },
            listPokemonRequestFailed: (pagination, error) => {
                setListPokemonState((prev) => ({
                    failedOn: getCurrentTimeStamp(),
                    error,
                    pagination,
                    loadingState: LoadingStates.Fail,
                }));
            },
        }),
        []
    );

    return { individualPokemonState, listPokemonState, stateHandlers };
}
