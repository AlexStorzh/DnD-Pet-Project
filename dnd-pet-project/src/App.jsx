import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ConstructorDashboard from "./pages/Constructor/ConstructorDashboard";
import RaceChosePage from "./pages/Constructor/RaceChosePage";
import ClassChosePage from "./pages/Constructor/ClassChosePage";
import AbilitiesChosePage from "./pages/Constructor/AbilitiesChosePage";
import DescriptionChosePage from "./pages/Constructor/DescriptionChosePage";
import Constructor from "./pages/Constructor/Constructor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/constructor/" element={<Constructor />}>
            <Route
              path="/constructor/dashboard"
              element={<ConstructorDashboard />}
            />
            <Route path="/constructor/race" element={<RaceChosePage />} />
            <Route path="/constructor/class" element={<ClassChosePage />} />
            <Route
              path="/constructor/abilities"
              element={<AbilitiesChosePage />}
            />
            <Route
              path="/constructor/description"
              element={<DescriptionChosePage />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
