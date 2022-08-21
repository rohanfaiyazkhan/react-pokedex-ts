import axios from "axios";
import { ValidResourceNames } from "../../contexts/NetworkCacheLayer/ValidResourceNames";
import { PokemonListInferredType } from "../../data/InferredTypes";
import { PaginationInfo } from "../../data/ResourceContainer";
import {
    getPokemonListApiRoute,
    getSinglePokemonApiRoute,
} from "./getApiRoute";

export function makeSinglePokemonRequest(
    resourceType: ValidResourceNames,
    target: number
) {
    const apiUrl = getSinglePokemonApiRoute(resourceType, target);

    return axios.get(apiUrl.toString());
}

export function makeListPokemonRequest(pagination: PaginationInfo) {
    const listUrl = getPokemonListApiRoute(pagination);

    return axios.get<PokemonListInferredType>(listUrl.toString());
}
