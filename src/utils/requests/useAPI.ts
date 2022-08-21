import { ValidResourceNames } from "../../contexts/NetworkCacheLayer/ValidResourceNames";
import {
    useIndividualResourceCache,
    useListResourceCache,
} from "../../contexts/NetworkCacheLayer/NetworkCacheContext";
import { useCallback } from "react";
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

export function useSingePokemonAPI(
    resourceType: ValidResourceNames,
    target: number
): [
    ResourceContent<PokemonInferredType>,
    (resourceType: ValidResourceNames, target: number) => void
] {
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

    return [resource, request];
}

export function useListPokemonAPI(
    paginationInfo: PaginationInfo
): [ListResourceContainer, () => void] {
    const resource = useListResourceCache();

    const request = useCallback(() => {
        makeListPokemonRequest(paginationInfo);
    }, [paginationInfo]);

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

    return [resource, request];
}
