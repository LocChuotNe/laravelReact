export const verifyAdmin = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/admin/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      Accept: "application/json",
    },
  });

  if (!res.ok) throw new Error("Unauthorized");

  const data = await res.json();
  if (!["admin", "editor"].includes(data.role)) {
    throw new Error("Không có quyền truy cập");
  }

  return data;
};

export const loginAdmin = async (payload: { email: string; password: string }) => {
  const res = await fetch("http://127.0.0.1:8000/api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "Đăng nhập thất bại");
  }
  return await res.json();
};

export const logoutAdmin = async () => {
  const res = await fetch('http://127.0.0.1:8000/api/admin/logout', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
      Accept: 'application/json',
    },
  });

  if (!res.ok) throw new Error('Đăng xuất admin thất bại');
  return await res.json();
};

export const getAdminProfile = async () => {
  const res = await fetch('http://127.0.0.1:8000/api/admin/dashboard', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
      Accept: 'application/json',
    },
  });

  if (!res.ok) throw new Error('Không lấy được thông tin admin');
  return await res.json();
};

export const userListAdmin = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/admin/users", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      Accept: "application/json",
    },
  });

  if (!res.ok) throw new Error("Không thể lấy danh sách người dùng");
  return await res.json();
};

export const userCreateAdmin = async (payload: any) => {
  const res = await fetch("http://127.0.0.1:8000/api/admin/users", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "Không thể tạo người dùng");
  }

  return await res.json();
};

export const getUserById = async (id: number | string) => {
  const res = await fetch(`http://127.0.0.1:8000/api/admin/users/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      Accept: "application/json",
    },
  });

  if (!res.ok) throw new Error("Không thể lấy thông tin người dùng");
  return await res.json();
};

export const updateUser = async (id: number | string, payload: any) => {
  const res = await fetch(`http://127.0.0.1:8000/api/admin/users/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "Không thể cập nhật người dùng");
  }

  return await res.json();
};

export const userDeleteAdmin = async (id: number) => {
  const res = await fetch(`http://127.0.0.1:8000/api/admin/users/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      Accept: "application/json",
    },
  });

  if (!res.ok) throw new Error("Không thể xoá người dùng");
  return await res.json();
};