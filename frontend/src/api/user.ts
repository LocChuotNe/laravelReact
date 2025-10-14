export const registerUser = async (payload: { name: string; email: string; password: string }) => {
  const res = await fetch('http://localhost:8000/api/user/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error('Đăng ký thất bại');
  return await res.json();
};

export const logoutUser = async () => {
  const res = await fetch('http://localhost:8000/api/user/logout', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
      Accept: 'application/json',
    },
  });

  if (!res.ok) throw new Error('Đăng xuất thất bại');
  return await res.json();
};

export const getProfileUser = async () => {
  const res = await fetch('http://localhost:8000/api/user/profile', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
      Accept: 'application/json',
    },
  });

  if (!res.ok) throw new Error('Không lấy được thông tin người dùng');
  return await res.json();
};
