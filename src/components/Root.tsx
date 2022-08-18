import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListView from "./ListView/ListView";
import DetailedView from "./DetailedView";

interface IDataRootProps {}

const Root: React.FC<IDataRootProps> = (props) => {
    return (
        <main className="min-h-screen w-full bg-red-700">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ListView />} />
                    <Route path="/view/:id" element={<DetailedView />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default Root;
