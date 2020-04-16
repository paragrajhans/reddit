import React from "react";
import Home from "./containers/home/Home.jsx";
import Topic from "./components/Topic/Topic.jsx";

export const routes = [
  {
    path: "/",
    exact: true,
    main: (routeProps) => <Home {...routeProps} />,
  },
  {
    path: "/reddit",
    exact: true,
    main: (routeProps) => <Home {...routeProps} />,
  },
  {
    path: "/topic-details",
    exact: true,
    main: (routeProps) => <Topic {...routeProps} />,
  },
];
