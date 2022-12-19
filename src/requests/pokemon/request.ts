import axios from "axios";
import { PokemonInferredType } from "./data";
import { getSinglePokemonApiRoute } from "../getApiRoute";
import { POKEMON_RESOURCE_KEY } from "./key";

export function makeIndividualPokemonRequest(id: number) {
    const apiUrl = getSinglePokemonApiRoute(POKEMON_RESOURCE_KEY, id);
    return axios.get<PokemonInferredType>(apiUrl.toString());
}
