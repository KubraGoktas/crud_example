import React, { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes";

const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};

const index = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="loading...">
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
};

export default index;
