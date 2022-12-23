import { MoveSet } from "../../../requests/moveset/data";

function getLastVersionLearnLevel(move: MoveSet[number]) {
    const lastVersionMoveDetails =
        move.version_group_details[move.version_group_details.length - 1];

    return lastVersionMoveDetails.level_learned_at;
}

export function sortMovesByLearnLevel(moves: MoveSet) {
    return moves.sort(
        (prev, next) =>
            getLastVersionLearnLevel(prev) - getLastVersionLearnLevel(next)
    );
}
