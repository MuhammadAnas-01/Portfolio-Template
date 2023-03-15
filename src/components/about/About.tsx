import Image from "next/image";
import React from "react";
import Me from "@/assets/images/Me.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora in
            culpa officiis dignissimos totam corporis eveniet laudantium
            ratione, quasi, sit aperiam voluptate incidunt repellendus
            perspiciatis magnam pariatur illum, eligendi inventore!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            recusandae modi minima eos, corrupti fugiat facere obcaecati dolore
            facilis ipsum consequatur magnam quod ipsam laboriosam velit
            voluptas. Iure, ad odit.
          </p>
          <p className="py-2 text-gray-600 underlined cursor-pointer">
            Check Out my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex item-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={Me} alt="/" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
