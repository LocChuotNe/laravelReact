import { useState } from 'react';
import LoginForm from '../components/auth/login/LoginForm';
import LoginInfo from '../components/auth/login/LoginInfo';
import DarkModeSwitcher from '../components/common/DarkModeSwitcher';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [errors, setErrors] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors([]);

        login({
            email: formData.email,
            password: formData.password
        })
           .then(res => {
                console.log("FULL LOGIN RESPONSE:", res);
                console.log("Response data:", res.data);

                // trả token ở res.data.token
                const token = res.data?.token;

                if (!token) {
                    console.error("Response không có token, kiểm tra API lại:", res.data);
                    throw new Error("Không nhận được token từ server");
                }

                // chỉ lưu 1 key duy nhất
                localStorage.setItem("auth_token", token);

                console.log("Token đã lưu:", token);
                navigate("/dashboard");
            })
            .catch(err => {
            console.error("Login error:", err);

            if (err.response?.status === 422) {
                const apiErrors = err.response.data.errors;
                if (Array.isArray(apiErrors)) {
                setErrors(apiErrors);
                } else if (typeof apiErrors === "object") {
                const formattedErrors = Object.values(apiErrors).flat();
                setErrors(formattedErrors);
                }
            } else if (err.response?.status === 401) {
                setErrors(["Email hoặc mật khẩu không đúng."]);
            } else {
                setErrors(["Đã có lỗi xảy ra. Vui lòng thử lại."]);
            }
            });
        };

    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const handleGoToRegister = () => {
        navigate('/register');
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
                <DarkModeSwitcher
                isDarkMode={isDarkMode}
                onToggle={handleDarkModeToggle}
                />
            </div>
s        </div>
    );
}
