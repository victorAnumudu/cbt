import React from "react";

import DashboardLayout from "../../components/dashboardLayout/DashboardLayout";
import { Outlet } from "react-router-dom";

export default function DashboardAuth() {
  return (
  <DashboardLayout>
    <Outlet />
  </DashboardLayout>
  )
}
