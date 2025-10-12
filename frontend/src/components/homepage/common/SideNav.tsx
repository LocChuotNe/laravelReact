import React, { useState } from 'react';
import { User, Activity, ChevronDown } from "lucide-react";

interface SideNavProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function SideNav({ activeMenu, setActiveMenu }: SideNavProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(true);
  
  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, menuName: string) => {
    e.preventDefault();
    setActiveMenu(menuName);
    window.history.pushState({}, '', `/dashboard?tab=${menuName}`);
  };

  const toggleUserMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <>
      <style>{`
        .submenu-container {
          overflow: hidden;
          transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }
        .submenu-open {
          max-height: 500px;
          opacity: 1;
        }
        .submenu-closed {
          max-height: 0;
          opacity: 0;
        }
      `}</style>
      
      <a 
        href="#" 
        className="intro-x flex items-center pl-5 pt-4"
        onClick={(e) => {
          e.preventDefault();
          setActiveMenu('dashboard');
        }}
      >
        <img 
          alt="Logo" 
          className="w-6" 
          src="src/assets/css/dist/images/logo.svg" 
        />
        <span className="hidden xl:block text-white text-lg ml-3"> Rubick </span>
      </a>

      <div className="side-nav__devider my-6"></div>

      <ul>
        <li>
          <a 
            href="#" 
            className={`side-menu ${isUserMenuOpen ? 'side-menu--active side-menu--open' : 'side-menu--active'}`}
            onClick={toggleUserMenu}
          >
            <div className="side-menu__icon">
              <User className="w-6 h-6 mr-2" />
            </div>
            <div className="side-menu__title">
              Quản Lý User
              <div className={`side-menu__sub-icon transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-6 h-6 mr-2" />
              </div>
            </div>
          </a>

          <div className={`submenu-container ${isUserMenuOpen ? 'submenu-open' : 'submenu-closed'}`}>
            <ul className="side-menu__sub-open">
              <li>
                <a
                  href="#"
                  onClick={(e) => handleMenuClick(e, "user-group")}
                  className={`side-menu ${activeMenu === "user-group" ? "side-menu--active" : ""}`}
                >
                  <div className="side-menu__icon">
                    <Activity className="w-6 h-6 mr-2" />
                  </div>
                  <div className="side-menu__title"> Quản Lý Nhóm User</div>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={(e) => handleMenuClick(e, "users")}
                  className={`side-menu ${activeMenu === "users" ? "side-menu--active" : ""}`}
                >
                  <div className="side-menu__icon">
                    <Activity className="w-6 h-6 mr-2" />
                  </div>
                  <div className="side-menu__title"> Quản Lý User </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
}