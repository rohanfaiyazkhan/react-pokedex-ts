import { PokemonTypeNames } from "../data/PokemonTypes/PokemonTypeNames";

/**
 * Appropriate background and text color classNames for each pokemon type
 * For example water types will have a blue background and fire types will have a red background
 */
export const PokemonTypeColorClassNames = {
    [PokemonTypeNames.Normal]: {
        text: "text-deep-orange-900",
        bg: "bg-deep-orange-100",
    } as const,
    [PokemonTypeNames.Fire]: {
        text: "text-gray-100",
        bg: "bg-deep-orange-800",
    } as const,
    [PokemonTypeNames.Water]: {
        text: "text-blue-900",
        bg: "bg-blue-200",
    } as const,
    [PokemonTypeNames.Grass]: {
        text: "text-green-900",
        bg: "bg-light-green-100",
    } as const,
    [PokemonTypeNames.Electric]: {
        text: "text-gray-900",
        bg: "bg-yellow-100",
    } as const,
    [PokemonTypeNames.Ice]: {
        text: "text-gray-900",
        bg: "bg-cyan-100",
    } as const,
    [PokemonTypeNames.Fighting]: {
        text: "text-gray-900",
        bg: "bg-deep-orange-100-accent",
    } as const,
    [PokemonTypeNames.Poison]: {
        text: "text-gray-100",
        bg: "bg-purple-900",
    } as const,
    [PokemonTypeNames.Ground]: {
        text: "text-gray-900",
        bg: "bg-brown-200",
    } as const,
    [PokemonTypeNames.Flying]: {
        text: "text-gray-900",
        bg: "bg-cyan-300",
    } as const,
    [PokemonTypeNames.Psychic]: {
        text: "text-gray-900",
        bg: "bg-purple-50",
    } as const,
    [PokemonTypeNames.Bug]: {
        text: "text-gray-900",
        bg: "bg-lime-50",
    } as const,
    [PokemonTypeNames.Rock]: {
        text: "text-gray-100",
        bg: "bg-brown-600",
    } as const,
    [PokemonTypeNames.Ghost]: {
        text: "text-gray-900",
        bg: "bg-blue-grey-200",
    } as const,
    [PokemonTypeNames.Dark]: {
        text: "text-gray-100",
        bg: "bg-grey-600",
    } as const,
    [PokemonTypeNames.Dragon]: {
        text: "text-gray-900",
        bg: "bg-amber-200",
    } as const,
    [PokemonTypeNames.Steel]: {
        text: "text-gray-900",
        bg: "bg-blue-grey-300",
    } as const,
    [PokemonTypeNames.Fairy]: {
        text: "text-gray-900",
        bg: "bg-pink-100",
    } as const,
};
