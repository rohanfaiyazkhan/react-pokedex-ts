import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Refactoring the way context works in our app for now
// import ContextWrappers from "./contexts/ContextWrappers";

const queryClient = new QueryClient();

const Main: React.FC<React.PropsWithChildren> = (props) => {
    return (
        <main className="w-full h-full mx-auto min-h-screen xl:max-w-screen-xl 2xl:max-w-screen-2xl">
            {props.children}
        </main>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Main>
                    <AppRouter />
                </Main>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

export default App;
