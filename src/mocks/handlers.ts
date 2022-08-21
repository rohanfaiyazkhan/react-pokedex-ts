import { rest } from "msw";
import {
    getSinglePokemonApiRoute,
    getPokemonListApiRoute,
} from "../utils/requests/getApiRoute";
import { ValidResourceNames } from "../contexts/NetworkCacheLayer/ValidResourceNames";
import { mockPokemonResponse } from "./pokemon.mock";
import { mockSpeciesResponse } from "./species.mock";
import { mockListResponse } from "./listPokemon.mock";

const pokemonRoute = getSinglePokemonApiRoute(ValidResourceNames.Pokemon);
const speciesRoute = getSinglePokemonApiRoute(ValidResourceNames.Species);
const listRoute = getPokemonListApiRoute({
    limit: 100,
    offset: 0,
});

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
