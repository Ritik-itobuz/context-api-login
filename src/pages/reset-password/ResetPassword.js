import React from "react";
import banner from "../../assets/images/banner.svg";

const ResetPassword = () => {
  return (
    <div>
      <img
        src={banner}
        className=" w-full sm:w-full sm:h-[140vh] sm:rotate-[-35deg] sm:absolute sm:top-[-40%] sm:right-[12%]"
        alt="banner"
      />
      <div className="absolute sm:top-[40%] top-[48%] ms-4 sm:ms-8 w-[86%] sm:w-[25rem] bg-[#ffff] p-5 sm:left-[35%] sm:shadow-[0_0_20px_0_rgba(0,0,0,0.15)]">
        <p className="sm:text-2xl font-semibold text-xl">Reset Your Password</p>
        <p className="text-[#7F8490] mb-5 sm:text-base text-xs">
          Enter new password and then repeat it
        </p>
        <p className="text-[#3F414F] my-2">New Password</p>
        <input
          className="border rounded p-2 w-full text-[#3F414F]"
          type="password"
        />
        <p className="text-[#3F414F] my-2">Confirm Password</p>
        <div className="border rounded  w-full flex justify-between items-center">
          <input className=" text-[#3F414F] p-2 outline-0" type="password" />
          <i className="fas fa-light fa-eye p-2"></i>
        </div>
        <button className="text-lg bg-[#25CA80] text-white px-20 p-3 rounded-3xl mt-5 mb-3 w-full">
          SAVE
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
