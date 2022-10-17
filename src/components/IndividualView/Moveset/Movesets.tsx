import React from "react";
import { MoveLearnTypes } from "./MoveLearnTypes";

interface IMove {
    move: {
        name: string;
        url: string;
    };
    version_group_details: Array<{
        level_learned_at: number;
        move_learn_method: {
            name: string;
            url: string;
        };
        version_group: {
            name: string;
            url: string;
        };
    }>;
}

interface IMovesetProps {
    moves: IMove[];
}

function splitMovesByLearnType(moves: IMove[]) {
    const splitMoves: Record<MoveLearnTypes, IMove[]> = {
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
                moveLearnType as MoveLearnTypes
            )
        ) {
            console.warn(
                `Unexpected moveLearnType ${moveLearnType}, expected one of ${Object.values(
                    MoveLearnTypes
                ).join(", ")}`
            );
            continue;
        }

        splitMoves[moveLearnType as MoveLearnTypes].push(move);
    }

    return splitMoves;
}

const Movesets: React.FC<{ moves: IMove[]; title: string }> = ({
    title,
    moves,
}) => {
    return (
        <div>
            <p>{title}</p>
            <ul>
                {moves.map((move) => {
                    const lastVersionMoveDetails =
                        move.version_group_details[
                            move.version_group_details.length - 1
                        ];

                    return (
                        <li key={move.move.name}>
                            {move.move.name} -{" "}
                            {lastVersionMoveDetails.level_learned_at}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const MovesetsWrapper: React.FC<IMovesetProps> = ({ moves }) => {
    const splitMoves = splitMovesByLearnType(moves);
    return (
        <div>
            <p>Movesets</p>
            <Movesets
                title={"Learn by Level Up"}
                moves={[
                    ...splitMoves[MoveLearnTypes.Egg],
                    ...splitMoves[MoveLearnTypes.LevelUp],
                ]}
            />
            <Movesets
                title={"Learn by TM/HM"}
                moves={[
                    ...splitMoves[MoveLearnTypes.Egg],
                    ...splitMoves[MoveLearnTypes.LevelUp],
                ]}
            />
        </div>
    );
};

export default MovesetsWrapper;
