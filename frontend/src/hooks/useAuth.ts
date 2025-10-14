// src/modules/admin/pages/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../api/admin";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await loginAdmin({ email, password });

    localStorage.setItem("auth_token", res.token);
    localStorage.setItem("auth_role", "admin");

    navigate("/admin/dashboard");
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-6 p-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Đăng nhập
      </button>
    </form>
  );
}
