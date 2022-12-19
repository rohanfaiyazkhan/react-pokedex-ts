import { PokemonListInferredType } from "../../data/InferredTypes";
import { PaginationInfo } from "../../data/ResourceContainer";
import { ResourceKeys } from "../../requests/ResourceKeys";
import { createContext, useContext } from "react";

/**
 * All the methods for dealing with cache state data are described here
 */
export type NetworkCacheStateHandlers = {
    individualPokemonInfoRequestMade: (
        resourceType: ResourceKeys,
        target: number
    ) => void;
    individualPokemonInfoRequestSucceeded: (
        resourceType: ResourceKeys,
        target: number,
        results: any
    ) => void;
    individualPokemonInfoRequestFailed: (
        resourceType: ResourceKeys,
        target: number,
        error: any
    ) => void;
    listPokemonRequestMade: (pagination: PaginationInfo) => void;
    listPokemonRequestSuccess: (
        pagination: PaginationInfo,
        results: PokemonListInferredType
    ) => void;
    listPokemonRequestFailed: (pagination: PaginationInfo, error: any) => void;
};

const emptyInitializer: NetworkCacheStateHandlers = {
    individualPokemonInfoRequestMade() {},
    individualPokemonInfoRequestSucceeded() {},
    individualPokemonInfoRequestFailed() {},
    listPokemonRequestMade() {},
    listPokemonRequestSuccess() {},
    listPokemonRequestFailed() {},
};

export const NetworkCacheStateHandlerContext =
    createContext<NetworkCacheStateHandlers>(emptyInitializer);

export function useCacheStateHandlerContext() {
    return useContext(NetworkCacheStateHandlerContext);
}
