import { LoadingStates } from "./LoadingStates";
import { ValidResourceNames } from "../contexts/NetworkCacheLayer/ValidResourceNames";
import {
    PokemonInferredType,
    PokemonListInferredType,
    PokemonSpeciesInferredType,
} from "./InferredTypes";

export interface ResourceContent<D = any> {
    loadingState?: LoadingStates;
    fetchedOn?: number;
    failedOn?: number;
    requestOn?: number;
    data?: D;
    error?: any;
}

export type PaginationInfo = {
    offset: number;
    limit: number;
};

export interface ListResourceContainer
    extends ResourceContent<PokemonListInferredType> {
    pagination?: PaginationInfo;
}

export interface IndividualResourceContainer {
    [id: number]: {
        [ValidResourceNames.Pokemon]: ResourceContent<PokemonInferredType>;
        [ValidResourceNames.Species]: ResourceContent<PokemonSpeciesInferredType>;
    };
}
