import React from "react";
import { PokemonInferredType } from "../../data/InferredTypes";
import { IStyleableProps } from "../../utils/classnamesUtils";

interface IAbilitiesProps extends IStyleableProps {
    abilities?: PokemonInferredType["abilities"];
}

const Abilities: React.FC<IAbilitiesProps> = ({
    className,
    style,
    abilities,
}) => {
    if (abilities === undefined) return null;

    return (
        <div className={className} style={style}>
            <p className="text-sm">Abilities</p>
            {abilities.map((ability, idx) => (
                <p key={`ability-${ability.ability.name}-${idx}`}>
                    {idx + 1}.{" "}
                    <span className="capitalize">{ability.ability.name}</span>
                    {ability.is_hidden && (
                        <span className="ml-2 italic text-sm">(Hidden)</span>
                    )}
                </p>
            ))}
        </div>
    );
};

export default Abilities;
