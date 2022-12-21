import React from "react";
import { PokemonInferredType } from "../../requests/pokemon/data";
import { IStyleableProps } from "../../utils/stylingUtils";

interface IMoveListProps extends IStyleableProps {
    moves?: PokemonInferredType["moves"];
}

const MoveList: React.FC<IMoveListProps> = ({ moves, style, className }) => {
    return <div></div>;
};

export default MoveList;
