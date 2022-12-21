import { PokemonSpeciesInferredType } from "./data";
import { apiRequest } from "../httpClient";
import { ApiPaths } from "./../ApiPaths";
import { AxiosRequestConfig } from "axios";

export function makePokemonSpeciesRequest(id: number) {
    const path = ApiPaths.Species;
    const options: AxiosRequestConfig = { params: { id } };

    return apiRequest<PokemonSpeciesInferredType>(path, options);
}
