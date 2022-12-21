import { apiRequest } from "../httpClient";
import { EvolutionChainResponse } from "./data";
import { ApiPaths } from "./../ApiPaths";
import { AxiosRequestConfig } from "axios";

export function makeEvolutionChainRequest(id: number) {
    const path = ApiPaths.EvolutionChain;
    const options: AxiosRequestConfig = { params: { id } };

    return apiRequest<EvolutionChainResponse>(path, options);
}
