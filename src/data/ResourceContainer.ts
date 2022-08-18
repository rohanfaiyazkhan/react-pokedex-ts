import { LoadingStates } from "./LoadingStates";
import { ValidResourceNames } from "../contexts/NetworkCacheLayer/ValidResourceNames";
import {
    PokemonInferredType,
    PokemonListInferredType,
    PokemonSpeciesInferredType,
} from "./InferredTypes";

export interface ResourceContent<R = any> {
    loadingState?: LoadingStates;
    fetchedOn?: number;
    failedOn?: number;
    requestOn?: number;
    resource?: R;
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
