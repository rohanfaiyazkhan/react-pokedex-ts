import { useQuery } from "@tanstack/react-query";
import { makePokemonSpeciesRequest } from "./request";
import { POKEMON_SPECIES_RESOURCE_KEY } from "./key";
import { PokemonSpeciesInferredType } from "./data";

export function useIndividualPokemonSpeciesQuery(id: number) {
    return useQuery<PokemonSpeciesInferredType>(
        [POKEMON_SPECIES_RESOURCE_KEY, id],
        () => makePokemonSpeciesRequest(id)
    );
}
