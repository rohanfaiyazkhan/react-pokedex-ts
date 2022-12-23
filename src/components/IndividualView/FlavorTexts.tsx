import React from "react";
import { StyleableProps } from "../../utils/styles/StyleableProps";

type FlavorText = {
    flavor_text: string;
    language: {
        name: string;
        url: string;
    };
    version: {
        name: string;
        url: string;
    };
};

type FlavorTextDisplayInfo = {
    flavor_text: string;
    versions: string[];
};

type FlavorTextsProps = StyleableProps & {
    flavorTexts?: FlavorText[];
};

function getGroupedFlavorTexts(flavorTexts: FlavorText[]) {
    let result: FlavorTextDisplayInfo[] = [];
    let i = 0;

    while (i < flavorTexts.length) {
        const currentFlavorTextDisplay: Partial<FlavorTextDisplayInfo> = {};

        currentFlavorTextDisplay.flavor_text = flavorTexts[i].flavor_text;
        currentFlavorTextDisplay.versions = [flavorTexts[i].version.name];

        while (
            i + 1 < flavorTexts.length &&
            flavorTexts[i + 1].flavor_text ===
                currentFlavorTextDisplay.flavor_text
        ) {
            i += 1;
            currentFlavorTextDisplay.versions.push(flavorTexts[i].version.name);
        }

        result.push(currentFlavorTextDisplay as FlavorTextDisplayInfo);
        i += 1;
    }

    return result;
}

const FlavorTexts: React.FC<FlavorTextsProps> = ({
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

    const groupedFlavorTexts = getGroupedFlavorTexts(englishFlavorTexts);

    return (
        <div className={className} style={style}>
            <p className="my-4 text-lg">Pokedex Entries</p>
            <ul className="text-sm bg-red-100 rounded-md flex flex-col">
                <li className="px-4 py-4 flex border-b bg-red-900 text-red-100 font-bold rounded-t-md">
                    <p className="font-bold w-1/4 max-w-xs mr-4">Version</p>
                    <p className="font-bol">Text</p>
                </li>
                {groupedFlavorTexts.map((entry, idx) => {
                    return (
                        <li
                            className="px-4 py-4 flex border-b border-red-200 last:border-b-0 last:rounded-md-b"
                            key={`flavor-text-entry-${entry.versions.join(
                                "-"
                            )}-${idx}`}
                        >
                            <p className="capitalize mr-4 flex-shrink-0 w-1/4 max-w-xs">
                                {entry.versions.join(", ")}
                            </p>
                            <p className="capitalize">{entry.flavor_text}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default FlavorTexts;
