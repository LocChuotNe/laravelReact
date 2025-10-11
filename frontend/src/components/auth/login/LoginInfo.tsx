export default function RegisterInfo() {
    return (
        <div className="hidden xl:flex flex-col min-h-screen">
            <a href="#" className="-intro-x flex items-center pt-5" onClick={(e) => e.preventDefault()}>
                <img alt="Midone - HTML Admin Template" className="w-6" src="src/assets/css/dist/images/logo.svg"/>
                <span className="text-white text-lg ml-3"> Rubick </span> 
            </a>
            <div className="my-auto">
                <img alt="Midone - HTML Admin Template" className="-intro-x w-1/2 -mt-16" src="src/assets/css/dist/images/illustration.svg"/>
                <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                    A few more clicks to 
                    <br/>
                    sign up to your account.
                </div>
                <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
                    Manage all your e-commerce accounts in one place
                </div>
            </div>
        </div>
    );
}