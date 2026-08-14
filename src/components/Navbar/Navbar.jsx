import logo from "../../assets/Logo (1).png";
import Avatar from "../../assets/Avatar.png";
import hamburger from "../../assets/Hamberger.png";

import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ showMenu = false }) {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/home" className="logo-wrapper">
          <img src={logo} alt="Video Belajar Logo" className="logo" />
        </a>
        {showMenu && (
          <div className="navbar-right">
            <ul className="nav-menu">
              <li>
                <a href="#">Kategori</a>
              </li>
              <li className="profile-wrapper">
                <button
                  className="profile-button"
                  onClick={() => setOpenProfile(!openProfile)}
                  type="button"
                >
                  <img src={Avatar} alt="Profile" className="profile" />
                </button>
                {openProfile && (
                  <div className="profile-dropdown">
                    <a href="#">Profile</a>
                    <a href="#">Kelas Saya</a>
                    <a href="/addcourse">Tambah Kelas</a>
                    <a href="/editcourse">Edit Kelas</a>
                    <a href="#">Logout</a>
                  </div>
                )}
              </li>
            </ul>
            <button className="hamburger" type="button">
              <img src={hamburger} alt="Menu" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
