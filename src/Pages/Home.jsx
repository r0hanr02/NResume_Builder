// eslint-disable-next-line no-unused-vars
import React from "react";
import { Footer, Header, HowItWorks, ResumeCarousel, Testimonials } from "../Component";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center ">
        <div className="w-[70%] h-[90vh] flex flex-col items-center justify-center">
          <h3 className=" text-center text-7xl my-20 font-bold">
          Create. Customize. Download – Your Perfect Resume Awaits
          </h3>
          <h5 className="w-10/12 text-3xl text-center font-bold">
            Choose from multiple templates, customize with ease, and export in
            PDF.
          </h5>
          <div className="m-5 ">
            <button className="px-5 py-5 text-xl bg-red-600 m-1 font-bold hover:bg-white hover:text-red-700 duration-150">
              <Link to="/login">Start Building Your Resume</Link>
            </button>
            <button className="px-5 py-5 text-xl bg-red-600 m-1 font-bold hover:bg-white hover:text-red-700 duration-150">
              Explore Templates
            </button>
          </div>
        </div>
        <ResumeCarousel />
      </div>
        <HowItWorks />
        <Testimonials/>
      <Footer/>
    </>
  );
};

export default Home;
