import axios from "axios";

// ========================
// ⚙️ Cấu hình axios instance
// ========================
const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// 🧩 Thêm interceptor để tự động gắn token vào mọi request (nếu có)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
const APP_URL = "http://127.0.0.1:8000/api";

// Đăng ký tài khoản
export const register = (data: any) =>
  axios.post(`${APP_URL}/register`, data);

// Đăng nhập
export const login = (data: any) => 
  axios.post(`${APP_URL}/login`, data, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  });

// Lấy danh sách người dùng
export const getUsers = (token: string) =>
  axios.get(`${APP_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

// Lấy thông tin một user
export const getUser = (token: string, id: number) =>
  axios.get(`${APP_URL}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

// Tạo user mới
export const createUser = (token: string, data: any) =>
  axios.post(`${APP_URL}/users`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

// Cập nhật user
export const updateUser = (token: string, id: number, data: any) =>
  axios.put(`${APP_URL}/users/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

// Xóa user
export const deleteUser = (token: string, id: number) =>
  axios.delete(`${APP_URL}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

// Dashboard (ví dụ minh họa)
export const dashboard = (data: any) => API.post("/dashboard", data);

export default API;
