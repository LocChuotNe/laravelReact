import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './modules/admin/pages/Dashboard.tsx'
import Login from './modules/admin/pages/AdminLogin.tsx'
import ProtectedRoute from './modules/admin/components/common/ProtectedRoute.tsx'
import BlockRoute from './modules/admin/components/common/BlockRoute.tsx'
import Welcome from './modules/admin/pages/Welcome.tsx'
import UserList from "./modules/admin/components/user/UserList.tsx";
import UserGroups from "./modules/admin/components/user/UserGroups.tsx";
import EditUser from "./modules/admin/components/user/EditUser.tsx";
import CreateUser from "./modules/admin/components/user/CreateUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route
          path="/login"
          element={
            <BlockRoute>
              <Login />
            </BlockRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="admin" element={<Welcome />} />
          <Route path="users" element={<UserList />} />
          <Route path="/admin/user/edit/:id" element={<EditUser />} />
          <Route path="/admin/user/create" element={<CreateUser />} />
          <Route path="groups" element={<UserGroups />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
