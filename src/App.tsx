import React from "react";
import { BrowserRouter } from "react-router-dom";
import ContextWrappers from "./contexts/ContextWrappers";
import AppRouter from "./router/Routes";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="bg-gray-100 shadow-md lg:border-l-2 lg:border-r-2 border-gray-600 w-full h-full mx-auto min-h-screen lg:max-w-screen-lg">
                <ContextWrappers>
                    <AppRouter />
                </ContextWrappers>
            </div>
        </BrowserRouter>
    );
};

export default App;
