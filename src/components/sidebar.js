
import '../static/sb-admin-2.min.css';
import '../static/vendor/fontawesome-free/css/all.min.css';
import '../static/styles.css';

import {Link} from 'react-router-dom';


function Sidebar() {

    return (

        <>

            {/* <!-- Sidebar --> */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-text mx-3">Admin Dashboard</div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item">
                        <Link className="nav-link" to="/dashboard"><i className="fas fa-fw fa-chart-area"></i>Dashboard</Link>
                </li>
                {/* <!-- Nav Item - Admin --> */}
                <li className="nav-item">
                        <Link className="nav-link" to="/users"><i className="fas fa-fw fa-table"></i>Users</Link>
                </li>

                <li className="nav-item">
                        <Link className="nav-link" to="/add-user"><i className="fas fa-fw fa-table"></i>Add user</Link>
                </li>
            </ul>
        </>
    );
  }

  export default Sidebar;