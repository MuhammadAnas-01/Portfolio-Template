import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LETS BUILD SOMETHING
          </p>
          <h1 className="py-4 text-gray-700">
            Hi,I am <span className="text-[#5651e5]">Anas</span>
          </h1>
          <h1 className="py-4 text-gray-700">
            A Front-End Web Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am font-end web developer specializing in building (and ocasionally
            designing) exceptional digital experiences. Currently, I am focused
            on building responsive front-wnd web applications while learning
            back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
