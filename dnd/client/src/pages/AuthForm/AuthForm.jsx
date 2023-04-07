import React from "react";
import "./AuthForm.scss";
import LoginForm from "./LoginForm/LoginForm";
import PictureSlider from "./PictureSlider/PictureSlider";

const AuthForm = () => {
  return (
    <div className="body">
      <PictureSlider />
      <LoginForm />
    </div>
  );
};

export default AuthForm;
