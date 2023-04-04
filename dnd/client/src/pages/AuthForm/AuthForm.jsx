import React from "react";
import "./AuthForm.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import PictureSlider from "../../components/PictureSlider/PictureSlider";

const AuthForm = () => {
  return (
    <div className="body">
      <PictureSlider />
      <LoginForm />
    </div>
  );
};

export default AuthForm;
