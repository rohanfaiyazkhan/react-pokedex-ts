import { ResourceKeys } from "./ResourceKeys";

export const ApiPaths = {
    Pokemon: `/${ResourceKeys.Pokemon}/:id`,
    Species: `/${ResourceKeys.Species}/:id`,
    EvolutionChain: `/${ResourceKeys.EvolutionChain}/:id`,
    Move: `/${ResourceKeys.Move}/:id`,
    List: `/pokemon`,
} as const;
