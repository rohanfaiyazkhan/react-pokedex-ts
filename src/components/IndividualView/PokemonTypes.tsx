import React from "react";
import { PokemonInferredType } from "../../data/InferredTypes";
import { PokemonTypeNames } from "../../data/PokemonTypes/PokemonType";
import { IStyleableProps } from "../../utils/stylingUtils";
import { combineClassnames } from "../../utils/stylingUtils";
import {
    getTypeAppropriateClassName,
    TypeAppropriateColorClassNames,
} from "../../colors/PokemonTypeColorClassNames";

interface IPokemonTypesProps extends IStyleableProps {
    types?: PokemonInferredType["types"];
}

const PokemonTypes: React.FC<IPokemonTypesProps> = ({
    types,
    className,
    style,
}) => {
    if (types === undefined) {
        return null;
    }

    return (
        <div className={className} style={style}>
            <p className="mb-2 text-sm">Type</p>
            <p>
                {types.map(({ type }, idx) => {
                    const typeStyles = getTypeAppropriateClassName(type.name);

                    return (
                        <span
                            key={`type-${idx}-${type.name}`}
                            className={combineClassnames(
                                "px-2 py-1 font-bold mr-2 uppercase border border-gray-500 rounded-sm",
                                typeStyles?.bg,
                                typeStyles?.text
                            )}
                        >
                            {type.name}
                        </span>
                    );
                })}
            </p>
        </div>
    );
};

export default PokemonTypes;
