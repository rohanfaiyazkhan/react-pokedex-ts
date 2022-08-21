import React from "react";
import { Route, Routes } from "react-router-dom";
import ListView from "../components/ListView/ListView";
import { BrowserRouter } from "react-router-dom";

interface IRouterProps extends React.PropsWithChildren {}

const AppRouter: React.FC<IRouterProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListView />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
