export const loginAdmin = async (payload: { email: string; password: string }) => {
  const res = await fetch("http://localhost:8000/api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Đăng nhập thất bại");
  return await res.json();
};

export const logoutAdmin = async () => {
  const res = await fetch('http://localhost:8000/api/admin/logout', {
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
  const res = await fetch('http://localhost:8000/api/admin/dashboard', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
      Accept: 'application/json',
    },
  });

  if (!res.ok) throw new Error('Không lấy được thông tin admin');
  return await res.json();
};
