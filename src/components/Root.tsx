import React from "react";
import useCachedResource from "../contexts/NetworkCacheLayer/useCachedResource";
import { ValidResourceNames } from "../contexts/NetworkCacheLayer/ValidResourceNames";
import usePokemonId from "../utils/hooks/useNavigationState";
import SpriteCentrePiece from "./SpriteCenterPiece/SpriteCentrePiece";

interface IDataRootProps {}

const Root: React.FC<IDataRootProps> = (props) => {
    const [id, incrementPokemonId, decrementPokemonId, setPokemonId] =
        usePokemonId();

    const pokemonResource = useCachedResource(ValidResourceNames.Pokemon, id);
    const speciesResource = useCachedResource(ValidResourceNames.Species, id);

    return (
        <main className="min-h-screen w-full bg-red-700">
            <SpriteCentrePiece />
        </main>
    );
};

export default Root;
