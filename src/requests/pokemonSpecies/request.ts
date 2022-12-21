import { PokemonSpeciesInferredType } from "./data";
import { apiRequest } from "../httpClient";
import { ApiPathFactory } from "./../ApiPathFactory";

export function makePokemonSpeciesRequest(id: number) {
    const path = ApiPathFactory.species(id);

    return apiRequest<PokemonSpeciesInferredType>(path);
}
