import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {Users, User } from "lucide-react";

export default function SideNav() {
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  useEffect(() => {
    const role = localStorage.getItem("auth_role");
    if (role !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(prev => !prev);
  };
  return (
    <nav className="side-nav">
      <a href="#" className="intro-x flex items-center pl-5 pt-4">
        <img alt="Midone - HTML Admin Template" className="w-6" src="dist/images/logo.svg" />
        <span className="hidden xl:block text-white text-lg ml-3">Rubick</span>
      </a>
      <div className="side-nav__devider my-6"></div>
      <ul>
        <li>
            <a href="#" onClick={toggleUserMenu} className="side-menu side-menu--active">
                <div className="side-menu__icon"><Users className="w-5 h-5 text-slate-500 text-[#1e40af]" /></div>
                <div className="side-menu__title">
                Quản lý User
                <div className="side-menu__sub-icon transform rotate-180">
                    <Users className="w-5 h-5 text-slate-500 text-[#1e40af]" />
                </div>
                </div>
            </a>

          {isUserMenuOpen && (
            <ul  className="side-menu__sub-open">
              <li>
                <NavLink to="/admin/groups" className="side-menu">
                  <div className="side-menu__icon"><User className="w-5 h-5 text-slate-500 text-white" /></div>
                  <div className="side-menu__title">Quản lý Tài Khoản Admin</div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/users" className="side-menu">
                  <div className="side-menu__icon"><User className="w-5 h-5 text-slate-500 text-white" /></div>
                  <div className="side-menu__title">Quản lý Tài Khoản User</div>
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}