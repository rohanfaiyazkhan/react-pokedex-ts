import React from "react";
import { PokemonInferredType } from "../../requests/pokemon/data";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { StyleableProps } from "../../utils/styles/StyleableProps";

type AbilitiesProps = StyleableProps & {
    abilities?: PokemonInferredType["abilities"];
};

const Abilities: React.FC<AbilitiesProps> = ({
    className,
    style,
    abilities,
}) => {
    if (abilities === undefined) return null;

    return (
        <div className={className} style={style}>
            <h3 className="font-bold mb-1 font-heading">Abilities</h3>
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
