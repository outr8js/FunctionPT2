import React from "react";
import App from "./App";
import "../node_modules/normalize.css/normalize.css";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Get the root DOM element where the app will be attached
const container = document.getElementById("root");

// Create the concurrent root (React 18 way)
const root = createRoot(container);

// Render the application, wrapping App in BrowserRouter for routing
root.render(
  // <React.StrictMode> is optional, but recommended for development checks
  <BrowserRouter>
    <App />
  </BrowserRouter>
);