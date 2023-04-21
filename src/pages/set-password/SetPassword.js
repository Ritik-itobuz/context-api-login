import React from "react";
import banner from "../../assets/images/main-banner.svg";
import sideBanner from "../../assets/images/side-banner.svg";

const SetPassword = () => {
  return (
    <div>
      <img
        src={banner}
        className=" w-full sm:w-full sm:h-[140vh]  absolute sm:top-[-40%] sm:right-[12%] top-[-5%]"
        alt="banner"
      />
      <img
        src={sideBanner}
        className="absolute right-[1%] top-[-5%]  sm:w-[50rem] w-[13rem]"
        alt="banner"
      />
      <div className="absolute sm:top-[20%] top-[48%] ms-4 sm:ms-8 w-[86%] sm:w-[25rem] bg-[#ffff] p-5 sm:left-[35%] sm:shadow-[0_0_20px_0_rgba(0,0,0,0.15)]">
        <p className="text-2xl font-semibold">Set Profile Password</p>
        <p className="text-[#7F8490] mb-10">Please create a secure password</p>
        <p className="text-[#3F414F] my-3">Enter Email Id</p>
        <input
          className="border rounded p-2 w-full text-[#3F414F]"
          type="email"
        />
        <div className="flex justify-between my-3"></div>
        <button className="text-lg bg-[#25CA80] text-white px-20 p-3 rounded-3xl mt-5 mb-3 w-full">
          SEND EMAIL
        </button>
      </div>
    </div>
  );
};

export default SetPassword;
