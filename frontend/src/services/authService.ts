const APP_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const register = async (data: { name: string; email: string; password: string }) => {
    const response = await fetch(`${APP_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Registration failed');
    }
    return response.json();
};