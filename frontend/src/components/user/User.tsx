import { useEffect, useState } from "react";
import { Printer, ExternalLink, Plus, Search } from "lucide-react";
import { getUsers } from "../../services/authService";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import DeleteConfirmation from "./DeleteConfirmation";
interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  address?: string;
  avatar?: string;
  status: string;
  created_at: string;
}

type ViewMode = 'list' | 'add' | 'edit' | 'delete';

export default function User() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("auth_token");
      if (!token) {
        setError("Chưa đăng nhập hoặc token không tồn tại");
        setLoading(false);
        return;
      }

      const response = await getUsers(token);
      console.log("API Response:", response.data);

      const apiData = response.data?.data;
      if (Array.isArray(apiData)) {
        setUsers(apiData);
      } else if (apiData && typeof apiData === "object") {
        setUsers([apiData]);
      } else {
        setUsers([]);
      }
    } catch (err: any) {
      console.error("Fetch users error:", err);
      setError(err.response?.data?.message || "Không thể tải danh sách người dùng");
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = () => {
    setViewMode('add');
    setSelectedUser(null);
  };

  const handleEditUser = (user: UserData) => {
    setViewMode('edit');
    setSelectedUser(user);
  };

  const handleDeleteUser = (user: UserData) => {
    setViewMode('delete');
    setSelectedUser(user);
  };

  const handleBackToList = () => {
    setViewMode('list');
    setSelectedUser(null);
    fetchUsers();
  };

  if (viewMode === 'add' || viewMode === 'edit') {
    return (
      <UserForm
        user={selectedUser}
        mode={viewMode}
        onSuccess={handleBackToList}
        onCancel={handleBackToList}
      />
    );
  }

  if (viewMode === 'delete' && selectedUser) {
    return (
      <DeleteConfirmation
        user={selectedUser}
        onSuccess={handleBackToList}
        onCancel={handleBackToList}
      />
    );
  }

  return (
    <div>
      <h2 className="intro-y text-lg font-medium mt-10">Quản lý người dùng</h2>

      {loading && <p className="text-slate-500 p-4">Đang tải dữ liệu...</p>}
      {error && <p className="text-red-500 p-4">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-12 gap-6 mt-5">
          <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
            <button 
              onClick={handleAddUser}
              className="btn btn-primary shadow-md mr-2"
            >
              Add New User
            </button>

            <div className="dropdown">
              <button className="dropdown-toggle btn px-2 box" data-tw-toggle="dropdown">
                <span className="w-5 h-5 flex items-center justify-center">
                  <Plus className="w-4 h-4" />
                </span>
              </button>
              <div className="dropdown-menu w-40">
                <ul className="dropdown-content">
                  <li><a className="dropdown-item"><Printer className="w-4 h-4 mr-2" /> Print</a></li>
                  <li><a className="dropdown-item"><ExternalLink className="w-4 h-4 mr-2" /> Export to Excel</a></li>
                  <li><a className="dropdown-item"><ExternalLink className="w-4 h-4 mr-2" /> Export to PDF</a></li>
                </ul>
              </div>
            </div>

            <div className="hidden md:block mx-auto text-slate-500">
              Showing {users.length} entries
            </div>

            <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
              <div className="w-56 relative text-slate-500">
                <input
                  type="text"
                  className="form-control w-56 box pr-10"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
              </div>
            </div>
          </div>

          <UserTable
            users={users}
            searchTerm={searchTerm}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        </div>
      )}
    </div>
  );
}
