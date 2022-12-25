import React from "react";
import { MoveSet } from "../../../requests/moveset/data";
import { useMoveQuery } from "../../../requests/moveset/hook";
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";
import { GridCell, GridRow } from "./AccessibleTableComponents";
import { getColumnIterator } from "./columnIterator";

type MoveProps = {
    id: number;
    move: MoveSet[number];
    rowId: number;
    hideLearnLevel?: boolean;
};

function formatName(name: string) {
    return name.split("-").map(capitalizeFirstLetter).join(" ");
}

const MoveGridRow: React.FC<MoveProps> = ({
    id,
    move,
    rowId,
    hideLearnLevel,
}) => {
    const moveQueryResult = useMoveQuery(id);

    const columnIterator = getColumnIterator(1);

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
        <GridRow rowIndex={rowId}>
            {!hideLearnLevel && (
                <GridCell colIndex={columnIterator.next()}>
                    {levelLearnedAt}
                </GridCell>
            )}
            <GridCell colIndex={columnIterator.next()} className="col-span-2">
                {formatName(move.move.name)}
            </GridCell>
            <GridCell
                colIndex={columnIterator.next()}
                className={hideLearnLevel ? "col-span-6" : "col-span-5"}
            >
                {latestFlavorTextEntry}
            </GridCell>

            <GridCell colIndex={columnIterator.next()}>{data?.power}</GridCell>
            <GridCell colIndex={columnIterator.next()}>
                {data?.damage_class.name}
            </GridCell>
            <GridCell colIndex={columnIterator.next()}>
                {data?.accuracy}
            </GridCell>
            <GridCell colIndex={columnIterator.next()}>{data?.pp}</GridCell>
        </GridRow>
    );
};

export default MoveGridRow;
