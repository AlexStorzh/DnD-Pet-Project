import React, { useState } from "react";
import "./LoginForm.scss";
import { useDispatch } from "react-redux";
import { loginAuth, registrationAuth } from "../../../store/Slices/authSlice";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="login-body">
      <div className="login-form">
        <div className="login-text">
          <div className="login-text-header">about</div>
          <p className="login-text-body">
            DnD Creator is a website that makes it easy to create and customize
            characters for Dungeons and Dragons, with a wealth of tools and
            resources.
          </p>
        </div>
        <div className="login-inputs">
          <input
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email"
          />

          <input
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="buttons">
          <button
            onClick={() => dispatch(loginAuth({ email, password }))}
            className="button"
          >
            <span>Login In </span>
          </button>
          <button
            onClick={() => dispatch(registrationAuth({ email, password }))}
            className="button"
          >
            <span>Sign Up </span>
          </button>
        </div>
      </div>
      {/* <div className="login-slider">slider</div> */}
    </div>
  );
};

export default LoginForm;
