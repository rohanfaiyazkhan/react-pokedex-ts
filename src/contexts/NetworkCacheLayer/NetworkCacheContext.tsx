import { createContext, useContext } from "react";
import {
    IndividualResourceContainer,
    ListResourceContainer,
} from "../../data/ResourceContainer";

const initialState = {};
export const IndividualNetworkCacheContext =
    createContext<IndividualResourceContainer>(initialState);

export const ListResourceCacheContext =
    createContext<ListResourceContainer>(initialState);

export function useIndividualResourceCache(): IndividualResourceContainer {
    return useContext(IndividualNetworkCacheContext);
}

export function useListResourceCache(): ListResourceContainer {
    return useContext(ListResourceCacheContext);
}
