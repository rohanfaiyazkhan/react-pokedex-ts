import { ValidResourceNames } from "../../contexts/NetworkCacheLayer/ValidResourceNames";
import {
    useIndividualResourceCache,
    useListResourceCache,
} from "../../contexts/NetworkCacheLayer/NetworkCacheContext";
import { useCallback, useRef } from "react";
import {
    makeListPokemonRequest,
    makePokemonRequest,
    makePokemonSpeciesRequest,
    makeEvolutionChainRequest,
} from "./makeRequest";
import { useEffect } from "react";
import { LoadingStates } from "../../data/LoadingStates";
import { isDataStale } from "./isDataStale";
import {
    ListResourceContainer,
    PaginationInfo,
    ResourceContent,
} from "../../data/ResourceContainer";
import {
    PokemonInferredType,
    PokemonSpeciesInferredType,
} from "../../data/InferredTypes";
import { useCacheStateHandlerContext } from "../../contexts/NetworkCacheLayer/NetworkCacheStateHandlers";
import { IEvolutionChainResponse } from "./../../data/EvolutionChain";
import { AxiosResponse } from "axios";

const POKEMON = ValidResourceNames.Pokemon;
const SPECIES = ValidResourceNames.Species;
const EVOLUTION_CHAIN = ValidResourceNames.EvolutionChain;

export function useIndividualResourceAPI<T>(
    target: number,
    resourceType: ValidResourceNames
): [ResourceContent<T>, (target: number) => void] {
    const resource = useIndividualResourceCache(
        resourceType,
        target
    ) as unknown as ResourceContent<T>;
    const {
        individualPokemonInfoRequestMade,
        individualPokemonInfoRequestSucceeded,
        individualPokemonInfoRequestFailed,
    } = useCacheStateHandlerContext();

    const request = useCallback(
        (target: number) => {
            let promise: Promise<
                AxiosResponse<
                    | PokemonInferredType
                    | PokemonSpeciesInferredType
                    | IEvolutionChainResponse
                >
            >;

            if (resourceType === POKEMON) {
                promise = makePokemonRequest(target);
            } else if (resourceType === SPECIES) {
                promise = makePokemonSpeciesRequest(target);
            } else {
                promise = makeEvolutionChainRequest(target);
            }
            individualPokemonInfoRequestMade(resourceType, target);

            promise
                .then((response) => {
                    individualPokemonInfoRequestSucceeded(
                        resourceType,
                        target,
                        response.data
                    );
                })
                .catch((err) => {
                    if (err.response) {
                        individualPokemonInfoRequestFailed(
                            resourceType,
                            target,
                            err.response
                        );
                    } else if (err.request) {
                        individualPokemonInfoRequestFailed(
                            resourceType,
                            target,
                            {
                                message: "Empty response recieved from API",
                            }
                        );
                    } else {
                        individualPokemonInfoRequestFailed(
                            resourceType,
                            target,
                            {
                                message: err.message,
                            }
                        );
                    }
                });
        },
        [
            individualPokemonInfoRequestFailed,
            individualPokemonInfoRequestMade,
            individualPokemonInfoRequestSucceeded,
            resourceType,
        ]
    );

    const loadingState = resource?.loadingState;
    const isResourceEmpty = !resource?.data;
    const fetchedOn = resource?.fetchedOn;

    const attemptRef = useRef(0);
    const isFirstRequest = attemptRef.current === 0;

    useEffect(() => {
        if (isResourceEmpty && isFirstRequest) {
            request(target);
        } else if (
            fetchedOn !== undefined &&
            isDataStale(fetchedOn) &&
            loadingState !== LoadingStates.Loading
        ) {
            request(target);
        }
    }, [
        fetchedOn,
        isFirstRequest,
        isResourceEmpty,
        loadingState,
        request,
        target,
    ]);

    return [resource, request];
}

export function useIndividualPokemonAPI(target: number) {
    return useIndividualResourceAPI<PokemonInferredType>(target, POKEMON);
}

export function useIndividualPokemonSpeciesAPI(target: number) {
    return useIndividualResourceAPI<PokemonSpeciesInferredType>(
        target,
        SPECIES
    );
}

export function useEvolutionContextApi(target: number) {
    return useIndividualResourceAPI<IEvolutionChainResponse>(
        target,
        EVOLUTION_CHAIN
    );
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
