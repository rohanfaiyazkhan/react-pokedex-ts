import React from "react";
import { PokemonInferredType } from "../../../requests/pokemon/data";
import { StyleableProps } from "../../../utils/styles/StyleableProps";
import PokemonType from "./PokemonType";

type PokemonTypesProps = StyleableProps & {
    types?: PokemonInferredType["types"];
};

const PokemonTypes: React.FC<PokemonTypesProps> = ({
    types,
    className,
    style,
}) => {
    if (types === undefined) {
        return null;
    }

    return (
        <div className={className} style={style}>
            <p className="mb-2 text-sm font-bold font-heading">Type</p>
            <div className="flex items-center space-x-2">
                {types.map(({ type }, idx) => (
                    <PokemonType
                        name={type.name}
                        key={`type-${idx}-${type.name}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PokemonTypes;
