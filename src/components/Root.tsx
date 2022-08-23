import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListView from "./ListView/ListView";
import IndividualView from "./IndividualView/IndividualView";
import AppRoutes from "./../router/Routes";

interface IDataRootProps {}

const Root: React.FC<IDataRootProps> = (props) => {
    return (
        <main className="min-h-screen w-full bg-red-700">
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </main>
    );
};

export default Root;
