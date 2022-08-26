import React from "react";
import { useParams } from "react-router";
import {
    useIndividualPokemonAPI,
    useIndividualPokemonSpeciesAPI,
} from "./../../utils/requests/useAPI";
import { PokemonUnexpectedIdError } from "./PokemonUnexpectedIdError";
import LoadingSpinner from "./../StatusIndicators/LoadingSpinner";
import { useListResourceCache } from "../../contexts/NetworkCacheLayer/NetworkCacheContext";
import { LoadingStates } from "../../data/LoadingStates";
import IndividualViewSpriteDisplay from "./IndividualViewSpriteDisplay";
import { combineClassnames } from "./../../utils/classnamesUtils";
import {
    getTypeAppropriateClassName,
    TypeAppropriateColorClassNames,
} from "./../SpriteCenterPiece/TypeAppropriateBackgroundColors";

interface IIndividualProps {}

const LoadingView: React.FC<{ pokemonName?: string; pokemonId: number }> = (
    props
) => {
    const { pokemonId, pokemonName } = props;

    return (
        <div className="mt-8 flex flex-col justify-center items-center">
            <p className="flex items-center">
                <LoadingSpinner className="mr-4 w-8 h-8" />{" "}
                {pokemonName
                    ? `Loading Pokemon ${pokemonName}`
                    : `Loading Pokemon No. ${pokemonId}`}
            </p>
        </div>
    );
};

const IndividualView: React.FC<IIndividualProps> = (props) => {
    const { id } = useParams<{ id: string | undefined }>();

    const idNumber = Number(id);

    if (Number.isNaN(idNumber)) {
        throw new PokemonUnexpectedIdError(id);
    }

    const listResource = useListResourceCache();
    const listData = listResource?.data;

    const [pokemonResource] = useIndividualPokemonAPI(idNumber);
    const [speciesResource] = useIndividualPokemonSpeciesAPI(idNumber);

    let pokemonName = pokemonResource?.data?.name;

    if (
        pokemonName === undefined &&
        listData?.count !== undefined &&
        listData.count > 0 &&
        listResource.pagination !== undefined
    ) {
        const limit = listResource.pagination!.limit;
        const offset = listResource.pagination?.offset ?? 0;

        if (offset > idNumber && limit + offset < idNumber) {
            pokemonName = listData.results[idNumber - offset]?.name;
        }
    }

    const isLoading =
        pokemonResource?.loadingState === LoadingStates.Loading ||
        speciesResource?.loadingState === LoadingStates.Loading;

    if (isLoading) {
        return <LoadingView pokemonName={pokemonName} pokemonId={idNumber} />;
    }

    const primaryType = pokemonResource?.data?.types?.[0]?.type?.name;
    const spriteContainerClassNames = combineClassnames(
        "bg-white border-2 border-gray-400 rounded shadow-lg col-span-2 col-start-1 px-4 py-2",
        getTypeAppropriateClassName(primaryType)?.bg
    );

    return (
        <div className="flex flex-col md:grid md:grid-cols-4 mt-8">
            <h1 className="text-lg mb-4">
                {idNumber}.{" "}
                <span className="capitalize font-bold text-2xl">
                    {pokemonName}
                </span>
            </h1>
            <div className={spriteContainerClassNames}>
                <IndividualViewSpriteDisplay
                    pokemonId={idNumber}
                    pokemonName={pokemonName}
                />
            </div>
        </div>
    );
};

export default IndividualView;
