import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SetupWorkerApi } from "msw";

// Set up mock server if in development mode
async function renderApp() {
    if (process.env.NODE_ENV === "development") {
        try {
            const { worker } = require("./mocks/browser");
            await (worker as SetupWorkerApi).start();
        } catch (error) {
            console.error(error);
        }
    }

    const root = ReactDOM.createRoot(
        document.getElementById("root") as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

renderApp();
