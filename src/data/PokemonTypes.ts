export enum PokemonTypeNames {
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
        name: PokemonTypeNames;
        url: string;
    };
}
