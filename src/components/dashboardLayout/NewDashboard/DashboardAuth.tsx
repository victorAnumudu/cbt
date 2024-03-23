import DashboardLayout from "./DashboardLayout";
import { Outlet } from "react-router-dom";

export default function DashboardAuth() {
  return (
  <DashboardLayout>
    <Outlet />
  </DashboardLayout>
  )
}