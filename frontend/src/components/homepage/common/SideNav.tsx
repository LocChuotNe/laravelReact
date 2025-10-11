import React from 'react';

interface SideNavProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function SideNav({ activeMenu, setActiveMenu }: SideNavProps) {
  
  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, menuName: string) => {
    e.preventDefault();
    setActiveMenu(menuName);
    // Optional: Update URL without reload
    window.history.pushState({}, '', `/dashboard?tab=${menuName}`);
  };

  return (
    <>
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
          <a href="#" className="side-menu side-menu--active">
            <div className="side-menu__icon">
              <i data-lucide="home"></i>
            </div>
            <div className="side-menu__title">
              Quản Lý User
              <div className="side-menu__sub-icon transform rotate-180">
                <i data-lucide="chevron-down"></i>
              </div>
            </div>
          </a>

          <ul className="side-menu__sub-open">
            <li>
              <a
                href="#"
                onClick={(e) => handleMenuClick(e, "user-group")}
                className={`side-menu ${activeMenu === "user-group" ? "side-menu--active" : ""}`}
              >
                <div className="side-menu__icon">
                  <i data-lucide="activity"></i>
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
                  <i data-lucide="activity"></i>
                </div>
                <div className="side-menu__title"> Quản Lý User </div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}