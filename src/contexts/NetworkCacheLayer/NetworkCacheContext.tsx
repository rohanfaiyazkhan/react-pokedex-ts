import { createContext, useContext } from "react";
import { PokemonInferredType } from "../../data/InferredTypes";
import {
    IndividualResourceContainer,
    ListResourceContainer,
    ResourceContent,
} from "../../data/ResourceContainer";
import { ValidResourceNames } from "./ValidResourceNames";

const initialState = {};
export const IndividualNetworkCacheContext =
    createContext<IndividualResourceContainer>(initialState);

export const ListResourceCacheContext =
    createContext<ListResourceContainer>(initialState);

export function useIndividualResourceCache(
    resourceType: ValidResourceNames,
    target: number
) {
    const contextValue = useContext(IndividualNetworkCacheContext);
    return contextValue?.[target]?.[
        resourceType
    ] as ResourceContent<PokemonInferredType>;
}

export function useListResourceCache(): ListResourceContainer {
    return useContext(ListResourceCacheContext);
}
