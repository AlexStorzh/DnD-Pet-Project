import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/Slices/authSlice";

import LoginPage from "./pages/AuthForm/LoginPage/LoginPage";
import RegistrationPage from "./pages/AuthForm/RegistrationPage/RegistrationPage";
import CharacterCreatorPage from "./pages/CharacterCreatorPage/CharacterCreatorPage";
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
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </div>
    );
  }

  //ЗАГУЛШКА ЛОГИНА
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<CharacterCreatorPage />} />/
      </Routes>
    </div>
  );
}

export default App;
