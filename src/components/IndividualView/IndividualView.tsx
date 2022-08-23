import React, { Fragment } from "react";
import { useParams } from "react-router";
import {
    useIndividualPokemonAPI,
    useIndividualPokemonSpeciesAPI,
} from "./../../utils/requests/useAPI";
import { PokemonUnexpectedIdError } from "./PokemonUnexpectedIdError";

interface IIndividualProps {}

const Individual: React.FC<IIndividualProps> = (props) => {
    const { id } = useParams<{ id: string | undefined }>();

    const idNumber = Number(id);

    if (Number.isNaN(idNumber)) {
        throw new PokemonUnexpectedIdError(id);
    }

    const [pokemonResource] = useIndividualPokemonAPI(id);
    const [speciesResource] = useIndividualPokemonSpeciesAPI(id);

    return (
        <Fragment>
            <h1 className="text-center text-2xl font-bold">PokeDex App!</h1>
            <p className="text-lg text-center mb-4">
                View every single Pokemon!
            </p>
        </Fragment>
    );
};

export default Individual;
