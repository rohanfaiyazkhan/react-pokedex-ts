import { mockMove } from "./../../mocks/data/move.mock";

export type MoveSet = Array<{
    move: {
        name: string;
        url: string;
    };
    version_group_details: Array<{
        level_learned_at: number;
        move_learn_method: {
            name: string;
            url: string;
        };
        version_group: {
            name: string;
            url: string;
        };
    }>;
}>;

export type Move = typeof mockMove;
