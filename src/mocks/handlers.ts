import { rest } from "msw";

import { mockPokemonResponse } from "./data/pokemon.mock";
import { mockSpeciesResponse } from "./data/species.mock";
import { mockListResponse } from "./data/listPokemon.mock";
import { mockEvolutionChain } from "./data/evolutionChain.mock";
import { ApiPaths } from "./../requests/ApiPaths";

export const handlers = [
    rest.get(ApiPaths.Pokemon, (req, res, ctx) => {
        return res(ctx.delay(2000), ctx.json(mockPokemonResponse));
    }),
    rest.get(ApiPaths.Species, (req, res, ctx) => {
        return res(ctx.delay(2000), ctx.json(mockSpeciesResponse));
    }),
    rest.get(ApiPaths.EvolutionChain, (req, res, ctx) => {
        return res(ctx.delay(2000), ctx.json(mockEvolutionChain));
    }),
    rest.get(ApiPaths.List, (req, res, ctx) => {
        return res(ctx.delay(2000), ctx.json(mockListResponse));
    }),
];
