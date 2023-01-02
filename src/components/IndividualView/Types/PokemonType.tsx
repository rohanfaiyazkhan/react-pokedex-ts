import React from "react";
import { getPokemonTypeColorClassNames } from "../../../colors/getPokemonTypeColorClassNames";
import { combineClassnames } from "../../../utils/styles/combineClassnames";

type PokemonTypeProps = {
    name: string;
};

const PokemonType: React.FC<PokemonTypeProps> = ({ name }) => {
    const typeStyles = getPokemonTypeColorClassNames(name);
    return (
        <p
            className={combineClassnames(
                typeStyles?.bg,
                typeStyles?.text,
                "px-2 py-1 font-bold mr-2 mb-1 uppercase border border-current rounded-sm"
            )}
        >
            {name}
        </p>
    );
};

export default PokemonType;
