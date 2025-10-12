import axios from "axios";

// Cấu hình axios
const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Thêm interceptor để tự động gắn token vào mọi request (nếu có)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
const APP_URL = "http://127.0.0.1:8000/api";

export const register = (data: any) =>
  axios.post(`${APP_URL}/register`, data);

export const login = (data: any) => 
  axios.post(`${APP_URL}/login`, data, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  });

export const getUsers = () => API.get("/users");
export const getUser = (id: number) => API.get(`/users/${id}`);
export const createUser = (data: any) => API.post("/users", data);
export const updateUser = (id: number, data: any) => API.put(`/users/${id}`, data);
export const deleteUser = (id: number) => API.delete(`/users/${id}`);


export default API;
