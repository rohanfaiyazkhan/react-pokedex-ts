import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../router/Routes";

beforeEach(() => {
    window.scrollTo = jest.fn();
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
});

afterEach(() => {
    (window.scrollTo as jest.Mock).mockClear();
    (window.IntersectionObserver as jest.Mock).mockClear();
});

test("Home page renders correctly", async () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                cacheTime: Number.MAX_SAFE_INTEGER,
                retry: false,
            },
        },
    });

    render(
        <MemoryRouter>
            <QueryClientProvider client={queryClient}>
                <AppRouter />
            </QueryClientProvider>
        </MemoryRouter>
    );

    const bulbasaur = await screen.findByText(/bulbasaur/i, undefined, {
        timeout: 4000,
    });

    expect(bulbasaur).toBeInTheDocument();
});

test("invalid route renders no page found error message", () => {
    const badRoute = "/this/path/does/not/exist";

    render(
        <MemoryRouter initialEntries={[badRoute]}>
            <AppRouter />
        </MemoryRouter>
    );

    expect(screen.getByText(/no page found/i)).toBeInTheDocument();
});
