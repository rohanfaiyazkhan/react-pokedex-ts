import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./../router/Routes";

interface IDataRootProps {}

const Root: React.FC<IDataRootProps> = (props) => {
    return (
        <main className="min-h-screen w-full">
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </main>
    );
};

export default Root;
