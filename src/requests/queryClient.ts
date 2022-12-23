import { QueryClient } from "@tanstack/react-query";
import { StalenessTimeoutInMs } from "./NetworkConfig";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            staleTime: StalenessTimeoutInMs.DEFAULT,
            retry: false,
        },
    },
});
