import axios from "axios";
import { PokemonSpeciesInferredType } from "./data";
import { getSinglePokemonApiRoute } from "../getApiRoute";
import { POKEMON_SPECIES_RESOURCE_KEY } from "./key";

export function makePokemonSpeciesRequest(id: number) {
    const apiUrl = getSinglePokemonApiRoute(POKEMON_SPECIES_RESOURCE_KEY, id);
    return axios.get<PokemonSpeciesInferredType>(apiUrl.toString());
}
