import React, { useState } from "react";
import "./LoginForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginAuth } from "../../../store/Slices/authSlice";
import InputAuth from "../../../components/inputs/InputAuth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
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
          <InputAuth
            value={email}
            method={setEmail}
            type={"text"}
            placeholder={"Email"}
          />

          <InputAuth
            value={password}
            method={setPassword}
            type={"password"}
            placeholder={"Password"}
          />
        </div>

        <button
          onClick={() => dispatch(loginAuth({ email, password }))}
          className="button"
        >
          <span>Login In </span>
        </button>

        <div className="registration">
          Not registered yet ? <a href="/1">Sign Up</a>
        </div>
      </div>
      {/* ADD SLIDER WITH FACTS */}
    </div>
  );
};

export default LoginForm;
