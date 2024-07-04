import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

// AUTH PAGES
// import LoginPage from "./pages/LoginPage";
import NewLogin from "./pages/auth/NewLogin";
import SignupPage from "./pages/auth/SignupPage";
import ForgetPwdPage from "./pages/auth/ForgetPwdPage";
import VerifyEmailPage from "./pages/auth/VerifyEmailPage";

//DASHBOARD PAGES
// import DashboardAuth from "./pages/dashboard/DashboardAuth";
import { DashboardAuth as NewDashboard } from "./components/dashboardLayout/NewDashboard";
import AuthLayout from "./components/authLayout/AuthLayout";

// PAGES
import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardProfile from "./pages/dashboard/DashboardProfile";
import DashboardVerification from "./pages/dashboard/DashboardVerification";
import DashboardPayments from "./pages/dashboard/DashboardPayments";
import DashboardLegals from "./pages/dashboard/DashboardLegals";

export default function PageRouters() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<NewLogin />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/forget-pwd" element={<ForgetPwdPage />} />
          <Route path="/verify" element={<VerifyEmailPage />} />
        </Route>
        <Route element={<NewDashboard />}>
          <Route path="/dashboard/home" element={<DashboardHome />} />
          <Route path="/dashboard/profile" element={<DashboardProfile />} />
          <Route
            path="/dashboard/verification"
            element={<DashboardVerification />}
          />
          <Route path="/dashboard/payments" element={<DashboardPayments />} />
          <Route path="/dashboard/legals" element={<DashboardLegals />} />
          <Route
            path="/dashboard/*"
            element={<p>Page Not Found! Error 404</p>}
          />
        </Route>
        <Route path="*" element={<p>Page Not Found! Error 404</p>} />
      </Routes>
    </>
  );
}
