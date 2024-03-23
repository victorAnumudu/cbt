
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import DashboardAuth from "./pages/dashboard/DashboardAuth";
import DashboardHome from "./pages/dashboard/DashboardHome";
import {DashboardAuth as NewDashboard} from './components/dashboardLayout/NewDashboard'

// AUTH PAGES
import LoginPage from "./pages/LoginPage";
import NewLogin from './pages/NewLogin'

export default function PageRouters() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<NewLogin />} />
        <Route element={<NewDashboard />}>
          <Route path="/dashboard" element={<DashboardHome />} />
        </Route>
      </Routes>
    </>
  );
}
