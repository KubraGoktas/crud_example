import React, { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Spinner } from "reactstrap";
import { routes } from "./routes";

const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};

const index = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Spinner color="primary" type="grow">
            Loading...
          </Spinner>
        }
      >
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
};

export default index;
