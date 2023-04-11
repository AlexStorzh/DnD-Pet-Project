import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "./LoginForm.scss";
import { loginAuth } from "../../../../store/Slices/authSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginServerError = useSelector((state) => state.auth.error);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const onSubmit = async (email, password) => {
    await dispatch(loginAuth(email, password));
    await navigate("/home");
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="login"
      >
        <div className="login-body">
          <div className="login-text">
            <div className="login-text-header">about</div>
            <p className="login-text-body">
              DnD Creator is a website that makes it easy to create and
              customize characters for Dungeons and Dragons, with a wealth of
              tools and resources.
            </p>
          </div>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <motion.input
              whileFocus={{ scale: 1.1, backgroundColor: "#372f2d" }}
              className={errors?.email && "error-input"}
              {...register("email", {
                required: "Email is required.",
              })}
              placeholder="Email"
            />

            <motion.input
              type="password"
              whileFocus={{ scale: 1.1, backgroundColor: "#372f2d" }}
              className={errors?.password && "error-input"}
              {...register("password", {
                required: "true",
              })}
              placeholder="Password"
            />
            <AnimatePresence>
              {(errors?.email || errors?.password || loginServerError) && (
                <motion.div
                  className="error"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  style={{ overflow: "hidden" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="error-text">
                    Email or password is not correct.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <button onClick={() => onSubmit()} className="button">
              <span>Log In </span>
            </button>
          </form>
        </div>

        <div className="registration">
          Not registered yet ? <a href="/registration">Sign Up</a>
        </div>

        {/* ADD SLIDER WITH FACTS */}
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginForm;
