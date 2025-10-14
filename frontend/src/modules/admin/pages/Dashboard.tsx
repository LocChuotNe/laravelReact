export default function Dashboard() {
  return (
    <div className="flex mt-[4.7rem] md:mt-0">
        <nav className="side-nav">
            <a href="" className="intro-x flex items-center pl-5 pt-4">
                <img alt="Midone - HTML Admin Template" className="w-6" src="dist/images/logo.svg"/>
                <span className="hidden xl:block text-white text-lg ml-3"> Rubick </span> 
            </a>
            <div className="side-nav__devider my-6"></div>
            <ul>
                <li>
                    <a href="javascript:;.html" className="side-menu side-menu--active">
                        <div className="side-menu__icon"> <i data-lucide="shopping-bag"></i> </div>
                        <div className="side-menu__title">
                            E-Commerce 
                            <div className="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>
                        </div>
                    </a>
                    <ul className="side-menu__sub-open">
                        <li>
                            <a href="javascript:;.html" className="side-menu side-menu--active">
                                <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                <div className="side-menu__title">
                                    Products 
                                    <div className="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>
                                </div>
                            </a>
                            <ul className="side-menu__sub-open">
                                <li>
                                    <a href="side-menu-light-product-list.html" className="side-menu side-menu--active">
                                        <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div className="side-menu__title">Product List</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-light-product-grid.html" className="side-menu">
                                        <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                        <div className="side-menu__title">Product Grid</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div className="content">
            <div className="top-bar">
                <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Application</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
                <div className="intro-x relative mr-3 sm:mr-6">
                    <div className="search hidden sm:block">
                        <input type="text" className="search__input form-control border-transparent" placeholder="Search..."/>
                        <i data-lucide="search" className="search__icon dark:text-slate-500"></i> 
                    </div>
                    <a className="notification sm:hidden" href=""> <i data-lucide="search" className="notification__icon dark:text-slate-500"></i> </a>
                    <div className="search-result">
                        <div className="search-result__content">
                            <div className="search-result__content__title">Pages</div>
                            <div className="mb-5">
                                <a href="" className="flex items-center">
                                    <div className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-lucide="inbox"></i> </div>
                                    <div className="ml-3">Mail Settings</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-lucide="users"></i> </div>
                                    <div className="ml-3">Users & Permissions</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-lucide="credit-card"></i> </div>
                                    <div className="ml-3">Transactions Report</div>
                                </a>
                            </div>
                            <div className="search-result__content__title">Users</div>
                            <div className="mb-5">
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-13.jpg"/>
                                    </div>
                                    <div className="ml-3">Kevin Spacey</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">kevinspacey@left4code.com</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-11.jpg"/>
                                    </div>
                                    <div className="ml-3">Denzel Washington</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">denzelwashington@left4code.com</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-15.jpg"/>
                                    </div>
                                    <div className="ml-3">Christian Bale</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">christianbale@left4code.com</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg"/>
                                    </div>
                                    <div className="ml-3">Tom Cruise</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">tomcruise@left4code.com</div>
                                </a>
                            </div>
                            <div className="search-result__content__title">Products</div>
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/preview-13.jpg"/>
                                </div>
                                <div className="ml-3">Apple MacBook Pro 13</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">PC &amp; Laptop</div>
                            </a>
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/preview-1.jpg"/>
                                </div>
                                <div className="ml-3">Sony A7 III</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Photography</div>
                            </a>
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/preview-1.jpg"/>
                                </div>
                                <div className="ml-3">Nike Air Max 270</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Sport &amp; Outdoor</div>
                            </a>
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/preview-8.jpg"/>
                                </div>
                                <div className="ml-3">Sony A7 III</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Photography</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="intro-x dropdown mr-auto sm:mr-6">
                    <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="bell" className="notification__icon dark:text-slate-500"></i> </div>
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
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-11.jpg"/>
                                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <a href="javascript:;" className="font-medium truncate mr-5">Denzel Washington</a> 
                                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">05:09 AM</div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 20</div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-15.jpg"/>
                                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <a href="javascript:;" className="font-medium truncate mr-5">Christian Bale</a> 
                                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg"/>
                                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <a href="javascript:;" className="font-medium truncate mr-5">Tom Cruise</a> 
                                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">05:09 AM</div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 20</div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-14.jpg"/>
                                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <a href="javascript:;" className="font-medium truncate mr-5">Al Pacino</a> 
                                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-x dropdown w-8 h-8">
                    <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in" role="button" aria-expanded="false" data-tw-toggle="dropdown">
                        <img alt="Midone - HTML Admin Template" src="dist/images/profile-3.jpg"/>
                    </div>
                    <div className="dropdown-menu w-56">
                        <ul className="dropdown-content bg-primary text-white">
                            <li className="p-2">
                                <div className="font-medium">Kevin Spacey</div>
                                <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">Backend Engineer</div>
                            </li>
                            <li>
                                <hr className="dropdown-divider border-white/[0.08]"/>
                            </li>
                            <li>
                                <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="user" className="w-4 h-4 mr-2"></i> Profile </a>
                            </li>
                            <li>
                                <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="edit" className="w-4 h-4 mr-2"></i> Add Account </a>
                            </li>
                            <li>
                                <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="lock" className="w-4 h-4 mr-2"></i> Reset Password </a>
                            </li>
                            <li>
                                <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="help-circle" className="w-4 h-4 mr-2"></i> Help </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider border-white/[0.08]"/>
                            </li>
                            <li>
                                <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="toggle-right" className="w-4 h-4 mr-2"></i> Logout </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h2 className="intro-y text-lg font-medium mt-10">
                Product List
            </h2>
            <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                    <button className="btn btn-primary shadow-md mr-2">Add New Product</button>
                    <div className="dropdown">
                        <button className="dropdown-toggle btn px-2 box" aria-expanded="false" data-tw-toggle="dropdown">
                            <span className="w-5 h-5 flex items-center justify-center"> <i className="w-4 h-4" data-lucide="plus"></i> </span>
                        </button>
                        <div className="dropdown-menu w-40">
                            <ul className="dropdown-content">
                                <li>
                                    <a href="" className="dropdown-item"> <i data-lucide="printer" className="w-4 h-4 mr-2"></i> Print </a>
                                </li>
                                <li>
                                    <a href="" className="dropdown-item"> <i data-lucide="file-text" className="w-4 h-4 mr-2"></i> Export to Excel </a>
                                </li>
                                <li>
                                    <a href="" className="dropdown-item"> <i data-lucide="file-text" className="w-4 h-4 mr-2"></i> Export to PDF </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden md:block mx-auto text-slate-500">Showing 1 to 10 of 150 entries</div>
                    <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                        <div className="w-56 relative text-slate-500">
                            <input type="text" className="form-control w-56 box pr-10" placeholder="Search..."/>
                            <i className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i> 
                        </div>
                    </div>
                </div>
                <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
                    <table className="table table-report -mt-2">
                        <thead>
                            <tr>
                                <th className="whitespace-nowrap">IMAGES</th>
                                <th className="whitespace-nowrap">PRODUCT NAME</th>
                                <th className="text-center whitespace-nowrap">STOCK</th>
                                <th className="text-center whitespace-nowrap">PRICE</th>
                                <th className="text-center whitespace-nowrap">STATUS</th>
                                <th className="text-center whitespace-nowrap">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="intro-x">
                                <td className="w-40">
                                    <div className="flex">
                                        <div className="w-10 h-10 image-fit zoom-in">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-15.jpg" title="Uploaded at 5 April 2022"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-9.jpg" title="Uploaded at 5 April 2022"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-10.jpg" title="Uploaded at 5 April 2022"/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a href="" className="font-medium whitespace-nowrap">Nike Tanjun</a> 
                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Sport &amp; Outdoor</div>
                                </td>
                                <td className="text-center">50</td>
                                <td className="text-center">$46</td>
                                <td className="w-40">
                                    <div className="flex items-center justify-center text-danger"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Inactive </div>
                                </td>
                                <td className="table-report__action w-56">
                                    <div className="flex justify-center items-center">
                                        <a className="flex items-center mr-3" href="javascript:;"> <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit </a>
                                        <a className="flex items-center text-danger" href="javascript:;" data-tw-toggle="modal" data-tw-target="#delete-confirmation-modal"> <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                    <nav className="w-full sm:w-auto sm:mr-auto">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-left"></i> </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-left"></i> </a>
                            </li>
                            <li className="page-item"> <a className="page-link" href="#">...</a> </li>
                            <li className="page-item"> <a className="page-link" href="#">1</a> </li>
                            <li className="page-item active"> <a className="page-link" href="#">2</a> </li>
                            <li className="page-item"> <a className="page-link" href="#">3</a> </li>
                            <li className="page-item"> <a className="page-link" href="#">...</a> </li>
                            <li className="page-item">
                                <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-right"></i> </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-right"></i> </a>
                            </li>
                        </ul>
                    </nav>
                    <select className="w-20 form-select box mt-3 sm:mt-0">
                        <option>10</option>
                        <option>25</option>
                        <option>35</option>
                        <option>50</option>
                    </select>
                </div>
            </div>
            <div id="delete-confirmation-modal" className="modal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <div className="p-5 text-center">
                                <i data-lucide="x-circle" className="w-16 h-16 text-danger mx-auto mt-3"></i> 
                                <div className="text-3xl mt-5">Are you sure?</div>
                                <div className="text-slate-500 mt-2">
                                    Do you really want to delete these records? 
                                    <br/>
                                    This process cannot be undone.
                                </div>
                            </div>
                            <div className="px-5 pb-8 text-center">
                                <button type="button" data-tw-dismiss="modal" className="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                                <button type="button" className="btn btn-danger w-24">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}