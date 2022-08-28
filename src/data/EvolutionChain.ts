export interface IEvolutionDetails {
    gender: string | null;
    held_item: string | null;
    item: string | null;
    known_move: string | null;
    known_move_type: string | null;
    location: string | null;
    min_affection: number | null;
    min_beauty: number | null;
    min_happiness: number | null;
    min_level: number;
    needs_overworld_rain: boolean;
    party_species: string | null;
    party_type: string | null;
    time_of_day: "";
    trade_species: null;
    trigger: {
        name: string;
        url: string;
    };
    turn_upside_down: boolean;
}

export interface IEvolutionChain {
    evolution_details: IEvolutionDetails[];
    is_baby: boolean;
    species: {
        name: string;
        url: string;
    };
    evolves_to: IEvolutionChain[];
}

export interface IEvolutionChainResponse {
    baby_trigger_item: unknown;
    chain: IEvolutionChain;
    id: number;
}
