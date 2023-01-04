import { QueryClient } from "@tanstack/react-query";

const CACHE_TIMEOUT_MS = 300_000;
const STALE_TIMEOUT_MS = 240_000;

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            staleTime: CACHE_TIMEOUT_MS,
            cacheTime: STALE_TIMEOUT_MS,
            retry: false,
        },
    },
});
