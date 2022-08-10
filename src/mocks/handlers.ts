import { rest } from "msw";
import { getApiRoute } from "../contexts/NetworkCacheLayer/getApiRoute";
import { ValidResourceNames } from "../contexts/NetworkCacheLayer/ValidResourceNames";
import { mockPokemonResponse } from "./pokemon.mock";
import mockSpeciesResponse from "./species.mock";

const pokemonRoute = getApiRoute(ValidResourceNames.Pokemon);
const speciesRoute = getApiRoute(ValidResourceNames.Species);

export const handlers = [
    rest.get(pokemonRoute + "/:id", (req, res, ctx) => {
        return res(ctx.json(mockPokemonResponse));
    }),
    rest.get(speciesRoute + "/:id", (req, res, ctx) => {
        return res(ctx.json(mockSpeciesResponse));
    }),
];
