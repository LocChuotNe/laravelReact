import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import DropdownProfileUser from "../components/common/DropdownProfileUser";
import Notifycation from "../components/common/Notifycation";
import SeachBody from "../components/common/SeachBody";
import SideNav from "../components/common/SideNav";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("auth_role");
    if (role !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex mt-[4.7rem] md:mt-0">
      <SideNav />
      <div className="content">
        <div className="top-bar">
          <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Application</a></li>
              <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
          </nav>
          <SeachBody />
          <Notifycation />
          <DropdownProfileUser />
        </div>

        <Outlet />
      </div>
    </div>
  );
}
