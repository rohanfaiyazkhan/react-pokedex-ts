import React from "react";
import { Route, Routes } from "react-router-dom";
import ListView from "../components/ListView/ListView";
import { BrowserRouter } from "react-router-dom";
import Individual from './../components/IndividualView/IndividualView';

interface IRouterProps extends React.PropsWithChildren {}

// TODO: Make an implemenation for this
const EmptyView = () => {
    console.warn("Placeholder view. Please implement view for this route")

    return <div />
}

const AppRouter: React.FC<IRouterProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListView />} />
                <Route path="/view" element={<EmptyView />}>
                    <Route path="/:id" element={<Individual />}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
