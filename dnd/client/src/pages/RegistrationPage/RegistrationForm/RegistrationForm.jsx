import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registrationAuth } from "../../../store/Slices/authSlice.js";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import "./RegistrationForm.scss";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const emailServerError = useSelector((state) => state.auth.error);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const onSubmit = (email, username, password) => {
    dispatch(registrationAuth(email, username, password));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="registration"
      >
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

          <motion.input
            className={errors?.username && "error-input"}
            whileFocus={{ scale: 1.1, backgroundColor: "#372f2d" }}
            {...register("username", {
              required: "Username is required.",
            })}
            placeholder="Username"
          />
          <AnimatePresence>
            {errors?.username && (
              <motion.div
                className="error"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                style={{ overflow: "hidden" }}
                transition={{ duration: 0.2 }}
              >
                <div className="error-text">{errors?.username?.message}</div>
              </motion.div>
            )}
          </AnimatePresence>
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
          <AnimatePresence>
            {errors?.password && (
              <motion.div
                className="error"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                style={{ overflow: "hidden" }}
                transition={{ duration: 0.2 }}
              >
                <div className="error-text">{errors?.password?.message}</div>
              </motion.div>
            )}
          </AnimatePresence>

          <button onClick={() => onSubmit()} className="button">
            <span>Sign Up </span>
          </button>
        </form>
        <div className="registration">
          Already have an account ? <a href="/">Log In</a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RegistrationForm;
