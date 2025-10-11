import axios from "axios";

const APP_URL = 'http://localhost:8000/api';

// export const register = async (data: { first_name: string; last_name: string; email: string; password: string }) => {
//     const response = await fetch(`${APP_URL}/register`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//         throw new Error('Registration failed');
//     }
//     return response.json();
// };

export const register = (data:any) => axios.post(`${APP_URL}/register`, data);
export const login = (data:any) => axios.post(`${APP_URL}/login`, data);
export const dashboard = (data:any) => axios.post(`${APP_URL}/dashboard`, data);
export const user = (data:any) => axios.post(`${APP_URL}/dashboard/user`, data);

