import { ResourceKeys } from "./ResourceKeys";

export const ApiPathFactory = {
    pokemon: (id: number | string) => `/${ResourceKeys.Pokemon}/${id}` as const,
    species: (id: number | string) => `/${ResourceKeys.Species}/${id}` as const,
    evolutionChain: (id: number | string) =>
        `/${ResourceKeys.EvolutionChain}/${id}` as const,
    move: (id: number | string) => `/${ResourceKeys.Move}/${id}` as const,
    list: `/pokemon` as const,
};
