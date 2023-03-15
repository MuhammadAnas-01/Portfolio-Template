import Image from "next/image";
import React from "react";
import propertyImage from "@/assets/images/property.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import twitchImg from "@/assets/images/twitch.jpg";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[38vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[38vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          src={twitchImg}
          alt={"/"}
          className="absolute -z-100"
          layout="fill"
          objectFit="cover"
        />
        <div className=" pl-8 absolute top-[70%] maz-w-[1240px] w-full left-[50%] text-white z-10 reight-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">Twitch App</h2>
          <h3>React js / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            ullam vitae. Animi incidunt ipsum architecto magnam, amet numquam
            magni ab ut hic cupiditate accusamus accusantium labore error,
            eveniet ex suscipit.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4 ">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bol pb-2">Technologies</p>
            <div className="grid  grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-cenrter">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-cenrter">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-cenrter">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-cenrter">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-cenrter">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="unerline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
