import SideNav from '../common/SideNav';
import User from '../../user/User';

export default function Index() {

    return (
        <div className="flex mt-[4.7rem] md:mt-0">
            <nav className="side-nav">
                <SideNav/>
            </nav>
            <div className="content">
                <div className="top-bar">
                    <h1>đây là hiển thị header topbar</h1>
                </div>
                <User />
            </div>
        </div>
    );
}