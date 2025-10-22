import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditForm from "../../../../components/form/EditForm";
import { userCreateAdmin } from "../../../../api";
import { toast } from "react-toastify";

export default function CreateUser() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const userFields = [
    { label: "Họ tên", name: "fullname", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Mật khẩu", name: "password", type: "password" },
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

  const handleSubmit = async (formData: any) => {
    try {
      setLoading(true);
      await userCreateAdmin(formData);
      toast.success("Tạo người dùng thành công");
      navigate("/admin/users");
    } catch (error: any) {
      toast.error(error.message || "Tạo người dùng thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <EditForm
      initialData={{ status: "active", role_id: "3" }}
      onSubmit={handleSubmit}
      fields={userFields}
    />
  );
}
