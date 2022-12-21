import React from "react";
import { IStyleableProps } from "../../utils/stylingUtils";
import { getSpriteUrl } from "../../utils/getSpriteUrl";
import { combineClassnames } from "../../utils/stylingUtils";

interface ISpriteCentrePieceProps extends IStyleableProps {
    pokemonId: number;
    pokemonName?: string;
}

const SpriteCentrePiece: React.FC<ISpriteCentrePieceProps> = ({
    pokemonId,
    className,
    style,
    pokemonName,
}) => {
    const spriteUrl = getSpriteUrl(pokemonId, {
        facing: "front",
        shiny: false,
    });

    let rootClassName = combineClassnames(
        className,
        "relative rounded-full bg-red-50 border border-red-400 shadow-inner"
    );

    return (
        <div className={rootClassName} style={style}>
            <img
                className="w-full h-full object-cover"
                style={{
                    minWidth: 80,
                    minHeight: 80,
                }}
                src={spriteUrl.toString()}
                alt={"Sprite of pokemon " + pokemonName}
            />
        </div>
    );
};

export default SpriteCentrePiece;
