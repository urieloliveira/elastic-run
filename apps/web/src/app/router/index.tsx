import React from "react";
import { Routes } from "react-router-dom";
import { ApmRoute } from "@elastic/apm-rum-react";

const Home = React.lazy(() => import("../../presentation/Home"));

interface RouterProps {}

const Router: React.FC<RouterProps> = () => {
  return (
    <Routes>
      <ApmRoute path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
