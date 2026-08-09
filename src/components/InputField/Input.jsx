import "./input.css";
import { useState } from "react";
import eye from "../../assets/Vector.png";

function Input({ label, name, type = "text", ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  return (
    <div className="input-group">
      <label htmlFor={name}>
        {label}
        {props.required && <span className="required"> *</span>}
      </label>
      <div className={`input-wrapper ${isPassword ? "has-toggle" : ""}`}>
        <input
          id={name}
          name={name}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img src={eye} alt="Toggle Password" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;
