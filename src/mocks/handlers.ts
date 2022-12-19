import { rest } from "msw";
import {
    getSinglePokemonApiRoute,
    getPokemonListApiRoute,
} from "../utils/requests/getApiRoute";
import { ResourceKeys } from "../requests/ResourceKeys";
import { mockPokemonResponse } from "./data/pokemon.mock";
import { mockSpeciesResponse } from "./data/species.mock";
import { mockListResponse } from "./data/listPokemon.mock";
import { mockEvolutionChain } from "./data/evolutionChain.mock";

const pokemonRoute = getSinglePokemonApiRoute(ResourceKeys.Pokemon);
const speciesRoute = getSinglePokemonApiRoute(ResourceKeys.Species);
const listRoute = getPokemonListApiRoute({
    limit: 50,
    offset: 0,
});
const evolutionChainRoute = getSinglePokemonApiRoute(
    ResourceKeys.EvolutionChain
);

export const handlers = [
    rest.get(pokemonRoute.toString() + "/:id", (req, res, ctx) => {
        return res(ctx.delay(2000), ctx.json(mockPokemonResponse));
    }),
    rest.get(speciesRoute.toString() + "/:id", (req, res, ctx) => {
        return res(ctx.delay(2000), ctx.json(mockSpeciesResponse));
    }),
    rest.get(evolutionChainRoute.toString() + "/:id", (req, res, ctx) => {
        return res(ctx.delay(2000), ctx.json(mockEvolutionChain));
    }),
    rest.get(listRoute.toString(), (req, res, ctx) => {
        return res(ctx.delay(2000), ctx.json(mockListResponse));
    }),
];
