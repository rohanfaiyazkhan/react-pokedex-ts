import { getSpriteUrl } from "../../utils/getSpriteUrl";

describe("Expects getSpriteUrl to work correctly", () => {
    const url = getSpriteUrl(50);

    expect(url).toBe(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
    );
});
