import React from "react";
import { MoveSet } from "../../../requests/moveset/data";
import { StyleableProps } from "../../../utils/styles/StyleableProps";
import { MoveLearnTypes } from "./MoveLearnTypes";
import { splitMovesByLearnType } from "./splitMovesByLearnType";
import { extractIdFromUrl } from "./../../../requests/extractIdFromUrl";
import MoveGridRow from "./MoveGridRow";
import { Grid } from "./AccessibleTableComponents";
import GridHeaderRow from "./GridHeaderRow";
import { sortMovesByLearnLevel } from "./sortMovesByLearnLevel";
import { useIsMobile } from "../../../utils/styles/useIsMobile";
import MoveSetMobileCards from "./MoveSetMobileCards";

type MovesetProps = StyleableProps & {
    moves: MoveSet;
};

const Movesets: React.FC<{
    moves: MoveSet;
    title: string;
    hideLearnLevel?: boolean;
}> = ({ title, moves, hideLearnLevel }) => {
    const isMobile = useIsMobile("MD");

    let rowCounter = 1;

    return (
        <>
            <h4 className="font-heading text-lg mb-1">{title}</h4>
            {isMobile && (
                <div className="flex flex-col rounded-lg mb-6">
                    {moves.map((move) => {
                        const id = extractIdFromUrl(move.move.url);

                        if (id === undefined) {
                            return null;
                        }

                        rowCounter += 1;

                        return (
                            <MoveSetMobileCards
                                key={move.move.name}
                                id={id}
                                move={move}
                                rowId={rowCounter}
                                hideLearnLevel={hideLearnLevel}
                            />
                        );
                    })}
                </div>
            )}
            {!isMobile && (
                <Grid className="overflow-x-auto mb-4">
                    <GridHeaderRow hideLearnLevel={hideLearnLevel} />

                    {moves.map((move) => {
                        const id = extractIdFromUrl(move.move.url);

                        if (id === undefined) {
                            return null;
                        }

                        rowCounter += 1;

                        return (
                            <MoveGridRow
                                key={move.move.name}
                                id={id}
                                move={move}
                                rowId={rowCounter}
                                hideLearnLevel={hideLearnLevel}
                            />
                        );
                    })}
                </Grid>
            )}
        </>
    );
};

const MovesetsWrapper: React.FC<MovesetProps> = ({ moves }) => {
    const sortedMoves = sortMovesByLearnLevel(moves);
    const splitMoves = splitMovesByLearnType(sortedMoves);

    return (
        <div className="col-span-4">
            <h3 className="font-bold font-heading text-xl mb-1 mt-4">
                Movesets
            </h3>
            <Movesets
                title={"Learn by Level Up"}
                moves={[
                    ...splitMoves[MoveLearnTypes.Egg],
                    ...splitMoves[MoveLearnTypes.LevelUp],
                ]}
            />
            <Movesets
                title={"Learn by TM/HM"}
                moves={[...splitMoves[MoveLearnTypes.Machine]]}
                hideLearnLevel
            />
        </div>
    );
};

export default MovesetsWrapper;
