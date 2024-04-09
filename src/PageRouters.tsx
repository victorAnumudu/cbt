
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


// AUTH PAGES
// import LoginPage from "./pages/LoginPage";
import NewLogin from './pages/NewLogin';

//DASHBOARD PAGES
// import DashboardAuth from "./pages/dashboard/DashboardAuth";
import {DashboardAuth as NewDashboard} from './components/dashboardLayout/NewDashboard';
import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardProfile from "./pages/dashboard/DashboardProfile";
import DashboardVerification from "./pages/dashboard/DashboardVerification";
import DashboardPayments from "./pages/dashboard/DashboardPayments";
import DashboardLegals from "./pages/dashboard/DashboardLegals";

export default function PageRouters() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<NewLogin />} />
        <Route element={<NewDashboard />}>
          <Route path="/dashboard/home" element={<DashboardHome />} />
          <Route path="/dashboard/profile" element={<DashboardProfile />} />
          <Route path="/dashboard/verification" element={<DashboardVerification />} />
          <Route path="/dashboard/payments" element={<DashboardPayments />} />
          <Route path="/dashboard/legals" element={<DashboardLegals />} />
          <Route path="/dashboard*" element={<p>Page Not Found! Error 404</p>} />
        </Route>
        <Route path="*" element={<p>Page Not Found! Error 404</p>} />
      </Routes>
    </>
  );
}
