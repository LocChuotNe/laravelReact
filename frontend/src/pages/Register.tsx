import { useState } from 'react';
import RegisterInfo from '../components/auth/register/RegisterInfo';
import RegisterForm from '../components/auth/register/RegisterForm';
import DarkModeSwitcher from '../components/common/DarkModeSwitcher';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [error, setError] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        agreeToPolicy: false
    });
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const getPasswordStrength = (): number => {
        const length = formData.password.length;
        if (length === 0) return 0;
        if (length < 6) return 1;
        if (length < 10) return 2;
        if (length < 14) return 3;
        return 4;
    };

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError([]);

        register({
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            password: formData.password,
            password_confirmation: formData.passwordConfirmation,
            agreeToPolicy: formData.agreeToPolicy ? 1 : 0
        })
        .then(res => {
            console.log('Registration successful:', res.data);
            navigate('/login');
            alert("Đăng ký thành công!");
        })
        .catch(err => {
            if (err.response && err.response.status === 422) {
                const errors = err.response.data.errors;
                if(Array.isArray(errors)) {
                    setError(errors as string[]);
                } else if(typeof errors === 'object') {
                    const formattedErrors  = Object.values(errors).flat() as string[];
                    setError(formattedErrors);
                }
            } else {
                console.error('Unexpected error:', err);
                setError(["Đã có lỗi xảy ra. Vui lòng thử lại."]);
            }
        });
    };

    const handleSignIn = () => {
        console.log('Redirect to sign in');
    };

    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className="login">
            <div className="container sm:px-10">
                <div className="block xl:grid grid-cols-2 gap-4">
                    <RegisterInfo />
                    <RegisterForm 
                        formData={formData}
                        onInputChange={handleInputChange}
                        passwordStrength={getPasswordStrength()}
                        onSubmit={handleRegister}
                        onSignIn={handleSignIn}
                        errors={error}
                    />
                </div>
                <DarkModeSwitcher 
                    isDarkMode={isDarkMode}
                    onToggle={handleDarkModeToggle}
                />
            </div>
        </div>
    );
}