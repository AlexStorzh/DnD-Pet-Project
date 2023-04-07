import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth, logoutAuth } from "./store/Slices/authSlice";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  const store = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  //LOADER
  if (store.isLoading) {
    return (
      <div className="App">
        <h1 style={{ color: "white" }}>Loading...</h1>
      </div>
    );
  }

  if (!store.isAuth) {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/1" element={<RegistrationPage />} />
          <Route path="/registration" element={<LoginPage />} />
        </Routes>
      </div>
    );
  }

  //ЗАГУЛШКА ЛОГИНА
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ color: "white" }}>
          You are logged in with {store.user.email} with this username{" "}
          {store.user.username}
        </h1>
        <button onClick={() => dispatch(logoutAuth())}>LOGOUT </button>
      </div>
    </div>
  );
}

export default App;
