import { PokemonTypeNames } from "../data/PokemonTypes/PokemonType";

/**
 * Appropriate background and text color classNames for each pokemon type
 * For example water types will have a blue background and fire types will have a red background
 */
export const PokemonTypeColorClassNames = {
    [PokemonTypeNames.Normal]: {
        text: "text-deep-orange-900",
        bg: "bg-deep-orange-100",
    },
    [PokemonTypeNames.Fire]: {
        text: "bg-gray-100",
        bg: "bg-deep-orange-500",
    },
    [PokemonTypeNames.Water]: {
        text: "text-blue-900",
        bg: "bg-blue-200",
    },
    [PokemonTypeNames.Grass]: {
        text: "text-green-900",
        bg: "bg-light-green-100",
    },
    [PokemonTypeNames.Electric]: {
        text: "text-gray-900",
        bg: "bg-yellow-300",
    },
    [PokemonTypeNames.Ice]: {
        text: "text-gray-900",
        bg: "bg-cyan-100",
    },
    [PokemonTypeNames.Fighting]: {
        text: "text-gray-900",
        bg: "bg-deep-orange-100-accent",
    },
    [PokemonTypeNames.Poison]: {
        text: "text-gray-100",
        bg: "bg-purple-400",
    },
    [PokemonTypeNames.Ground]: {
        text: "text-gray-900",
        bg: "bg-brown-300",
    },
    [PokemonTypeNames.Flying]: {
        text: "text-gray-900",
        bg: "bg-cyan-300",
    },
    [PokemonTypeNames.Psychic]: {
        text: "text-gray-900",
        bg: "bg-purple-100",
    },
    [PokemonTypeNames.Bug]: {
        text: "text-gray-900",
        bg: "bg-lime-300",
    },
    [PokemonTypeNames.Rock]: {
        text: "text-gray-100",
        bg: "bg-brown-400",
    },
    [PokemonTypeNames.Ghost]: {
        text: "text-gray-900",
        bg: "bg-blue-grey-200",
    },
    [PokemonTypeNames.Dark]: {
        text: "text-gray-100",
        bg: "bg-grey-600",
    },
    [PokemonTypeNames.Dragon]: {
        text: "text-gray-900",
        bg: "bg-amber-200",
    },
    [PokemonTypeNames.Steel]: {
        text: "text-gray-900",
        bg: "bg-blue-grey-300",
    },
    [PokemonTypeNames.Fairy]: {
        text: "text-gray-900",
        bg: "bg-pink-300",
    },
} as const;
