import logo from "../../assets/Logo (1).png";
import FooterMenu from "../FooterMenu/FooterMenu";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="company-info">
        <div className="company-detail">
          <img src={logo} alt="" className="company-logo" />
          <div className="company-footer-text">
            <p className="company-description">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>

            <p className="company-address">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p className="company-phone">+62-877-7123-1234</p>
          </div>
        </div>

        <FooterMenu />
      </div>
      <div className="line"></div>
      <div className="socialmedia">
        <div className="icon">
          <SocialMedia />
        </div>
        <div className="copyright">
          @2023 Gerobak Sayur All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
