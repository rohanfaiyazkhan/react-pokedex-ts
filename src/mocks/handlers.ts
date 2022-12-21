import { rest } from "msw";

import { mockPokemonResponse } from "./data/pokemon.mock";
import { mockSpeciesResponse } from "./data/species.mock";
import { mockListResponse } from "./data/listPokemon.mock";
import { mockEvolutionChain } from "./data/evolutionChain.mock";
import { ApiPathFactory } from "../requests/ApiPathFactory";

export const handlers = [
    rest.get(ApiPathFactory.pokemon(":id"), (req, res, ctx) => {
        return res(ctx.delay(2000), ctx.json(mockPokemonResponse));
    }),
    rest.get(ApiPathFactory.species(":id"), (req, res, ctx) => {
        return res(ctx.delay(2000), ctx.json(mockSpeciesResponse));
    }),
    rest.get(ApiPathFactory.evolutionChain(":id"), (req, res, ctx) => {
        return res(ctx.delay(2000), ctx.json(mockEvolutionChain));
    }),
    rest.get(ApiPathFactory.list, (req, res, ctx) => {
        return res(ctx.delay(2000), ctx.json(mockListResponse));
    }),
];
