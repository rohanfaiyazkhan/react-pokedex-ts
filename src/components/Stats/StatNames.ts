export enum StatNames {
    HP = "hp",
    Attack = "attack",
    Defense = "defense",
    SpAtk = "special-attack",
    SpDef = "special-defense",
    Speed = "speed",
    Overall = "overall",
}

export const StatReadableTexts = Object.freeze({
    [StatNames.HP]: "HP",
    [StatNames.Attack]: "Attack",
    [StatNames.Defense]: "Defense",
    [StatNames.SpAtk]: "Sp. Atk",
    [StatNames.SpDef]: "Sp. Def",
    [StatNames.Speed]: "Speed",
    [StatNames.Overall]: "Overall",
});
