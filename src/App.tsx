import React from "react";
import ContextWrappers from "./contexts/ContextWrappers";
import AppRouter from "./router/Router";

const App: React.FC = () => {
    return (
        <ContextWrappers>
            <AppRouter />
        </ContextWrappers>
    );
};

export default App;
