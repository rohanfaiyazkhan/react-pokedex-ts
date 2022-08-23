import React from "react";
import ContextWrappers from "./contexts/ContextWrappers";
import AppRouter from "./router/Routes";

const App: React.FC = () => {
    return (
        <ContextWrappers>
            <main className="w-full h-full mx-auto min-h-screen lg:max-w-screen-lg  px-4 md:px-8 py-4">
                <AppRouter />
            </main>
        </ContextWrappers>
    );
};

export default App;
