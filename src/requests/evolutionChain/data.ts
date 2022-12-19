type NameAndUrl = {
    name: string;
    url: string;
};

export type EvolutionDetails = {
    gender: string | null;
    held_item: NameAndUrl | null;
    item: NameAndUrl | null;
    known_move: NameAndUrl | null;
    known_move_type: NameAndUrl | null;
    location: NameAndUrl | null;
    min_affection: number | null;
    min_beauty: number | null;
    min_happiness: number | null;
    min_level: number | null;
    needs_overworld_rain: boolean;
    party_species: string | null;
    party_type: string | null;
    time_of_day: string;
    trade_species: NameAndUrl | null;
    trigger: {
        name: string;
        url: string;
    };
    turn_upside_down: boolean;
};

export type EvolutionChain = {
    evolution_details: EvolutionDetails[];
    is_baby: boolean;
    species: {
        name: string;
        url: string;
    };
    evolves_to: EvolutionChain[];
};

export type EvolutionChainResponse = {
    baby_trigger_item: unknown;
    chain: EvolutionChain;
    id: number;
};
