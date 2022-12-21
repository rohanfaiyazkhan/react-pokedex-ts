import React from "react";
import { useParams } from "react-router";
import { PokemonUnexpectedIdError } from "../../data/missingPokemonDataErrors/PokemonUnexpectedIdError";
import LoadingSpinner from "./../StatusIndicators/LoadingSpinner";
import IndividualViewSpriteDisplay from "./IndividualViewSpriteDisplay";
import { combineClassnames } from "../../utils/stylingUtils";
import PokemonTypes from "./PokemonTypes";
import Abilities from "./Abilities";
import StatsView from "../Stats/StatsView";
import FlavorTexts from "./FlavorTexts";
import EvolutionChainsView from "./EvolutionView/EvolutionChainsView";
import Movesets from "./Moveset/Movesets";
import { padToThreeDigits } from "../../utils/genericUtils";
import { useIndividualPokemonQuery } from "./../../requests/pokemon/hook";
import { useIndividualPokemonSpeciesQuery } from "./../../requests/pokemonSpecies/hook";
import { getPokemonTypeColorClassNames } from "./../../colors/getPokemonTypeColorClassNames";

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
    const { id: idAsString } = useParams<{ id: string | undefined }>();

    const id = Number(idAsString);

    if (Number.isNaN(id)) {
        throw new PokemonUnexpectedIdError(id);
    }

    const pokemonQueryResult = useIndividualPokemonQuery(id);
    const speciesQueryResult = useIndividualPokemonSpeciesQuery(id);

    const isLoading =
        pokemonQueryResult.isLoading || speciesQueryResult.isLoading;

    if (isLoading) {
        return <LoadingView pokemonId={id} />;
    }

    const pokemonData = pokemonQueryResult.data;
    const speciesData = speciesQueryResult.data;

    const pokemonName = pokemonData?.name;

    const primaryType = pokemonData?.types?.[0]?.type?.name;
    let spriteContainerClassNames = combineClassnames(
        "border-2 border-gray-400 rounded shadow-inner col-span-2 row-span-3 col-start-1",
        getPokemonTypeColorClassNames(primaryType)?.bg
    );

    return (
        <div className="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-4 mt-8">
            <h1 className="text-lg mb-4 col-span-4">
                {padToThreeDigits(id)}.{" "}
                <span className="capitalize font-bold text-2xl">
                    {pokemonName}
                </span>
            </h1>
            <div className={spriteContainerClassNames}>
                <IndividualViewSpriteDisplay
                    pokemonId={id}
                    pokemonName={pokemonName}
                />
            </div>
            <PokemonTypes
                className="col-span-1 col-start-3"
                types={pokemonData?.types}
            />
            <Abilities
                className="col-span-1 col-start-4"
                abilities={pokemonData?.abilities}
            />
            <StatsView
                className="col-span-2 col-start-3 mt-4"
                stats={pokemonData?.stats}
            />
            {speciesData?.evolution_chain.url && (
                <EvolutionChainsView
                    className="col-span-4 col-start-1"
                    containerClassName={
                        getPokemonTypeColorClassNames(primaryType)?.bg
                    }
                    evolutionChainUrl={speciesData?.evolution_chain.url}
                />
            )}
            {pokemonData?.moves && <Movesets moves={pokemonData?.moves} />}
            <FlavorTexts
                className="col-span-4 col-start-1"
                flavorTexts={speciesData?.flavor_text_entries}
            />
        </div>
    );
};

export default IndividualView;
