// eslint-disable-next-line no-unused-vars
import React from "react";
import { GrResume } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-white px-5 py-3 flex w-full items-center justify-between">
        <div className="">
          <h1 className="text-3xl font-extrabold hover:underline text-red-600">NResume</h1>
        </div>
        <div>
            <GrResume color="black" size={35}/>
        </div>
        <div className="flex gap-2">
          <div className="text-xl px-5 bg-red-600 py-2 rounded-full font-bold cursor-pointer hover:scale-110 mx-1 duration-200">
          <Link to="/signin">Sign In</Link>
          </div>
          <div className="text-xl px-5 bg-white py-2 rounded-full text-black font-bold cursor-pointer hover:scale-110 mx-1 duration-200">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
