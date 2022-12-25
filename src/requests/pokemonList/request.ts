import { apiRequest } from "../httpClient";
import { PokemonListInferredType } from "./data";
import { ApiPathFactory } from "./../ApiPathFactory";
import { AxiosRequestConfig } from "axios";
import { NumberOfItemsPerPage } from "./../NetworkConfig";

export async function makeListPokemonRequest(pageNumber: number) {
    const listUrl = ApiPathFactory.list;

    const searchParams = new URLSearchParams();
    searchParams.set("offset", pageNumber.toString());
    searchParams.set("limit", NumberOfItemsPerPage.DEFAULT.toString());

    const axiosParams: AxiosRequestConfig = { params: searchParams };

    return apiRequest<PokemonListInferredType>(listUrl, axiosParams);
}
