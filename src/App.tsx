import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
// import Header from "./Component/Header";

import Dashboard from "./Component/Screen/Dashboard";
// import Dashboard from "./Component/Dashboard";

const app: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Dashboard />
      </BrowserRouter>
    </div>
  );
};
export default app;
