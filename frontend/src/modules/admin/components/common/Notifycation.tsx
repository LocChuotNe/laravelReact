import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { getAdminProfile } from "../../../../api/index";
import { toast } from "react-toastify";

export default function Notifycation() {
  const [user, setUser] = useState(null);

  const fetchUserInfo = async () => {
    try {
      console.log("Gọi API getAdminProfile...");
      const res = await getAdminProfile();
      console.log("Phản hồi từ API:", res);
      setUser(res); // nếu API trả về object người dùng trực tiếp
    } catch (error) {
      console.error("Lỗi khi gọi API:", error.response?.data || error.message);
      toast.error("Không thể tải thông tin người dùng");
    }
  };

  useEffect(() => {
    console.log("useEffect chạy");
    fetchUserInfo();
  }, []);

  return (
    <div className="intro-x dropdown mr-auto sm:mr-6">
      {user && (
        <div key={user.id}>
          <div
            className="dropdown-toggle notification notification--bullet cursor-pointer"
            role="button"
            aria-expanded="false"
            data-tw-toggle="dropdown"
          >
            <Bell className="notification__icon dark:text-slate-500" />
          </div>
          <div className="notification-content pt-2 dropdown-menu">
            <div className="notification-content__box dropdown-content">
              <div className="notification-content__title">Notifications</div>
              <div className="cursor-pointer relative flex items-center ">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    src={user.avatar_url || "dist/images/profile-13.jpg"}
                  />
                  <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                </div>
                <div className="ml-2 overflow-hidden">
                  <div className="flex items-center">
                    <a
                      href="javascript:;"
                      className="font-medium truncate mr-5"
                    >
                      {user.fullname}
                    </a>
                    <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                      01:10 PM
                    </div>
                  </div>
                  <div className="w-full truncate text-slate-500 mt-0.5">
                    Contrary to popular belief, Lorem Ipsum is not simply random text...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
