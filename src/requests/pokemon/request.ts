import { PokemonInferredType } from "./data";
import { apiRequest } from "../httpClient";
import { ApiPaths } from "./../ApiPaths";
import { AxiosRequestConfig } from "axios";

export async function makeIndividualPokemonRequest(id: number) {
    const path = ApiPaths.Pokemon;

    const options: AxiosRequestConfig = {
        params: { id },
    };

    return apiRequest<PokemonInferredType>(path, options);
}
