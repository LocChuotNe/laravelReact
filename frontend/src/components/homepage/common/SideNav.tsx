export default function SideNav() {
    return (   
        <nav className="side-nav">
            <a href="" className="intro-x flex items-center pl-5 pt-4">
                <img alt="Midone - HTML Admin Template" className="w-6" src="src/assets/css/dist/images/logo.svg"/>
                <span className="hidden xl:block text-white text-lg ml-3"> Rubick </span> 
            </a>
            <div className="side-nav__devider my-6"></div>
            <ul>
                <li>
                    <a href="" className="side-menu side-menu--active">
                        <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                        <div className="side-menu__title">
                            Quản Lý User 
                            <div className="side-menu__sub-icon transform rotate-180"><i data-lucide="chevron-down"></i> </div>
                        </div>
                    </a>
                    <ul className="side-menu__sub-open">
                        <li>
                            <a href="index.html" className="side-menu side-menu--active">
                                <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                <div className="side-menu__title"> Quản Lý Nhóm User</div>
                            </a>
                        </li>
                        <li>
                            <a href="${APP_URL}/dashboard/user" className="side-menu">
                                <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                <div className="side-menu__title"> Quản Lý User </div>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}