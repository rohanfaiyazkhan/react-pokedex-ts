import axios from "axios";
import { PaginationInfo } from "../../data/PaginationInfo";
import { getPokemonListApiRoute } from "../getApiRoute";
import { PokemonListInferredType } from "./data";

export function makeListPokemonRequest(pagination: PaginationInfo) {
    const listUrl = getPokemonListApiRoute(pagination);

    return axios.get<PokemonListInferredType>(listUrl.toString());
}
