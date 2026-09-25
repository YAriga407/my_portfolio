import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter, RootRoute, Route } from "@tanstack/react-router";

import Home from "./routes/home";
import ProjectsPage from "./routes/projects";
import EducationPage from "./routes/education";
import ContactPage from "./routes/contact";

import "./style.css";

// Create root route
const rootRoute = new RootRoute({
  component: ({ children }) => <>{children}</>,
});

// Create routes
const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const projectsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: ProjectsPage,
});

const educationRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/education",
  component: EducationPage,
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

// Create route tree
const routeTree = rootRoute.addChildren([homeRoute, projectsRoute, educationRoute, contactRoute]);

// Create router
const router = createRouter({
  routeTree,
  basepath: "/my_portfolio",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
