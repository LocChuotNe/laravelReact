import { useState } from "react";
import { Trash2 } from "lucide-react";
import { deleteUser } from "../../services/authService";

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
}

interface DeleteConfirmationProps {
  user: UserData;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function DeleteConfirmation({ user, onSuccess, onCancel }: DeleteConfirmationProps) {
  const [loading, setLoading] = useState(false);

  const handleConfirmDelete = async () => {
    setLoading(true);
    const token = localStorage.getItem("auth_token");
    
    if (!token) {
      alert("Không tìm thấy token xác thực");
      setLoading(false);
      return;
    }

    try {
      await deleteUser(token, user.id);
      alert("Xóa người dùng thành công!");
      onSuccess();
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || "Không thể xóa người dùng");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="box p-8 max-w-md w-full">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <Trash2 className="h-6 w-6 text-red-600" />
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Xác nhận xóa người dùng
          </h3>
          
          <p className="text-sm text-gray-500 mb-6">
            Bạn có chắc chắn muốn xóa người dùng{' '}
            <strong>{user.first_name} {user.last_name}</strong>?
            <br />
            <span className="text-red-500">Hành động này không thể hoàn tác.</span>
          </p>
          
          <div className="flex gap-3 justify-center">
            <button 
              onClick={handleConfirmDelete}
              className="btn btn-danger"
              disabled={loading}
            >
              {loading ? 'Đang xóa...' : 'Xóa'}
            </button>
            <button 
              onClick={onCancel}
              className="btn btn-secondary"
              disabled={loading}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}