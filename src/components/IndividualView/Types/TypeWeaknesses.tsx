import React from "react";
import { PokemonInferredType } from "../../../requests/pokemon/data";
import { usePokemonTypeQueries } from "../../../requests/type/hook";
import { extractIdFromUrl } from "../../../requests/extractIdFromUrl";
import { PokemonTypeInferredType } from "../../../requests/type/data";
import PokemonType from "./PokemonType";
import { StyleableProps } from "../../../utils/styles/StyleableProps";

type Types = PokemonInferredType["types"];

type TypeWeaknessesProps = StyleableProps & {
    types: Types;
};

function getIdsFromTypes(types: Types) {
    const result = [];

    for (const type of types) {
        const id = extractIdFromUrl(type.type.url);

        if (id !== undefined) result.push(id);
    }

    return result;
}

function getTypeDamageRelations(results: PokemonTypeInferredType[]) {
    const numberOfTypes = results.length;

    if (numberOfTypes === 0) return undefined;

    const weaknesses: Record<string, number> = {};

    for (const type of results) {
        const doubleDamageFrom = type.damage_relations.double_damage_from;

        for (const relatedType of doubleDamageFrom) {
            weaknesses[relatedType.name] =
                weaknesses[relatedType.name] !== undefined
                    ? weaknesses[relatedType.name] * 2
                    : 2;
        }

        const halfDamageFrom = type.damage_relations.half_damage_from;

        for (const relatedType of halfDamageFrom) {
            weaknesses[relatedType.name] =
                weaknesses[relatedType.name] !== undefined
                    ? weaknesses[relatedType.name] * 0.5
                    : 0.5;
        }

        const noDamageFrom = type.damage_relations.no_damage_from;

        for (const relatedType of noDamageFrom) {
            weaknesses[relatedType.name] = 0;
        }
    }

    const weaknessesOrganized: Record<number, string[]> = {};

    for (const [name, multiplier] of Object.entries(weaknesses)) {
        if (weaknessesOrganized[multiplier]) {
            weaknessesOrganized[multiplier].push(name);
        } else {
            weaknessesOrganized[multiplier] = [name];
        }
    }

    function compareMultiplier(
        prev: [string, string[]],
        next: [string, string[]]
    ) {
        return Number(prev[0]) - Number(next[0]);
    }

    return Object.entries(weaknessesOrganized).sort(compareMultiplier);
}

function isNotEmpty<T = any>(input: T) {
    return input !== undefined;
}

const TypeWeaknesses: React.FC<TypeWeaknessesProps> = ({
    types,
    className,
    style,
}) => {
    const ids = getIdsFromTypes(types);
    const queryResults = usePokemonTypeQueries(ids);
    const typeQueriesData = queryResults
        .map((result) => result.data)
        .filter(isNotEmpty) as PokemonTypeInferredType[];

    const damageRelations = getTypeDamageRelations(typeQueriesData);

    if (damageRelations === undefined) return null;

    return (
        <div className={className} style={style}>
            <h3 className="font-bold font-heading text-lg mt-4 mb-2">
                Weak To
            </h3>
            <div role="grid" className="border border-orange-400 max-w-full">
                {damageRelations.map(([multiplier, types], idx) => (
                    <div
                        role="row"
                        aria-rowindex={idx + 1}
                        className="grid rounded border-b border-orange-300 last:border-none"
                        style={{ gridTemplateColumns: "15% auto" }}
                    >
                        <div
                            className="py-2 px-2 text-right bg-orange-100 border-r border-orange-400"
                            role="gridcell"
                            aria-colindex={1}
                        >
                            &times;{multiplier}
                        </div>
                        <div
                            className="flex flex-wrap py-2 px-2 bg-orange-50"
                            role="gridcell"
                            aria-colindex={2}
                        >
                            {types.map((type) => (
                                <PokemonType key={`type-${type}`} name={type} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TypeWeaknesses;
