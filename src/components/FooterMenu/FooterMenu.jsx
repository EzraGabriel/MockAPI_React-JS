import "./FooterMenu.css";
import { footerMenus } from "../../data/footerMenus";
import arrowRight from "../../assets/Arrow.png";
import { useState } from "react";

function FooterMenu() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (id) => {
    if (openMenu === id) {
      setOpenMenu(null);
    } else {
      setOpenMenu(id);
    }
  };

  return (
    <div className="footer-menu">
      {footerMenus.map((menu) => (
        <div key={menu.id} className="footer-column">
          <button
            className="footer-menu-mobile"
            type="button"
            onClick={() => handleToggle(menu.id)}
          >
            <span>{menu.title}</span>
            <img
              src={arrowRight}
              alt=""
              className={openMenu === menu.id ? "rotate" : ""}
            />
          </button>
          {openMenu === menu.id && (
            <ul className="footer-submenu">
              {menu.items.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          )}
          <div className="footer-menu-desktop">
            <h4>{menu.title}</h4>

            <ul>
              {menu.items.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FooterMenu;
