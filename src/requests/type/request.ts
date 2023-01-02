import { apiRequest } from "../httpClient";
import { ApiPathFactory } from "./../ApiPathFactory";
import { PokemonTypeInferredType } from "./data";

export function makePokemonTypeRequest(id: number) {
    const path = ApiPathFactory.type(id);

    return apiRequest<PokemonTypeInferredType>(path);
}
