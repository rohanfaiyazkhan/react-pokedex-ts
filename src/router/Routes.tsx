import React from "react";
import { Route, Routes } from "react-router-dom";
import ListView from "../components/ListView/ListView";
import { BrowserRouter } from "react-router-dom";
import IndividualView from "./../components/IndividualView/IndividualView";
import HeaderBar from "../components/HeaderBar/HeaderBar";

interface IRouterProps extends React.PropsWithChildren {}

const AppRouter: React.FC<IRouterProps> = (props) => {
    return (
        <BrowserRouter>
            <HeaderBar />
            <main className="w-full h-full mx-auto min-h-screen lg:max-w-screen-lg px-4 md:px-8">
                <Routes>
                    <Route path="/" element={<ListView />} />
                    <Route
                        path="/view/:id"
                        element={<IndividualView />}
                    ></Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default AppRouter;
