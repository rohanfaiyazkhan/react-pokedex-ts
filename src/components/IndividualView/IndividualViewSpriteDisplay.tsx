import React from "react";
import {
    combineClassnames,
    IStyleableProps,
} from "../../utils/classnamesUtils";
import { getSpriteUrl } from "../../utils/getSpriteUrl";

interface IIndividualViewSpriteDisplayProps extends IStyleableProps {
    pokemonId: number;
    pokemonName?: string;
}

const IndividualViewSpriteDisplay: React.FC<
    IIndividualViewSpriteDisplayProps
> = ({ pokemonId, className, pokemonName, style }) => {
    const frontSpriteUrl = getSpriteUrl(pokemonId, {
        facing: "front",
        shiny: false,
    });

    const backSpriteUrl = getSpriteUrl(pokemonId, {
        facing: "back",
        shiny: false,
    });

    const baseClassNames = "relative flex flex-col md:flex-row items-center";

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
