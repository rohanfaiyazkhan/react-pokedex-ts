import React from "react";
import { StyleableProps } from "../../utils/styles/StyleableProps";
import { combineClassnames } from "../../utils/styles/combineClassnames";
import { getSpriteUrl } from "../../utils/getSpriteUrl";

type IndividualViewSpriteDisplayProps = StyleableProps & {
    pokemonId: number;
    pokemonName?: string;
};

const IndividualViewSpriteDisplay: React.FC<
    IndividualViewSpriteDisplayProps
> = ({ pokemonId, className, pokemonName, style }) => {
    const frontSpriteUrl = getSpriteUrl(pokemonId, {
        facing: "front",
        shiny: false,
    });

    const backSpriteUrl = getSpriteUrl(pokemonId, {
        facing: "back",
        shiny: false,
    });

    const baseClassNames = "relative flex flex-row items-center";

    const rootClassNames = combineClassnames(baseClassNames, className);

    return (
        <div className={rootClassNames} style={style}>
            <img
                className="object-cover h-full w-1/2"
                src={frontSpriteUrl.toString()}
                alt={
                    "Front sprite of pokemon " +
                    (pokemonName ?? `No. ${pokemonId.toString()}`)
                }
            />

            <img
                className="object-cover h-full w-1/2"
                src={backSpriteUrl.toString()}
                alt={
                    "Back sprite of pokemon " +
                    (pokemonName ?? `No. ${pokemonId.toString()}`)
                }
            />
        </div>
    );
};

export default IndividualViewSpriteDisplay;
