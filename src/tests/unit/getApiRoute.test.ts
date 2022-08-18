import { ValidResourceNames } from "../../contexts/NetworkCacheLayer/ValidResourceNames";
import { getApiRoute } from "../../utils/requests/getApiRoute";

describe("Checks that getApiRoute works as expected", () => {
    it("Checks that the pokemon with id of 0 returns correct route", () => {
        const route = getApiRoute(ValidResourceNames.Pokemon, 0);
        expect(route).toBe("https://pokeapi.co/api/v2/pokemon/0");
    });

    it("Checks that the pokemon species with id of 0 returns correct route", () => {
        const route = getApiRoute(ValidResourceNames.Species, 0);
        expect(route).toBe("https://pokeapi.co/api/v2/pokemon-species/0");
    });
});
