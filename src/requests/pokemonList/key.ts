import { PaginationInfo } from "../../data/PaginationInfo";
import { ResourceKeys } from "../ResourceKeys";

export const POKEMON_LIST_RESOURCE_KEY = ResourceKeys.List;

export const PokemonListResourceKeyFactory = {
    all: [POKEMON_LIST_RESOURCE_KEY] as const,
    paginated: (paginationInfo: PaginationInfo) =>
        [POKEMON_LIST_RESOURCE_KEY, paginationInfo] as const,
};
