import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { verifyAdmin } from "../../../../api/admin";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    verifyAdmin()
      .then(() => setAuthorized(true))
      .catch(() => {
        localStorage.clear();
        setAuthorized(false);
      });
  }, []);

  if (authorized === null) return <div>Đang kiểm tra quyền...</div>;
  if (!authorized) return <Navigate to="/login" replace />;

  return children;
}
