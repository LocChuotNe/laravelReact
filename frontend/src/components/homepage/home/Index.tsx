import { useState, useEffect } from "react";
import SideNav from "../common/SideNav";
import User from "../../user/User";

export default function Index() {
  const [activeMenu, setActiveMenu] = useState<string>("dashboard");

  // Đọc URL params khi component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab) {
      setActiveMenu(tab);
    }
  }, []);

  // Sync state với URL khi user dùng back/forward button
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get('tab') || 'dashboard';
      setActiveMenu(tab);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Function để lấy title động
  const getPageTitle = (): string => {
    switch(activeMenu) {
      case 'users': 
        return 'Quản lý người dùng';
      case 'user-group': 
        return 'Quản lý nhóm người dùng';
      default: 
        return 'Dashboard';
    }
  };

  return (
    <div className="flex mt-[4.7rem] md:mt-0">
      {/* Sidebar */}
      <nav className="side-nav">
        <SideNav activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </nav>

      {/* Main content */}
      <div className="content flex-1 bg-gray-50 min-h-screen">
        {/* Header top bar */}
        <div className="top-bar flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-800">
            {getPageTitle()}
          </h1>
        </div>

        {/* Nội dung chính */}
        <div className="p-6">
          {activeMenu === "dashboard" && (
            <div className="text-slate-600 text-center py-10">
              <h2 className="text-2xl font-semibold mb-2">
                Chào mừng bạn đến trang quản trị 🎉
              </h2>
              <p className="text-slate-500">
                Vui lòng chọn menu bên trái để bắt đầu thao tác.
              </p>
            </div>
          )}

          {activeMenu === "users" && <User />}

          {activeMenu === "user-group" && (
            <div className="text-slate-600 text-center py-10">
              <h2 className="text-2xl font-semibold mb-2">
                Quản lý nhóm người dùng
              </h2>
              <p className="text-slate-500">
                Tính năng đang được phát triển...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}