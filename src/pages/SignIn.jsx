import Navbar from "../components/Navbar/Navbar.jsx";
import Input from "../components/InputField/Input";
import Card from "../components/Card/Card";
import indonesiaFlag from "../assets/Indonesia (ID).png";
import Button from "../components/Button/Button";
import googleImage from "../assets/logos_google-icon.png";
import { useNavigate } from "react-router-dom";

import "./SignIn.css";

function SignIn() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Card
        title="Masuk ke Akun"
        subtitle="Yuk, lanjutin belajarmu di videobelajar."
      >
        <Input label="Nama Lengkap" name="namaLengkap" required />
        <Input label="E-Mail" name="email" type="email" required />

        <div className="select-container">
          <label htmlFor="gender">
            Jenis Kelamin <span className="required">*</span>
          </label>
          <select name="gender" id="gender" required>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div className="phone-group">
          <label htmlFor="phone">
            No. Hp <span className="required">*</span>
          </label>

          <div className="phone-wrapper">
            <div className="country-code">
              <button type="button" className="flag-button">
                <img src={indonesiaFlag} alt="Indonesia" className="flag" />
              </button>

              <select>
                <option>+62</option>
              </select>
            </div>

            <input type="tel" id="phone" placeholder="" />
          </div>
        </div>

        <Input label="Kata Sandi" name="password" type="password" required />
        <Input
          label="Konfirmasi Kata Sandi"
          name="confirm-password"
          type="password"
          required
        />
        <div className="forgot-password">
          <button type="button">Lupa Password?</button>
        </div>

        <div className="button-Container">
          <Button class="primary" onClick={() => navigate("/home")}>
            Daftar
          </Button>
          <Button class="secondary" onClick={() => navigate("/")}>
            Masuk
          </Button>
          <div className="divider">
            <span>atau</span>
          </div>
          <Button class="Google">
            <img src={googleImage} alt="Google" /> Masuk dengan Google
          </Button>
        </div>
      </Card>
    </>
  );
}

export default SignIn;
