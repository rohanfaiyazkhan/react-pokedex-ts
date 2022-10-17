import React from "react";
import { BrowserRouter } from "react-router-dom";
import ContextWrappers from "./contexts/ContextWrappers";
import AppRouter from "./router/Routes";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="w-full h-full mx-auto min-h-screen xl:max-w-screen-xl 2xl:max-w-screen-2xl">
                <ContextWrappers>
                    <AppRouter />
                </ContextWrappers>
            </div>
        </BrowserRouter>
    );
};

export default App;
