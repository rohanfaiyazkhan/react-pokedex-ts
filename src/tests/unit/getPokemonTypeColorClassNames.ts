import { getPokemonTypeColorClassNames } from "./../../colors/getPokemonTypeColorClassNames";
import { PokemonTypeNames } from "./../../data/PokemonTypes/PokemonTypeNames";

describe("getPokemonTypeColorClassNames properly returns type appropriate color class names", () => {
    const empty = getPokemonTypeColorClassNames();
    const colors = getPokemonTypeColorClassNames(PokemonTypeNames.Electric);

    expect(empty).toBe(undefined);
    expect(colors).toBeDefined();
    expect(colors?.bg).toBe("bg-yellow-100");
    expect(colors?.text).toBe("text-gray-900");
});
