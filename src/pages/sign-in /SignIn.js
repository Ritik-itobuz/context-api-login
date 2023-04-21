import React from "react";
import banner from "../../assets/images/banner.svg";
import { NavLink as Link } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";

import AuthContext from "../../context/AuthProvider";

const SignIn = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMSg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMSg("");
  }, [email, password]);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      })
        .then((response) => {
          return response.json();
        })
        .catch((error) => {
          console.log(error);
        });
      if (!response.error) {
        console.log(response);
      } else {
        console.log(response.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Logged In</h1>
        </section>
      ) : (
        <div>
          <img
            src={banner}
            className=" w-full sm:w-full sm:h-[140vh] sm:rotate-[-35deg] sm:absolute sm:top-[-40%] sm:right-[12%]"
            alt="banner"
          />
          <div className="absolute sm:top-[40%] top-[48%] ms-4 sm:ms-8 w-[86%] sm:w-[25rem] bg-[#ffff] p-5 sm:left-[35%] sm:shadow-[0_0_20px_0_rgba(0,0,0,0.15)] login-popup">
            <p className="text-2xl font-semibold">Welcome Back !</p>
            <p className="text-[#7F8490] mb-5">Please enter your details</p>
            <p className="text-[#3F414F] my-2">Email Id</p>
            <input
              className="border rounded p-2 w-full text-[#3F414F]"
              type="email"
              id="userEmail"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <p className="text-[#3F414F] my-2">Password</p>
            <div className="border rounded  w-full flex justify-between items-center">
              <input
                className=" text-[#3F414F] p-2 outline-0"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <i className="fas fa-light fa-eye p-2"></i>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex">
                <input type="checkbox" className="me-1 sm:me-2" />
                <p className="sm:text-base text-xs">Remember me</p>
              </div>
              <Link to="/setPassword">
                <p className="text-[#EB722C] sm:text-base text-xs">
                  Forgot Password?
                </p>
              </Link>
            </div>
            <button
              className="text-lg bg-[#25CA80] text-white px-20 p-3 rounded-3xl mt-5 mb-3 w-full"
              onClick={handleClick}
            >
              SIGN IN
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
