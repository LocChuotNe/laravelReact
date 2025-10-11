import { 
  CheckSquare, 
  XSquare, 
  Trash2, 
  Printer, 
  Edit3, 
  ExternalLink, 
  Plus, 
  Search 
} from "lucide-react";
import { useEffect } from "react";

export default function User() {
  useEffect(() => {}, []);

  const users = [
    {
      id: 1,
      first_name: "Nguyễn",
      last_name: "Văn A",
      email: "a@gmail.com",
      phone: "0905123456",
      address: "123 Nguyễn Trãi, Hà Nội",
      avatar: "src/assets/css/dist/images/profile-1.jpg",
      status: "active",
      created_at: "2025-10-10",
    },
    {
      id: 2,
      first_name: "Trần",
      last_name: "Thị B",
      email: "b@gmail.com",
      phone: "0987123456",
      address: "56 Lê Lợi, TP.HCM",
      avatar: "src/assets/css/dist/images/profile-2.jpg",
      status: "inactive",
      created_at: "2025-09-18",
    },
  ];

  return (
    <div>
      <h2 className="intro-y text-lg font-medium mt-10">User List</h2>

      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <button className="btn btn-primary shadow-md mr-2">Add New User</button>
          <div className="dropdown">
            <button
              className="dropdown-toggle btn px-2 box"
              aria-expanded="false"
              data-tw-toggle="dropdown"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <Plus className="w-4 h-4" />
              </span>
            </button>
            <div className="dropdown-menu w-40">
              <ul className="dropdown-content">
                <li>
                  <a href="#" className="dropdown-item flex items-center">
                    <Printer className="w-4 h-4 mr-2" /> Print
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" /> Export to Excel
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" /> Export to PDF
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:block mx-auto text-slate-500">
            Showing 1 to 10 of 150 entries
          </div>
          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            <div className="w-56 relative text-slate-500">
              <input
                type="text"
                className="form-control w-56 box pr-10"
                placeholder="Search..."
              />
              <Search className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
            </div>
          </div>
        </div>
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
              {users.map((user) => (
                <tr key={user.id} className="intro-x">
                  <td>{user.id}</td>
                  <td>
                    <div className="flex items-center justify-center">
                      <div className="w-10 h-10 image-fit zoom-in">
                        <img
                          alt={user.first_name}
                          className="rounded-full border"
                          src={user.avatar}
                        />
                      </div>
                    </div>
                  </td>
                  <td>{`${user.first_name} ${user.last_name}`}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td className="max-w-xs truncate">{user.address}</td>
                  <td className="w-40 text-center">
                    {user.status === "active" ? (
                      <div className="flex items-center text-success justify-center text-green-600 font-medium">
                        <CheckSquare className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-base">Active</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-danger justify-center text-red-600 font-medium">
                        <XSquare className="w-4 h-4 mr-2 text-red-600 " />
                        <span className="text-base">Inactive</span>
                      </div>
                    )}
                  </td>
                  <td className="text-center">{user.created_at}</td>
                  <td className="table-report__action w-56 text-center">
                    <div className="flex justify-center items-center">
                      <a className="flex items-center mr-3" href="#">
                        <Edit3 className="w-4 h-4 mr-1" />
                        <span className="text-base">Edit</span>
                      </a>
                      <a
                        className="flex items-center text-danger"
                        href="#"
                        data-tw-toggle="modal"
                        data-tw-target="#delete-confirmation-modal"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        <span className="text-base">Delete</span>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}