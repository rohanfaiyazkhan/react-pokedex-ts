export interface IISpriteUrlConfig {
    frontOrBack?: "front" | "back"; // defaults to front
    shiny?: boolean; // defaults to false
}

export function getSpriteUrl(id: number, config?: IISpriteUrlConfig) {
    const baseUrl = new URL(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
    );
    const resultArray: string[] = [];
    const frontOrBack = config?.frontOrBack ?? "front";

    if (frontOrBack === "back") {
        resultArray.push(frontOrBack);
    }

    resultArray.push(id.toString() + ".png");
    baseUrl.pathname = baseUrl.pathname + "/" + resultArray.join("/");

    return baseUrl;
}
