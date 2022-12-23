import React from "react";
import { MoveSet } from "../../../requests/moveset/data";
import { IStyleableProps } from "../../../utils/stylingUtils";
import { MoveLearnTypes } from "./MoveLearnTypes";
import { splitMovesByLearnType } from "./splitMovesByLearnType";
import { extractIdFromUrl } from "./../../../requests/extractIdFromUrl";
import MoveView from "./MoveView";
import { Grid, GridRow, GridColumnHeader } from "./AccessibleTableComponents";

interface IMovesetProps extends IStyleableProps {
    moves: MoveSet;
}

const Movesets: React.FC<{ moves: MoveSet; title: string }> = ({
    title,
    moves,
}) => {
    let rowCounter = 1;

    return (
        <>
            <h4 className="font-heading mb-1">{title}</h4>
            <Grid>
                <GridRow rowIndex={1}>
                    <GridColumnHeader colIndex={1}>Name</GridColumnHeader>
                    <GridColumnHeader colIndex={2}>
                        Description
                    </GridColumnHeader>
                    <GridColumnHeader colIndex={3}>Learn Type</GridColumnHeader>
                    <GridColumnHeader colIndex={4}>
                        Level Learned
                    </GridColumnHeader>
                    <GridColumnHeader colIndex={5}>Power</GridColumnHeader>
                    <GridColumnHeader colIndex={6}>Accuracy</GridColumnHeader>
                    <GridColumnHeader colIndex={7}>PP</GridColumnHeader>
                </GridRow>

                {moves.map((move) => {
                    const id = extractIdFromUrl(move.move.url);

                    if (id === undefined) {
                        return null;
                    }

                    rowCounter += 1;

                    return <MoveView id={id} move={move} rowId={rowCounter} />;
                })}
            </Grid>
        </>
    );
};

const MovesetsWrapper: React.FC<IMovesetProps> = ({ moves }) => {
    const splitMoves = splitMovesByLearnType(moves);
    return (
        <div>
            <h3 className="font-bold font-heading text-xl mb-1">Movesets</h3>
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
            />
        </div>
    );
};

export default MovesetsWrapper;
