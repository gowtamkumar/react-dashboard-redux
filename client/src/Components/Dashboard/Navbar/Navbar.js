

import Logo from '../../../assets/profile.jpeg'
import DashBoardSidebar from "../Sidebar/Sidebar";
import { FaSlidersH } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DashBoardNavbar({ setToggleSidebar, toggleSidebar }) {
  return (
    <header>
      <nav>
        <div className="container-fluid d-flex justify-content-between" style={{ backgroundColor: "white" }}>
          <div className='d-flex justify-content-between align-items-center' style={{ width: "100%" }}>
            <FaSlidersH onClick={() => setToggleSidebar(!toggleSidebar)} style={{ fontSize: "20px", cursor: "pointer" }} className="desktop" />
            {/* ............................ */}
            <FaSlidersH className="mobile" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" style={{ fontSize: "20px", cursor: "pointer" }} />
            <div className={`offcanvas mobileSidebar`} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="mobileSidebar_body">
                <DashBoardSidebar />
              </div>
            </div>
            {/* ............................ */}

            <div className="dropdown">
              <button className="list-group-item-profile text-center align-items-center btn" id="dropdownUser1" data-bs-toggle="dropdown">
                <img src={Logo} alt="Next js Profile" width="30" height="30" className="rounded-circle" />
                {/* This img is profile image */}
              </button>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header dropdown-item">
                  <Link to="/profile">
                    <div className="p-2 mr-3 d-flex align-items-center nav-link">
                      <img src={Logo} alt="Next Profile" width="30" height="30" className="rounded-circle" />
                      <div className="mx-3">
                        <h6>Jane doe</h6>
                        <i className="fs-bold">Admin</i>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className="dropdown-item" to='/profile'>
                    <div className="nav-link">My Profile</div>
                  </Link>
                </li>

                <li className="dropdown-item">
                  <Link className="dropdown-item " to='/profile'>
                    <div className="nav-link">Account Settings</div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-item">
                  <Link to="/login">
                    <div className="nav-link">LogOut</div>
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

// DashBoardNavbar.PageLayOut = IndexLayout
