import { PokemonInferredType } from "./data";
import { apiRequest } from "../httpClient";
import { ApiPathFactory } from "./../ApiPathFactory";

export async function makeIndividualPokemonRequest(id: number) {
    const path = ApiPathFactory.pokemon(id);

    return apiRequest<PokemonInferredType>(path);
}
