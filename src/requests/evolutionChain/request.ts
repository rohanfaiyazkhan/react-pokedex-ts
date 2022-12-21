import { apiRequest } from "../httpClient";
import { EvolutionChainResponse } from "./data";
import { ApiPathFactory } from "./../ApiPathFactory";

export function makeEvolutionChainRequest(id: number) {
    const path = ApiPathFactory.evolutionChain(id);

    return apiRequest<EvolutionChainResponse>(path);
}
