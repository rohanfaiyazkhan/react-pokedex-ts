import { PaginationInfo } from "../../data/PaginationInfo";
import { getPokemonListApiPath } from "../getApiRoute";
import { apiRequest } from "../httpClient";
import { PokemonListInferredType } from "./data";

export async function makeListPokemonRequest(pagination: PaginationInfo) {
    const listUrl = getPokemonListApiPath(pagination);

    return apiRequest<PokemonListInferredType>(listUrl.toString());
}
