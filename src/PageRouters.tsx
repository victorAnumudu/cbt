import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import DashboardAuth from "./pages/dashboard/DashboardAuth";
import DashboardHome from "./pages/dashboard/DashboardHome";

export default function PageRouters() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<DashboardAuth />}>
          <Route path="/dashboard" element={<DashboardHome />} />
        </Route>
      </Routes>
    </>
  );
}
