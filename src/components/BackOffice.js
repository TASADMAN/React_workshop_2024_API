import Navbaar from './Navbar';
import SideBar from './Sidebar';
import Footer from './Footer';
import ControlSidebar from './ControlSidebar';

function BackOffice(props) {
    return <>
        <div className="wrapper">
            <Navbaar />
            <SideBar />
            <div className='content-wrapper p-2'>
                {props.children}
            </div>


            <Footer />
            <ControlSidebar />s
        </div>
    </>
}

export default BackOffice;