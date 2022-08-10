export enum PokemonTypes {
    Normal = "normal",
    Fire = "fire",
    Fighting = "fighting",
    Water = "water",
    Flying = "flying",
    Grass = "grass",
    Poison = "poison",
    Electric = "electric",
    Ground = "ground",
    Psychic = "psychic",
    Rock = "rock",
    Ice = "ice",
    Bug = "bug",
    Dragon = "dragon",
    Ghost = "ghost",
    Dark = "dark",
    Steel = "steel",
    Fairy = "fairy",
}

export interface IPokemonType {
    slot: number;
    type: {
        name: PokemonTypes;
        url: string;
    };
}

export const PokemonTypeColors = Object.freeze({
    [PokemonTypes.Bug]: "rgb(168, 184, 32)",
    [PokemonTypes.Dark]: "rgb(112, 88, 72)",
    [PokemonTypes.Dragon]: "rgb(112, 56, 248)",
    [PokemonTypes.Electric]: "rgb(248, 208, 48)",
    [PokemonTypes.Fairy]: "rgb(240, 182, 188)",
    [PokemonTypes.Fighting]: "rgb(192, 48, 40)",
    [PokemonTypes.Fire]: "rgb(240, 128, 48)",
    [PokemonTypes.Flying]: "rgb(168, 144, 240)",
    [PokemonTypes.Ghost]: "rgb(112, 88, 152)",
    [PokemonTypes.Grass]: "rgb(120, 200, 80)",
    [PokemonTypes.Ground]: "rgb(224, 192, 104)",
    [PokemonTypes.Ice]: "rgb(152, 216, 216)",
    [PokemonTypes.Normal]: "rgb(168, 168, 120)",
    [PokemonTypes.Poison]: "rgb(160, 64, 160)",
    [PokemonTypes.Psychic]: "rgb(248, 88, 136)",
    [PokemonTypes.Rock]: "rgb(184, 160, 56)",
    [PokemonTypes.Steel]: "rgb(184, 184, 208)",
    [PokemonTypes.Water]: "rgb(104, 144, 240)",
});
