import React from "react";
import { MoveSet } from "../../../requests/moveset/data";
import { useMoveQuery } from "../../../requests/moveset/hook";
import { GridCell, GridRow } from "./AccessibleTableComponents";

interface IMoveProps {
    id: number;
    move: MoveSet[number];
    rowId: number;
}

const MoveView: React.FC<IMoveProps> = ({ id, move, rowId }) => {
    const moveQueryResult = useMoveQuery(id);

    const lastVersionMoveDetails =
        move.version_group_details[move.version_group_details.length - 1];

    const learnMethod = lastVersionMoveDetails.move_learn_method;
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
            <GridCell colIndex={1}>{move.move.name}</GridCell>
            <GridCell colIndex={2}>{latestFlavorTextEntry}</GridCell>
            <GridCell colIndex={3}>{learnMethod.name}</GridCell>
            <GridCell colIndex={4}>{levelLearnedAt}</GridCell>
            <GridCell colIndex={5}>{data?.power}</GridCell>
            <GridCell colIndex={6}>{data?.accuracy}</GridCell>
            <GridCell colIndex={7}>{data?.pp}</GridCell>
        </GridRow>
    );
};

export default MoveView;
