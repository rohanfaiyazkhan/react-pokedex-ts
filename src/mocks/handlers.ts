import { rest } from "msw";
import {
    getSinglePokemonApiRoute,
    getPokemonListApiRoute,
} from "../contexts/NetworkCacheLayer/getApiRoute";
import { ValidResourceNames } from "../contexts/NetworkCacheLayer/ValidResourceNames";
import { mockPokemonResponse } from "./pokemon.mock";
import { mockSpeciesResponse } from "./species.mock";
import { mockListResponse } from "./listPokemon.mock";

const pokemonRoute = getSinglePokemonApiRoute(ValidResourceNames.Pokemon);
const speciesRoute = getSinglePokemonApiRoute(ValidResourceNames.Species);
const listRoute = getPokemonListApiRoute(0, 100);

export const handlers = [
    rest.get(pokemonRoute.toString() + "/:id", (req, res, ctx) => {
        return res(ctx.json(mockPokemonResponse));
    }),
    rest.get(speciesRoute.toString() + "/:id", (req, res, ctx) => {
        return res(ctx.json(mockSpeciesResponse));
    }),
    rest.get(listRoute.toString(), (req, res, ctx) => {
        return res(ctx.json(mockListResponse));
    }),
];
