import React from "react";
import { useParams } from "react-router";
import { PokemonUnexpectedIdError } from "../../data/missingPokemonDataErrors/PokemonUnexpectedIdError";
import LoadingSpinner from "./../StatusIndicators/LoadingSpinner";
import IndividualViewSpriteDisplay from "./IndividualViewSpriteDisplay";
import { combineClassnames } from "../../utils/styles/combineClassnames";
import PokemonTypes from "./Types/PokemonTypes";
import Abilities from "./Abilities";
import StatsView from "../Stats/StatsView";
import FlavorTexts from "./FlavorTexts";
import EvolutionChainsView from "./EvolutionView/EvolutionChainsView";
import Movesets from "./Moveset/Movesets";
import { padToThreeDigits } from "../../utils/padToThreeDigits";
import { useIndividualPokemonQuery } from "./../../requests/pokemon/hook";
import { useIndividualPokemonSpeciesQuery } from "./../../requests/pokemonSpecies/hook";
import { getPokemonTypeColorClassNames } from "./../../colors/getPokemonTypeColorClassNames";
import { extractIdFromUrl } from "../../requests/extractIdFromUrl";
import FloatingNextAndPreviousButtons from "./FloatingNextAndPreviousButtons";
import { useIsMobile } from "./../../utils/styles/useIsMobile";
import HeaderWithPrevNextButtons from "./HeaderWithPrevNextButtons";
import TypeWeaknesses from "./Types/TypeWeaknesses";

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

const IndividualView: React.FC = (props) => {
    const isMobile = useIsMobile("SM");

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
    let spriteContainerClassNames = "col-span-2 row-span-3 col-start-1";

    const evolutionChainId = speciesData?.evolution_chain
        ? extractIdFromUrl(speciesData.evolution_chain.url)
        : undefined;

    return (
        <div className="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-4 mt-8">
            {!isMobile && <FloatingNextAndPreviousButtons currentIndex={id} />}
            {isMobile ? (
                <HeaderWithPrevNextButtons
                    currentIndex={id}
                    name={pokemonName}
                />
            ) : (
                <h1 className="text-lg mb-4 col-span-4 font-heading">
                    {padToThreeDigits(id)}.{" "}
                    <span className="capitalize font-bold text-2xl">
                        {pokemonName}
                    </span>
                </h1>
            )}
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
            {pokemonData?.types && (
                <TypeWeaknesses
                    className="col-span-4 col-start-1 justify-start"
                    style={{ width: "min(728px, 100%)" }}
                    types={pokemonData?.types}
                />
            )}

            {evolutionChainId !== undefined && (
                <EvolutionChainsView
                    className="col-span-4 col-start-1"
                    containerClassName={combineClassnames(
                        getPokemonTypeColorClassNames(primaryType)?.bg,
                        getPokemonTypeColorClassNames(primaryType)?.text
                    )}
                    evolutionChainId={evolutionChainId}
                />
            )}
            <FlavorTexts
                className="col-span-4 col-start-1"
                flavorTexts={speciesData?.flavor_text_entries}
            />
            {pokemonData?.moves && <Movesets moves={pokemonData?.moves} />}
        </div>
    );
};

export default IndividualView;
