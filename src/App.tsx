import React from "react";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import ContextWrappers from "./contexts/ContextWrappers";
import AppRouter from "./router/Routes";

const App: React.FC = () => {
    return (
        <ContextWrappers>
            <AppRouter />
        </ContextWrappers>
    );
};

export default App;
