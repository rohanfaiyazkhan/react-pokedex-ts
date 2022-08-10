import { useState, useCallback } from "react";

const FIRST_POKEMON_ID = 1;
const LAST_POKEMON_ID = 898;

/**
 * Tuple containing pokemon ID, and three memoized functions for increasing ID, decreasing ID, and the exposed state setter itself
 * @typedef {[number, () => void, () => void, (value: React.SetStateAction<number>) => void]} UsePokemonIdTuple
 */

/**
 *
 * @returns {UsePokemonIdTuple} Returns tuple containing pokemon ID, and three memoized functions for increasing ID, decreasing ID, and the exposed state setter itself
 */
export default function usePokemonId() {
    const [pokemonId, setPokemonId] = useState(FIRST_POKEMON_ID);

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

    return [pokemonId, incrementId, decrementId];
}
