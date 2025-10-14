import { toast } from "react-toastify";

const getTheme = () =>
    document.documentElement.classList.contains("dark") ? "dark" : "colored";

export const showSuccess = (msg: string) =>
    toast.success(msg, { autoClose: 2500, theme: getTheme() });

export const showError = (msg: string) =>
    toast.error(msg, { autoClose: 3000, theme: getTheme() });

export const showWarning = (msg: string) =>
    toast.warn(msg, { autoClose: 3000, theme: getTheme() });
