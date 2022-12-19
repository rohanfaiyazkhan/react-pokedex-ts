import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { makePokemonSpeciesRequest } from "./request";
import { POKEMON_SPECIES_RESOURCE_KEY } from "./key";
import { PokemonSpeciesInferredType } from "./data";

export function useIndividualPokemonSpeciesAPI(id: number) {
    return useQuery<AxiosResponse<PokemonSpeciesInferredType>>(
        [POKEMON_SPECIES_RESOURCE_KEY, id],
        () => makePokemonSpeciesRequest(id)
    );
}
