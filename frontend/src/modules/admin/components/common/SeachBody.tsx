import { Search } from "lucide-react";
import { useState } from "react";

export default function SeachBody({data}) {

    return (
        <div className="intro-x relative mr-3 sm:mr-6">
            <div className="search hidden sm:block">
                <input type="text" className="search__input form-control border-transparent" placeholder="Search..."/>
                <Search className="search__icon dark:text-slate-500" /> 
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
    );
}