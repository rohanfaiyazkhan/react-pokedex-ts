import axios from "axios";
import { ValidResourceNames } from "../../contexts/NetworkCacheLayer/ValidResourceNames";
import {
    PokemonInferredType,
    PokemonListInferredType,
    PokemonSpeciesInferredType,
} from "../../data/InferredTypes";
import { PaginationInfo } from "../../data/ResourceContainer";
import { IEvolutionChainResponse } from "./../../data/EvolutionChain";
import {
    getPokemonListApiRoute,
    getSinglePokemonApiRoute,
} from "./getApiRoute";

export function makePokemonRequest(target: number) {
    const apiUrl = getSinglePokemonApiRoute(ValidResourceNames.Pokemon, target);

    return axios.get<PokemonInferredType>(apiUrl.toString());
}

export function makePokemonSpeciesRequest(target: number) {
    const apiUrl = getSinglePokemonApiRoute(ValidResourceNames.Species, target);

    return axios.get<PokemonSpeciesInferredType>(apiUrl.toString());
}

export function makeEvolutionChainRequest(target: number) {
    const apiUrl = getSinglePokemonApiRoute(
        ValidResourceNames.EvolutionChain,
        target
    );

    return axios.get<IEvolutionChainResponse>(apiUrl.toString());
}

export function makeListPokemonRequest(pagination: PaginationInfo) {
    const listUrl = getPokemonListApiRoute(pagination);

    return axios.get<PokemonListInferredType>(listUrl.toString());
}
