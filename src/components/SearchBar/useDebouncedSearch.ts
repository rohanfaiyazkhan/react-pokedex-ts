import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { useDebounce } from "../../utils/hooks/useDebounce";
import {
    pokemonSearchList,
    PokemonSearchResult,
} from "../../data/pokemonSearchList";
import { useEffect } from "react";
import { useState } from "react";

const MAX_NUMBER_OF_RESULTS = 10;

function searchCallback(
    input: string,
    minLength: number
): PokemonSearchResult[] {
    if (input.length < minLength) {
        return [];
    }

    const result: PokemonSearchResult[] = [];

    for (const data of pokemonSearchList) {
        const substr = input.trim().toLowerCase().replace(" ", "-");
        const matchPosition = data.name.indexOf(substr);

        if (matchPosition === -1) {
            continue;
        }

        result.push({
            id: data.id,
            name: data.name.split("-").map(capitalizeFirstLetter).join(" "),
            match: {
                start: matchPosition,
                end: matchPosition + substr.length,
            },
        });

        if (result.length === MAX_NUMBER_OF_RESULTS) {
            break;
        }
    }

    return result;
}

export function useDebouncedSearch(input: string, minLength: number) {
    const { debouncedValue, isDebouncing } = useDebounce(input, 500);
    const [results, setResults] = useState<PokemonSearchResult[]>([]);

    useEffect(() => {
        setResults(searchCallback(debouncedValue, minLength));
    }, [debouncedValue, minLength]);

    return {
        results,
        isDebouncing,
    };
}
