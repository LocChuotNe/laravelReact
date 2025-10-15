import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './modules/admin/pages/Dashboard.tsx'
import Login from './modules/admin/pages/AdminLogin.tsx'
import ProtectedRoute from './modules/admin/components/common/ProtectedRoute.tsx'
import BlockRoute from './modules/admin/components/common/BlockRoute.tsx'
import Welcome from './modules/admin/pages/Welcome.tsx'
import UserList from "./modules/admin/components/user/UserList.tsx";
import UserGroups from "./modules/admin/components/user/UserGroups.tsx";

function App() {
  return (
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
        <Route index element={<Welcome />} />
        <Route path="users" element={<UserList />} />
        <Route path="groups" element={<UserGroups />} />
      </Route>
    </Routes>
  );
}

export default App
