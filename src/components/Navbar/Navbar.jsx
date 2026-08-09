import logo from "../../assets/Logo (1).png";
import Avatar from "../../assets/Avatar.png";
import hamburger from "../../assets/Hamberger.png";

import "./Navbar.css";

export default function Navbar({ showMenu = false }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Video Belajar Logo" className="logo" />
        {showMenu && (
          <div className="navbar-right">
            <ul className="nav-menu">
              <li>
                <a href="#">Kategori</a>
              </li>
              <li>
                <img src={Avatar} alt="Profile" className="profile" />
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
