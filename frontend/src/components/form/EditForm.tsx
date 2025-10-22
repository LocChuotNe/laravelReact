import { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditForm({ initialData, onSubmit, fields }: Props) {
  const [formData, setFormData] = useState(initialData || {});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await onSubmit(formData);
      toast.success("Cập nhật thành công!");
    } catch (error: any) {
      toast.error(error.message || "Có lỗi xảy ra khi cập nhật");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () =>{
    navigate('/admin/users');
  }

  return (
    <div className="intro-y box p-5">
      {fields.map((field) => (
        <div key={field.name} className="mt-3">
          <label className="form-label">{field.label}</label>
          {field.type === "select" ? (
            <select
              name={field.name}
              className="form-select"
              value={formData[field.name] || ""}
              onChange={handleChange}
            >
              {field.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              name={field.name}
              type={field.type}
              className="form-control"
              value={formData[field.name] || ""}
              onChange={handleChange}
            />
          )}
        </div>
      ))}

      <div className="text-right mt-5">
        <button 
          type="button" 
          className="btn btn-outline-secondary mr-2"
          onClick={handleCancel}
        >
          Huỷ
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Đang lưu..." : "Lưu"}
        </button>
      </div>
    </div>
  );
}
