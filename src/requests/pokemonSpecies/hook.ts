import { useQuery } from "@tanstack/react-query";
import { makePokemonSpeciesRequest } from "./request";
import { POKEMON_SPECIES_RESOURCE_KEY } from "./key";

export function useIndividualPokemonSpeciesQuery(id: number) {
    return useQuery([POKEMON_SPECIES_RESOURCE_KEY, id], () =>
        makePokemonSpeciesRequest(id)
    );
}
