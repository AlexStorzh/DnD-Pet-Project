import React from "react";
import { useDispatch } from "react-redux";
import { registrationAuth } from "../../../store/Slices/authSlice.js";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import "./RegistrationForm.scss";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const onSubmit = (email, username, password) => {
    dispatch(registrationAuth(email, username, password));
    console.log(errors);
  };

  return (
    <div className="registration">
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <motion.input
          whileFocus={{ scale: 1.1, backgroundColor: "#372f2d" }}
          className={errors?.email && "error-input"}
          {...register("email", {
            required: "Email is required.",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email." },
          })}
          placeholder="Email"
        />
        <div>
          {errors?.email && (
            <span className="error">{errors?.email?.message}</span>
          )}{" "}
        </div>
        <motion.input
          className={errors?.username && "error-input"}
          whileFocus={{ scale: 1.1, backgroundColor: "#372f2d" }}
          {...register("username", {
            required: "Invalid username.",
          })}
          placeholder="Username"
        />
        <div>
          {errors?.username && (
            <span className="error">{errors?.username?.message}</span>
          )}{" "}
        </div>
        <motion.input
          className={errors?.password && "error-input"}
          whileFocus={{ scale: 1.1, backgroundColor: "#372f2d" }}
          type="password"
          {...register("password", {
            required: "Invalid password.",
            minLength: { value: 5, message: "Password minimum length 5." },
          })}
          placeholder="Password"
        />
        <div>
          {errors?.password && (
            <span className="error">{errors?.password?.message}</span>
          )}{" "}
        </div>
        <button onClick={() => onSubmit()} className="button">
          <span>Sign Up </span>
        </button>
      </form>
      <div className="registration">
        Already have an account ? <a href="/">Log In</a>
      </div>
    </div>
  );
};

export default RegistrationForm;
