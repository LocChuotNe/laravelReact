// src/modules/admin/pages/EditUser.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EditForm from "../../../../components/form/EditForm";
import { getUserById, updateUser } from "../../../../api";
import { toast } from "react-toastify";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const userFields = [
    { label: "Họ tên", name: "fullname", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Số điện thoại", name: "phone", type: "text" },
    {
      label: "Quyền tài khoản",
      name: "role_id",
      type: "select",
      options: [
        { label: "Admin", value: "1" },
        { label: "Editor", value: "2" },
        { label: "Viewer", value: "3" },
      ],
    },
    {
      label: "Trạng thái",
      name: "status",
      type: "select",
      options: [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
      ],
    },
  ];

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await getUserById(id);
        setUserData(res.data);
      } catch {
        toast.error("Không thể tải thông tin người dùng");
      }
    }
    fetchUser();
  }, [id]);

  const handleSubmit = async (formData: any) => {
    try {
      await updateUser(id, formData);
      toast.success("Cập nhật thành công");
      navigate("/admin/users");
    } catch {
      toast.error("Cập nhật thất bại");
    }
  };

  return userData ? (
    <EditForm initialData={userData} onSubmit={handleSubmit} fields={userFields} />
  ) : (
    <div className="p-5">Đang tải dữ liệu...</div>
  );
}
