import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="mt-8 mb-12 md:mt-28 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 rounded-md relative">
        <Image
          className="rounded-md w-3/4"
          src={"/assets/images/about_us/person.jpg"}
          alt="worker"
          height={1080}
          width={1920}
        />
        <Image
          className="rounded-md w-2/5 border-8 border-white absolute right-32 -bottom-10"
          src={"/assets/images/about_us/parts.jpg"}
          alt="worker"
          height={1080}
          width={1920}
        />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-blue-500 font-semibold">About us</h3>
        <h2 className="mt-4 font-semibold text-4xl text-slate-800 w-full md:w-1/2">
          We are qualified & of experience in this field
        </h2>
        <p className="mt-4 font-thin text-slate-600">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <p className="mt-4 font-thin text-slate-600">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <button className="bg-blue-500 px-8 py-3 rounded-md text-white hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 capitalize mt-4">
              get more info
            </button>
      </div>
    </section>
  );
};

export default About;
