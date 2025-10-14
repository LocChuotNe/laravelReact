import { useState, useEffect } from "react";
import { createUser, updateUser } from "../../services/authService";

interface UserData {
  id?: number;
  fullname: string;
  email: string;
  phone?: string;
  address?: string;
  status: string;
}

interface UserFormProps {
  user?: UserData | null;
  mode: 'add' | 'edit';
  onSuccess: () => void;
  onCancel: () => void;
}

export default function UserForm({ user, mode, onSuccess, onCancel }: UserFormProps) {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    status: 'active'
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (mode === 'edit' && user) {
      setFormData({
        fullname: user.fullname || '',
        email: user.email || '',
        password: '',
        phone: user.phone || '',
        address: user.address || '',
        status: user.status || 'active'
      });
    }
  }, [user, mode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: any = {};
    
    if (!formData.fullname.trim()) newErrors.fullname = 'Vui lòng nhập tên';
    if (!formData.email.trim()) newErrors.email = 'Vui lòng nhập email';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email không hợp lệ';
    
    if (mode === 'add' && !formData.password) {
      newErrors.password = 'Vui lòng nhập mật khẩu';
    } else if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setLoading(true);
    const token = localStorage.getItem("auth_token");
    
    if (!token) {
      alert("Không tìm thấy token xác thực");
      setLoading(false);
      return;
    }

    try {
      const submitData = { ...formData };
      if (mode === 'edit' && !submitData.password) {
        delete submitData.password;
      }
      
      if (mode === 'add') {
        await createUser(submitData);
        alert("Tạo người dùng thành công!");
      } else if (mode === 'edit' && user?.id) {
        await updateUser(user.id, submitData);
        alert("Cập nhật người dùng thành công!");
      }
      
      onSuccess();
    } catch (error: any) {
      console.error(error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert(error.response?.data?.message || "Có lỗi xảy ra");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium">
          {mode === 'add' ? 'Thêm người dùng mới' : `Chỉnh sửa người dùng #${user?.id}`}
        </h2>
        <button 
          onClick={onCancel}
          className="btn btn-secondary"
          disabled={loading}
        >
          ← Quay lại
        </button>
      </div>
      
      <div className="box p-5">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="form-label">
                Họ <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="fullname"
                className={`form-control ${errors.fullname ? 'border-red-500' : ''}`}
                placeholder="Nhập họ..." 
                value={formData.fullname}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.fullname && (
                <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>
              )}
            </div>
            
            <div>
              <label className="form-label">
                Tên <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="last_name"
                className={`form-control ${errors.last_name ? 'border-red-500' : ''}`}
                placeholder="Nhập tên..." 
                value={formData.last_name}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.last_name && (
                <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
              )}
            </div>
          </div>
          
          <div>
            <label className="form-label">
              Email <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              name="email"
              className={`form-control ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Nhập email..." 
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label className="form-label">
              Mật khẩu {mode === 'add' && <span className="text-red-500">*</span>}
              {mode === 'edit' && <span className="text-slate-500 text-xs ml-2">(Để trống nếu không đổi)</span>}
            </label>
            <input 
              type="password" 
              name="password"
              className={`form-control ${errors.password ? 'border-red-500' : ''}`}
              placeholder={mode === 'add' ? "Nhập mật khẩu..." : "Nhập mật khẩu mới..."}
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          
          <div>
            <label className="form-label">Số điện thoại</label>
            <input 
              type="tel" 
              name="phone"
              className="form-control" 
              placeholder="Nhập số điện thoại..." 
              value={formData.phone}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          
          <div>
            <label className="form-label">Địa chỉ</label>
            <textarea 
              name="address"
              className="form-control" 
              rows={3} 
              placeholder="Nhập địa chỉ..."
              value={formData.address}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          
          <div>
            <label className="form-label">Trạng thái</label>
            <select 
              name="status"
              className="form-control"
              value={formData.status}
              onChange={handleChange}
              disabled={loading}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          
          <div className="flex gap-2 mt-5">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Đang xử lý...' : (mode === 'add' ? 'Tạo người dùng' : 'Cập nhật')}
            </button>
            <button 
              type="button" 
              onClick={onCancel}
              className="btn btn-secondary"
              disabled={loading}
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}