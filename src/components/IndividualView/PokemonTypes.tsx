import React from "react";
import { PokemonInferredType } from "../../requests/pokemon/data";
import { StyleableProps } from "../../utils/stylingUtils";
import { combineClassnames } from "../../utils/stylingUtils";
import { getPokemonTypeColorClassNames } from "./../../colors/getPokemonTypeColorClassNames";

interface IPokemonTypesProps extends StyleableProps {
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
            <p className="mb-2 text-sm font-bold font-heading">Type</p>
            <div className="flex items-center space-x-2">
                {types.map(({ type }, idx) => {
                    const typeStyles = getPokemonTypeColorClassNames(type.name);

                    return (
                        <p
                            key={`type-${idx}-${type.name}`}
                            className={combineClassnames(
                                typeStyles?.bg,
                                typeStyles?.text,
                                "px-2 py-1 font-bold mr-2 uppercase border border-current rounded-sm"
                            )}
                        >
                            {type.name}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default PokemonTypes;
