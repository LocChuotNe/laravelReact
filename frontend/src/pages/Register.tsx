import { useState } from 'react';
import RegisterInfo from '../components/auth/register/RegisterInfo';
import RegisterForm from '../components/auth/register/RegisterForm';
import DarkModeSwitcher from '../components/common/DarkModeSwitcher';

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        agreeToPolicy: false
    });
    const [isDarkMode, setIsDarkMode] = useState(false);

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
        console.log("Register:", formData);
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