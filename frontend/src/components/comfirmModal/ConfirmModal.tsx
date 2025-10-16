import React from "react";
import { XCircleIcon } from "lucide-react";

interface ConfirmModalProps {
  open: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  confirmColor?: string; // e.g. 'red' | 'blue' | 'green'
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  title = "Are you sure?",
  message = "Do you really want to delete these records? This process cannot be undone.",
  confirmText = "Delete",
  cancelText = "Cancel",
  confirmColor = "red",
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 text-center animate-fadeIn">
        <div className="flex justify-center mb-4">
          <div className={`p-3 rounded-full bg-${confirmColor}-100`}>
            <XCircleIcon className={`h-10 w-10 text-${confirmColor}-500`} />
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-500 mb-6">{message}</p>

        <div className="flex justify-center gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md border hover:bg-gray-100"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded-md text-white bg-${confirmColor}-600 hover:bg-${confirmColor}-700`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
