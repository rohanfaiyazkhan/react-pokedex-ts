export type SpriteUrlConfig = {
    facing?: "front" | "back"; // defaults to front
    shiny?: boolean; // defaults to false
};

export function getSpriteUrl(id: number, config?: SpriteUrlConfig) {
    const baseUrl = new URL(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
    );
    const resultArray: string[] = [];
    const facing = config?.facing ?? "front";

    if (facing === "back") {
        resultArray.push(facing);
    }

    resultArray.push(id.toString() + ".png");
    baseUrl.pathname = baseUrl.pathname + "/" + resultArray.join("/");

    return baseUrl;
}
