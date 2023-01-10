import { useInfiniteListQuery } from "../../requests/pokemonList/hook";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

test("useInfiniteListQuery works", async () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: { retry: false },
        },
    });

    const wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );

    const { result } = renderHook(() => useInfiniteListQuery(), { wrapper });

    await waitFor(() => result.current.isFetching);
    await waitFor(() => expect(result.current.isSuccess).toBeTruthy(), {
        timeout: 5000,
    });

    expect(result.current.data?.pages[0]?.results).toHaveLength(24);

    result.current.fetchNextPage();

    await waitFor(() => result.current.isFetchingNextPage);
    await waitFor(() => expect(result.current.isSuccess).toBeTruthy(), {
        timeout: 5000,
    });
});
