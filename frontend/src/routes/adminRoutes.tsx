// src/routes/adminRoutes.tsx
import { Route } from "react-router-dom";
import AdminLogin from "../modules/admin/pages/AdminLogin";
import Dashboard from "../modules/admin/pages/Dashboard";

export const adminRoutes = (
  <>
    <Route path="/admin/login" element={<AdminLogin />} />
    <Route path="/admin/dashboard" element={<Dashboard />} />
  </>
);
