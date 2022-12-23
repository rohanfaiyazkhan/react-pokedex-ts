import { MoveSet } from "../../../requests/moveset/data";
import { MoveLearnTypes } from "./MoveLearnTypes";

type MoveLearnTypeValues = typeof MoveLearnTypes[keyof typeof MoveLearnTypes];

export function splitMovesByLearnType(moves: MoveSet) {
    const splitMoves: Record<MoveLearnTypeValues, MoveSet> = {
        [MoveLearnTypes.Egg]: [],
        [MoveLearnTypes.Machine]: [],
        [MoveLearnTypes.Tutor]: [],
        [MoveLearnTypes.LevelUp]: [],
    };

    for (const move of moves) {
        const lastVersionsMoveLearnDetail =
            move.version_group_details[move.version_group_details.length - 1];
        const moveLearnType =
            lastVersionsMoveLearnDetail.move_learn_method.name;

        if (
            !Object.values(MoveLearnTypes).includes(
                moveLearnType as MoveLearnTypeValues
            )
        ) {
            console.warn(
                `Unexpected moveLearnType ${moveLearnType}, expected one of ${Object.values(
                    MoveLearnTypes
                ).join(", ")}`
            );
            continue;
        }

        splitMoves[moveLearnType as MoveLearnTypeValues].push(move);
    }

    return splitMoves;
}
