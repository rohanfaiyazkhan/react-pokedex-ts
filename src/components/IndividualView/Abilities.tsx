import React from "react";
import { PokemonInferredType } from "../../requests/pokemon/data";
import { StyleableProps } from "../../utils/styles/StyleableProps";

type AbilitiesProps = StyleableProps & {
    abilities?: PokemonInferredType["abilities"];
};

function capitalizeFirstLetter(word: string) {
    const firstLetter = word.charAt(0);
    const restOfWord = word.slice(1);

    return firstLetter.toUpperCase() + restOfWord;
}

const Abilities: React.FC<AbilitiesProps> = ({
    className,
    style,
    abilities,
}) => {
    if (abilities === undefined) return null;

    return (
        <div className={className} style={style}>
            <p className="font-bold mb-1 font-heading">Abilities</p>
            <ol>
                {abilities.map((ability, idx) => (
                    <li key={`ability-${ability.ability.name}-${idx}`}>
                        <span className="text-xs mr-2">{idx + 1}.</span>
                        <span className="capitalize">
                            {ability.ability.name
                                .split("-")
                                .map(capitalizeFirstLetter)
                                .join(" ")}
                        </span>
                        {ability.is_hidden && (
                            <span className="ml-1 italic text-sm">
                                (Hidden)
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Abilities;
