import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './modules/admin/pages/Dashboard.tsx'
import Login from './modules/admin/pages/AdminLogin.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
