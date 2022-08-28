import React from "react";
import { PokemonSpeciesInferredType } from "../../data/InferredTypes";
import { IStyleableProps } from "../../utils/classnamesUtils";
import { combineClassnames } from "./../../utils/classnamesUtils";
import { Fragment } from "react";

interface IFlavorTextsProps extends IStyleableProps {
    flavorTexts?: PokemonSpeciesInferredType["flavor_text_entries"];
}

const FlavorTexts: React.FC<IFlavorTextsProps> = ({
    flavorTexts,
    className,
    style,
}) => {
    if (flavorTexts === undefined) {
        return null;
    }

    const englishFlavorTexts = flavorTexts.filter(
        (entry) => entry.language.name === "en"
    );

    return (
        <div className={className} style={style}>
            <p className="mt-4 text-lg">Flavor Texts</p>
            <div className="grid grid-cols-8 text-sm">
                <p className="font-bold">Version</p>
                <p className="font-bold col-span-7">Text</p>
                {englishFlavorTexts.map((entry, idx) => {
                    return (
                        <Fragment
                            key={`flavor-text-entry-${entry.version.name}-${idx}`}
                        >
                            <p className="capitalize">{entry.version.name}</p>
                            <p className="capitalize col-span-7">
                                {entry.flavor_text}
                            </p>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default FlavorTexts;
