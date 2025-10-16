// src/modules/admin/components/form/EditForm.tsx
import { useState, useEffect } from "react";

type FieldConfig = {
  label: string;
  name: string;
  type: string;
  options?: { label: string; value: string }[];
};

type Props = {
  initialData?: any;
  onSubmit: (formData: any) => void;
  fields: FieldConfig[];
};

export default function EditForm({ initialData, onSubmit, fields }: Props) {
  const [formData, setFormData] = useState(initialData || {});

  useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

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
        <button type="button" className="btn btn-outline-secondary mr-2">
          Huỷ
        </button>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Lưu
        </button>
      </div>
    </div>
  );
}
