import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Visit from "./Visit.jsx";
import "./styles.css";
import Menues from "./Menues.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Home route
  },
  {
    path: "/about",
    element: <About />, // About route
  },
  {
    path: "/visit",
    element: <Visit />, // Visit route
  },
  {
    path: "/menues",
    loader: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
    element: <Menues />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
