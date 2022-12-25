import React from "react";
import { MoveSet } from "../../../requests/moveset/data";
import { useMoveQuery } from "../../../requests/moveset/hook";
import { capitalizeFirstLetter } from "./../../../utils/capitalizeFirstLetter";

type MoveProps = {
    id: number;
    move: MoveSet[number];
    rowId: number;
    hideLearnLevel?: boolean;
};

function formatName(name: string) {
    return name.split("-").map(capitalizeFirstLetter).join(" ");
}

const MoveSetMobileCards: React.FC<MoveProps> = ({
    id,
    move,
    rowId,
    hideLearnLevel,
}) => {
    const moveQueryResult = useMoveQuery(id);

    const lastVersionMoveDetails =
        move.version_group_details[move.version_group_details.length - 1];

    const levelLearnedAt = lastVersionMoveDetails.level_learned_at;

    const data = moveQueryResult.data;

    let latestFlavorTextEntry = "";

    if (data?.flavor_text_entries) {
        const englishEntries = data.flavor_text_entries.filter(
            (entry) => entry.language.name === "en"
        );
        latestFlavorTextEntry =
            englishEntries[englishEntries.length - 1].flavor_text;
    }

    return (
        <div className="bg-orange-50 grid grid-col-2 px-2 py-2 border-b border-orange-300">
            <div>
                <p className="text-lg font-heading capitalize bold">
                    {formatName(move.move.name)}
                </p>
                {!hideLearnLevel && (
                    <p className="text-sm">
                        Learned at Level: {levelLearnedAt}
                    </p>
                )}
                <p className="italic capitalize text-sm">
                    {data?.damage_class.name}
                </p>
            </div>
            <div className="justify-self-end text-sm">
                {data?.power && (
                    <p className="text-right">Power: {data.power}</p>
                )}
                {data?.accuracy && (
                    <p className="text-right">Accuracy: {data?.accuracy}</p>
                )}
                <p className="text-right">PP: {data?.pp}</p>
            </div>
            <div className="col-span-2 text-sm">
                <p>{latestFlavorTextEntry}</p>
            </div>
        </div>
    );
};

export default MoveSetMobileCards;
