import React from "react";
import { Route, Routes } from "react-router-dom";
import ListView from "../components/ListView/ListView";
import IndividualView from "./../components/IndividualView/IndividualView";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { RouteNames } from "./RouteNames";
import Footer from "../components/Footer";
import NoPageFound from "./NoPageFound";

type RouterProps = React.PropsWithChildren;

const AppRouter: React.FC<RouterProps> = (props) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <HeaderBar />
            <main className="pb-4 md:pb-8 lg:pb-24 px-2 md:px-8">
                <Routes>
                    <Route path={RouteNames.Home} element={<ListView />} />
                    <Route
                        path={RouteNames.View}
                        element={<IndividualView />}
                    ></Route>
                    <Route path="*" element={<NoPageFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default AppRouter;
