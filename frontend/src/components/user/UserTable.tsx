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
  console.log("Rendered users:", users);

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
    <div className="intro-y col-span-12">
      <div className="hidden xl:block overflow-x-auto">
        <table className="table-auto w-full -mt-2 min-w-max">
          <thead>
            <tr className="bg-slate-50 border-b">
              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-700 uppercase">ID</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-700 uppercase">AVATAR</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-700 uppercase">HỌ & TÊN</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-700 uppercase">EMAIL</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-700 uppercase">PHONE</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-slate-700 uppercase">ADDRESS</th>
              <th className="px-3 py-3 text-center text-xs font-semibold text-slate-700 uppercase">STATUS</th>
              <th className="px-3 py-3 text-center text-xs font-semibold text-slate-700 uppercase">CREATED AT</th>
              <th className="px-3 py-3 text-center text-xs font-semibold text-slate-700 uppercase">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredUsers.length > 0 ? (
              filteredUsers.map(user => (
                <tr key={user.id} className="border-b hover:bg-slate-50">
                  <td className="px-3 py-3 text-sm">{user.id}</td>
                  <td className="px-3 py-3">
                    <img
                      alt={user.first_name}
                      className="rounded-full border w-10 h-10 object-cover"
                      src={user.avatar || "/default-avatar.png"}
                    />
                  </td>
                  <td className="px-3 py-3 text-sm font-medium whitespace-nowrap">{`${user.first_name} ${user.last_name}`}</td>
                  <td className="px-3 py-3 text-sm">{user.email}</td>
                  <td className="px-3 py-3 text-sm">{user.phone || "-"}</td>
                  <td className="px-3 py-3 text-sm max-w-xs truncate">{user.address || "-"}</td>
                  <td className="px-3 py-3 text-center">
                    {user.status === "active" ? (
                      <span className="inline-flex items-center text-green-600 text-sm font-medium">
                        <CheckSquare className="w-4 h-4 mr-1" />
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-red-600 text-sm font-medium">
                        <XSquare className="w-4 h-4 mr-1" />
                        Inactive
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-3 text-sm text-center whitespace-nowrap">
                    {new Date(user.created_at).toLocaleDateString("vi-VN")}
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex justify-center items-center gap-2">
                      <button 
                        onClick={() => onEdit(user)} 
                        className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
                      >
                        <Edit3 className="w-4 h-4 mr-1" /> Edit
                      </button>
                      <button 
                        onClick={() => onDelete(user)} 
                        className="text-red-600 hover:text-red-800 flex items-center text-sm"
                      >
                        <Trash2 className="w-4 h-4 mr-1" /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className="px-3 py-8 text-center text-slate-500">
                  {searchTerm ? "Không tìm thấy người dùng phù hợp" : "Không có người dùng nào"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="xl:hidden">
        {filteredUsers.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {filteredUsers.map((user, index) => (
              <div 
                key={user.id} 
                className={`flex items-center px-4 py-3 ${index !== filteredUsers.length - 1 ? 'border-b' : ''}`}
              >
                <div className="flex-1 min-w-0 mr-3">
                  <h3 className="font-semibold text-slate-800 text-sm truncate">
                    {`${user.first_name} ${user.last_name}`}
                  </h3>
                  <p className="text-xs text-slate-500 truncate">{user.email}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button 
                    onClick={() => onEdit(user)} 
                    className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded transition-colors"
                    aria-label="Edit user"
                  >
                    <Edit3 className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => onDelete(user)} 
                    className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded transition-colors"
                    aria-label="Delete user"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-8 text-center text-slate-500">
            {searchTerm ? "Không tìm thấy người dùng phù hợp" : "Không có người dùng nào"}
          </div>
        )}
      </div>
    </div>
  );
}