import { PaginationInfo } from "../../data/PaginationInfo";
import { apiRequest } from "../httpClient";
import { PokemonListInferredType } from "./data";
import { ApiPaths } from "./../ApiPaths";
import { AxiosRequestConfig } from "axios";

export async function makeListPokemonRequest(pagination: PaginationInfo) {
    const listUrl = ApiPaths.List;
    const searchParams = new URLSearchParams();
    searchParams.set("offset", pagination.offset.toString());
    searchParams.set("limit", pagination.limit.toString());

    const options: AxiosRequestConfig = { params: searchParams };

    return apiRequest<PokemonListInferredType>(listUrl, options);
}
