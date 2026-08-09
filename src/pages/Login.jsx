import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar.jsx";
import Input from "../components/InputField/Input";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import googleImage from "../assets/logos_google-icon.png";

import "./Login.css";
function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Card
        title="Masuk ke Akun"
        subtitle="Yuk, lanjutin belajarmu di videobelajar."
      >
        <Input name="email" type="email" label="E-Mail" required />
        <Input name="password" type="password" label="Kata Sandi" required />
        <div className="forgot-password">
          <button type="button">Lupa Password?</button>
        </div>

        <div className="button-Container">
          <Button class="primary" onClick={() => navigate("/home")}>
            Masuk
          </Button>
          <Button class="secondary" onClick={() => navigate("/register")}>
            Daftar
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

export default Login;
