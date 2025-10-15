import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BlockRoute({ children }: { children: JSX.Element }) {

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        const role = localStorage.getItem("auth_role");

        if (token && role === "admin") {
        // toast.error("Bạn chưa thực hiện chức năng đăng xuất");
        console.log("Bạn chưa thực hiện chức năng đăng xuất");
        setTimeout(() => {
            setRedirect(true);
        }, 300);
        }
    }, []);

    if (redirect) return <Navigate to="/admin" replace />;
    return children;
}
