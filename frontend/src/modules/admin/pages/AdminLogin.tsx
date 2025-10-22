import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import { loginAdmin } from "../../../api/admin";
import LoginInfo from "../../../modules/admin/components/auth/LoginInfo"
import { toast } from "react-toastify";
export default function AdminLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await loginAdmin(formData);
      toast.success('abc');
      localStorage.setItem("auth_token", res.token);
      localStorage.setItem("auth_role", "admin");
      navigate("/admin");

      localStorage.setItem("auth_user", JSON.stringify(res.user));
      localStorage.setItem("auth_token", res.token);
    } catch (err: any) {
      const res = await err.response?.json?.();
      const message = res?.error || "Đăng nhập thất bại";
      setErrors([message]);
    }
  };

  const handleGoToRegister = () => {
    navigate("/admin/register");
  };

  return (
    <div className="login">
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
          <LoginInfo />
          <LoginForm
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleLogin}
            onGoToRegister={handleGoToRegister}
            errors={errors}
          />
        </div>
      </div>
    </div>
  );
}
