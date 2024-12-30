import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-8 md:p-16 bg-zinc-900 flex flex-row justify-evenly">
      {/* logo section */}
      <div className="flex flex-col space-y-3 w-1/4">
        <Image src={"/assets/logo.svg"} alt="logo" width={100} height={120} />
        <p className="font-thin text-white">
          Edwin Diaz is a software and web technologies engineer, a life coach
          trainer who is also a serial .
        </p>
        <div className="flex flex-row space-x-2 text-white">
          <p className="p-2 rounded-full bg-slate-500 hover:text-green-500 cursor-pointer">
            <FaGoogle />
          </p>
          <p className="p-2 rounded-full bg-slate-500 hover:text-blue-500 cursor-pointer">
            <FaTwitter />
          </p>
          <p className="p-2 rounded-full bg-slate-500 hover:text-rose-500 cursor-pointer">
            <FaInstagram />
          </p>
          <p className="p-2 rounded-full bg-slate-500 hover:text-blue-400 cursor-pointer">
            <FaLinkedinIn />
          </p>
        </div>
      </div>
      {/* Items */}
      <div>
        <h2 className="text-xl font-semibold text-white">About</h2>
        <ul className="mt-14 space-y-4 text-white font-thin capitalize">
          <li>
            <Link href={"/"}>home</Link>
          </li>
          <li>
            <Link href={"/services"}>services</Link>
          </li>
          <li>
            <Link href={"/contact"}>contact</Link>
          </li>
        </ul>
      </div>
      {/* why car doctor */}
      <div>
        <h2 className="text-xl font-semibold text-white">Company</h2>
        <ul className="mt-14 space-y-4 text-white font-thin capitalize">
          <li>
            <Link href={"/"}>Why car doctor</Link>
          </li>
          <li>
            <Link href={"/about"}>about</Link>
          </li>
        </ul>
      </div>
      {/* Support */}
      <div>
        <h2 className="text-xl font-semibold text-white">Support</h2>
        <ul className="mt-14 space-y-4 text-white font-thin capitalize">
          <li>
            <Link href={"/"}>supportt center</Link>
          </li>
          <li>
            <Link href={"/services"}>feedback</Link>
          </li>
          <li>
            <Link href={"/contact"}>accessibility</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
