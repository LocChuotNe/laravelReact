import { Bell } from "lucide-react";

export default function Notifycation() {
    
    return (
        <div className="intro-x dropdown mr-auto sm:mr-6">
            <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button" aria-expanded="false" data-tw-toggle="dropdown"> <Bell className="notification__icon dark:text-slate-500" /> </div>
            <div className="notification-content pt-2 dropdown-menu">
                <div className="notification-content__box dropdown-content">
                    <div className="notification-content__title">Notifications</div>
                    <div className="cursor-pointer relative flex items-center ">
                        <div className="w-12 h-12 flex-none image-fit mr-1">
                            <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-13.jpg"/>
                            <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                            <div className="flex items-center">
                                <a href="javascript:;" className="font-medium truncate mr-5">Kevin Spacey</a> 
                                <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                            </div>
                            <div className="w-full truncate text-slate-500 mt-0.5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 20</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}