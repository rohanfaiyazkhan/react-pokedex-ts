import React from "react";
import { BrowserRouter } from "react-router-dom";
import ContextWrappers from "./contexts/ContextWrappers";
import AppRouter from "./router/Routes";

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
            <Main>
                <ContextWrappers>
                    <AppRouter />
                </ContextWrappers>
            </Main>
        </BrowserRouter>
    );
};

export default App;
