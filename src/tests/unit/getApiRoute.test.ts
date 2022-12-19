import { ResourceKeys } from "../../requests/ResourceKeys";
import { getSinglePokemonApiRoute } from "../../utils/requests/getApiRoute";

describe("Checks that getSinglePokemonApiRoute works as expected", () => {
    it("Checks that the pokemon with id of 0 returns correct route", () => {
        const route = getSinglePokemonApiRoute(ResourceKeys.Pokemon, 0);
        expect(route).toBe("https://pokeapi.co/api/v2/pokemon/0");
    });

    it("Checks that the pokemon species with id of 0 returns correct route", () => {
        const route = getSinglePokemonApiRoute(ResourceKeys.Species, 0);
        expect(route).toBe("https://pokeapi.co/api/v2/pokemon-species/0");
    });
});
