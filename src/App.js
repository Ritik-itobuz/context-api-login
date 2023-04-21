import React from "react";
import "./App.css";
import SignIn from "./pages/sign-in /SignIn";
import SignUp from "./pages/sign-up/SignUp";
import SetPassword from "./pages/set-password/SetPassword";
import ResetPassword from "./pages/reset-password/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/setPassword" element={<SetPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
