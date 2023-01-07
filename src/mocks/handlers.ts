import { rest } from "msw";

import { mockPokemonResponse } from "./data/pokemon.mock";
import { mockSpeciesResponse } from "./data/species.mock";
import { mockListResponse } from "./data/listPokemon.mock";
import { mockEvolutionChain } from "./data/evolutionChain.mock";
import { ApiPathFactory } from "../requests/ApiPathFactory";
import { BASE_API_URL } from "./../requests/NetworkConfig";

const baseUrl = BASE_API_URL;

export const handlers = [
    rest.get(baseUrl + ApiPathFactory.pokemon(":id"), (req, res, ctx) => {
        return res(ctx.delay(1000), ctx.json(mockPokemonResponse));
    }),
    rest.get(baseUrl + ApiPathFactory.species(":id"), (req, res, ctx) => {
        return res(ctx.delay(1000), ctx.json(mockSpeciesResponse));
    }),
    rest.get(
        baseUrl + ApiPathFactory.evolutionChain(":id"),
        (req, res, ctx) => {
            return res(ctx.delay(1000), ctx.json(mockEvolutionChain));
        }
    ),
    rest.get(baseUrl + ApiPathFactory.list, (req, res, ctx) => {
        return res(ctx.delay(1000), ctx.json(mockListResponse));
    }),
];
