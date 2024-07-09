import axios from "axios";
import { useState,useEffect } from "react";
import Swal from "sweetalert2";
import config from "../config";
import { useNavigate } from "react-router-dom";


function  Sidebar ()  {

     const [user, setUser] = useState({});
     const navigator = useNavigate();

     useEffect(() =>  {
        fetchData();

     },[]);

     const fetchData = async () => {
        try{
            const res = await axios.get(config.apiPath + '/user/info', config.headers());
            if (res.data.result !==  undefined) {
                setUser(res.data.result);
            }
        }catch(e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon:'error'
            })
        }
     }

     const handleSingOut =  async () => {
        try {
                const button = await Swal.fire({
                    title:'ออกจากระบบ',
                    text:'ยืนยันการออกจากระบบ',
                    icon: 'question',
                    showCancelButton: true,
                    showConfirmButton: true
                })
                if(button.isConfirmed) {
                    localStorage.removeItem('token');
                    navigator('/');
                }
               
           } catch (e) {
            Swal.fire({
                title: 'error',
                text: e.message,
                icon:'error'
            })
           }
        }
     
    return <>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.9' }} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">{user.name}</a>
                        <button onClick={handleSingOut} className="btn btn-danger">
                            <i className="fa fa-times mr-2 ">Sign Out</i>
                        </button>
                    </div>
                </div>
                {/* SidebarSearch Form */}
                <div className="form-inline">   
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        l
                
                        <li className="nav-header">Menu</li>
                        <li className="nav-item">
                            <a href="/product" className="nav-link">
                                <i className="nav-icon fa fa-box" />
                                <p>
                                    สินค้า
                                    <span className="badge badge-info right">2</span>
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/gallery.html" className="nav-link">
                                <i className="nav-icon far fa-image" />
                                <p>
                                    Gallery
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/kanban.html" className="nav-link">
                                <i className="nav-icon fas fa-columns" />
                                <p>
                                    Kanban Board
                                </p>
                            </a>
                        </li>                      
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>

    </>

}

export default Sidebar;
