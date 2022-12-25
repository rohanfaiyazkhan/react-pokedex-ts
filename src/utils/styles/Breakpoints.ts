export const Breakpoints = {
    SM: 512,
    MD: 700,
    LG: 1024,
} as const;

export type BreakpointNames = keyof typeof Breakpoints;
