import React from "react";
import { Route, Routes } from "react-router-dom";
import ListView from "../components/ListView/ListView";
import IndividualView from "./../components/IndividualView/IndividualView";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { RouteNames } from "./RouteNames";

interface IRouterProps extends React.PropsWithChildren {}

const AppRouter: React.FC<IRouterProps> = (props) => {
    return (
        <div className="transition-colors duration-300">
            <HeaderBar />
            <main className="pb-4 md:pb-8 lg:pb-24 px-2 md:px-8">
                <Routes>
                    <Route path={RouteNames.Home} element={<ListView />} />
                    <Route
                        path={RouteNames.View}
                        element={<IndividualView />}
                    ></Route>
                </Routes>
            </main>
        </div>
    );
};

export default AppRouter;
