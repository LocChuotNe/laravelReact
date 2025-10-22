import { useEffect, useState } from "react";
import { userListAdmin, userDeleteAdmin } from "../../../../api/index";
import PaginationNav from "../../../../components/shared/PaginationNav";
import SearchComponent from "../../../../components/shared/SearchComponent";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { Trash2, CheckSquare, Printer, FileText, Plus } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2;

  const totalPages = Math.ceil(filteredUsers.length / pageSize);
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const fetchUsers = async () => {
    try {
      const res = await userListAdmin();
      const filtered = res.data.filter((user) => user.role_name !== 'admin');
      setUsers(filtered);
      setFilteredUsers(filtered);
    } catch {
      toast.error("Không thể tải danh sách người dùng");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    navigate(`/admin/user/edit/${id}`, {
      state: { cancelPath: "/admin/users" }
    });
  };

  const handleCreate = () => {
    navigate(`/admin/user/create`);
  };

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Bạn có chắc muốn xoá?",
      text: "Hành động này không thể hoàn tác.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xoá",
      cancelButtonText: "Huỷ",
    });

    if (!result.isConfirmed) return;

    try {
      await userDeleteAdmin(id);
      toast.success("Xoá người dùng thành công");
      fetchUsers();
    } catch (err) {
      toast.error("Xoá thất bại");
      console.error(err);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6 mt-5">
      {/* Header & Toolbar */}
      <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
        <button className="btn btn-primary shadow-md mr-2" onClick={handleCreate}>Add New User</button>
        <div className="dropdown">
          <button className="dropdown-toggle btn px-2 box" aria-expanded="false" data-tw-toggle="dropdown">
            <span className="w-5 h-5 flex items-center justify-center">
              <Plus className="w-4 h-4" />
            </span>
          </button>
          <div className="dropdown-menu w-40">
            <ul className="dropdown-content">
              <li><a href="#" className="dropdown-item"><Printer className="w-4 h-4 mr-2" /> Print</a></li>
              <li><a href="#" className="dropdown-item"><FileText className="w-4 h-4 mr-2"/> Export to Excel</a></li>
              <li><a href="#" className="dropdown-item"><FileText className="w-4 h-4 mr-2"/> Export to PDF</a></li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block mx-auto text-slate-500">Showing {filteredUsers.length} entries</div>
        <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <SearchComponent
            data={users}
            searchFields={['fullname', 'email']}
            onFiltered={setFilteredUsers}
          />
        </div>
      </div>

      {/* Table */}
      <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <table className="table table-report -mt-2">
          <thead>
            <tr>
              <th className="whitespace-nowrap">IMAGE</th>
              <th className="whitespace-nowrap">FULL NAME</th>
              <th className="text-center whitespace-nowrap">PHONE</th>
              <th className="text-center whitespace-nowrap">EMAIL</th>
              <th className="text-center whitespace-nowrap">ROLES</th>
              <th className="text-center whitespace-nowrap">STATUS</th>
              <th className="text-center whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <tr key={user.id} className="intro-x">
                <td className="w-40">
                  <div className="w-10 h-10 image-fit zoom-in">
                    <img
                      alt={user.fullname}
                      className="tooltip rounded-full"
                      src="dist/images/preview-15.jpg"
                      title={`Uploaded at ${user.created_at}`}
                    />
                  </div>
                </td>
                <td>
                  <a href="#" className="font-medium whitespace-nowrap">{user.fullname}</a>
                </td>
                <td className="text-center">{user.phone || "—"}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">{user.role_name}</td>
                <td className="w-40">
                  <div className={`flex items-center justify-center ${user.status === "active" ? "text-success" : "text-danger"}`}>
                    <CheckSquare className="w-4 h-4 mr-2" />
                    {user.status}
                  </div>
                </td>
                <td className="table-report__action w-56">
                  <div className="flex justify-center items-center">
                    <a 
                      className="flex items-center mr-3" 
                      href="#"
                      onClick={() => handleEdit(user.id)}
                    >
                      <CheckSquare className="w-4 h-4 mr-1" /> Edit
                    </a>
                    <a
                      className="flex items-center text-danger"
                      href="#"
                      onClick={() => handleDelete(user.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-1" /> Delete
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PaginationNav
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
      />
    </div>
  );
}
