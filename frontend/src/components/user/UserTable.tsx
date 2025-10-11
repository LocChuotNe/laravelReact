import { CheckSquare, XSquare, Edit3, Trash2 } from "lucide-react";

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

interface UserTableProps {
  users: UserData[];
  searchTerm: string;
  onEdit: (user: UserData) => void;
  onDelete: (user: UserData) => void;
}

export default function UserTable({ users = [], searchTerm, onEdit, onDelete }: UserTableProps) {
  console.log("📦 Rendered users:", users);

  const filteredUsers = (users || []).filter(user => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      user.first_name?.toLowerCase().includes(searchLower) ||
      user.last_name?.toLowerCase().includes(searchLower) ||
      user.email?.toLowerCase().includes(searchLower) ||
      user.phone?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
      <table className="table table-report -mt-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>AVATAR</th>
            <th>HỌ & TÊN</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>ADDRESS</th>
            <th className="text-center">STATUS</th>
            <th className="text-center">CREATED AT</th>
            <th className="text-center">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <tr key={user.id} className="intro-x">
                <td>{user.id}</td>
                <td>
                  <div className="flex items-center justify-center">
                    <img
                      alt={user.first_name}
                      className="rounded-full border w-10 h-10"
                      src={user.avatar || "/default-avatar.png"}
                    />
                  </div>
                </td>
                <td>{`${user.first_name} ${user.last_name}`}</td>
                <td>{user.email}</td>
                <td>{user.phone || "-"}</td>
                <td className="max-w-xs truncate">{user.address || "-"}</td>
                <td className="w-40 text-center">
                  {user.status === "active" ? (
                    <div className="flex items-center justify-center text-green-600 font-medium">
                      <CheckSquare className="w-4 h-4 mr-2" />
                      <span>Active</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center text-red-600 font-medium">
                      <XSquare className="w-4 h-4 mr-2" />
                      <span>Inactive</span>
                    </div>
                  )}
                </td>
                <td className="text-center">
                  {new Date(user.created_at).toLocaleDateString("vi-VN")}
                </td>
                <td className="table-report__action w-56 text-center">
                  <div className="flex justify-center items-center">
                    <button onClick={() => onEdit(user)} className="text-blue-600 hover:underline flex items-center mr-3">
                      <Edit3 className="w-4 h-4 mr-1" /> Edit
                    </button>
                    <button onClick={() => onDelete(user)} className="text-red-600 hover:underline flex items-center">
                      <Trash2 className="w-4 h-4 mr-1" /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="text-center text-slate-500 py-4">
                {searchTerm ? "Không tìm thấy người dùng phù hợp" : "Không có người dùng nào"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
