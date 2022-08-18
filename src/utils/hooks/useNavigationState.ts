import { useState, useCallback } from "react";

const FIRST_POKEMON_ID = 1;
const LAST_POKEMON_ID = 1146;

type IdAndIncrementorsTuples = [
    number,
    () => void,
    () => void,
    React.Dispatch<React.SetStateAction<number>>
];

function getInitialPokemonId(initial?: number) {
    if (initial === undefined) return FIRST_POKEMON_ID;
    if (initial < FIRST_POKEMON_ID) return FIRST_POKEMON_ID;
    if (initial > LAST_POKEMON_ID) return LAST_POKEMON_ID;
    return initial;
}

export default function useNavigationState(
    initialId?: number
): IdAndIncrementorsTuples {
    const [pokemonId, setPokemonId] = useState(getInitialPokemonId(initialId));

    const incrementId = useCallback(() => {
        setPokemonId((val) =>
            val === LAST_POKEMON_ID ? FIRST_POKEMON_ID : val + 1
        );
    }, []);

    const decrementId = useCallback(() => {
        setPokemonId((val) =>
            val === FIRST_POKEMON_ID ? LAST_POKEMON_ID : val - 1
        );
    }, []);

    return [pokemonId, incrementId, decrementId, setPokemonId];
}
