import React from "react";
import banner from "../../assets/images/sign-up-banner.svg";
import { NavLink as Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <img
        src={banner}
        className="w-full  sm:w-full sm:h-[140vh] sm:rotate-[-35deg] sm:absolute sm:top-[-33%] sm:right-[12%]"
        alt="banner"
      />
      <div className="absolute sm:top-[30%] top-[28%] ms-5 sm:ms-0 w-[86%] sm:w-[40%] bg-[#ffff] p-5 sm:left-[32%] sm:shadow-[0_0_20px_0_rgba(0,0,0,0.15)] login-popup">
        <h3 className="text-2xl font-semibold">Let's Create Your Account</h3>
        <p className="text-[#7F8490] mb-5 sm:text-base text-xs">
          Sign up with your valid email address
        </p>
        <p className="text-[#3F414F] my-2">Email Id</p>
        <input
          className="border rounded p-2 w-full text-[#3F414F]"
          type="email"
        />
        <p className="text-[#3F414F] my-2">Phone Number</p>
        <input
          className="border rounded p-2 w-full text-[#3F414F]"
          type="number"
        />
        <p className="text-[#3F414F] my-2">Password</p>
        <input
          className="border rounded p-2 w-full text-[#3F414F]"
          type="password"
        />
        <p className="text-[#3F414F] my-2">Confirm Password</p>
        <input
          className="border rounded p-2 w-full text-[#3F414F]"
          type="password"
        />
        <div className="flex my-3">
          <input className="me-2 " type="checkbox" />
          <p className="text-[#5B5B5B] sm:text-base text-xs">
            I agree with the Terms & Conditions
          </p>
        </div>
        <Link to="/signIn">
        <button className="text-lg bg-[#25CA80] text-white px-20 p-3 rounded-3xl mt-5 mb-3 w-full">
          CONTINUE
        </button>
        </Link>
        <p className="text-center text-[#5B5B5B] mb-3 sm:text-base text-xs">
          Already have an account?{" "}
          <button className="text-[#EB722C]"> <Link  to="/signIn">
Signin </Link></button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
