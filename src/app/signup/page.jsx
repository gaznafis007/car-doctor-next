'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const SignUp = () => {
  const [loading, setLoading] = useState(false)
  const handleSignUp = async (event) =>{
    event.preventDefault();
    setLoading(true)
    const form = event.target;
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value

    const user ={
      name,
      email,
      password
    }
    const res = await fetch('/api/signup',{
      method: 'POST',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    const data = await res.json();
    // console.log(data)
    setLoading(false)
    if(data?.acknowledged){
      form.reset()
    }
  }
  return (
    <section className="my-8 md:my-16 flex flex-col md:flex-row items-center md:justify-between space-x-3">
      <div className="w-full md:w-1/2">
        <Image
          alt="login-image"
          height={540}
          width={540}
          src={"/assets/images/login/login.svg"}
        />
      </div>
      <form onSubmit={handleSignUp} className="p-24 w-full md:w-1/2 shadow-sm border border-slate-200 rounded-md text-slate-800">
        <h2 className="text-2xl font-semibold text-center">Sign up!</h2>
        <div className="flex flex-col mt-6">
          <label className="font-semibold">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full rounded-md border border-slate-200 p-3 mt-2"
          />
        </div>
        <div className="flex flex-col mt-6">
          <label className="font-semibold">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Your email"
            className="w-full rounded-md border border-slate-200 p-3 mt-2"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="font-semibold">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Your password"
            className="w-full rounded-md border border-slate-200 p-3 mt-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 px-8 py-3 rounded-md text-white hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 capitalize block w-full mt-4"
        >
          {loading ? 'Loading...' : 'Sign up'}
        </button>
        <p className="mt-8 font-semibold text-center">Or Login in with</p>
        <div className="mt-4 md:mt-8 flex flex-row justify-center items-center space-x-8">
          <button className="p-3 rounded-full text-xl bg-slate-200 text-blue-500 cursor-pointer">
            <FaFacebookF />
          </button>
          <button className="p-3 rounded-full text-xl bg-slate-200 text-blue-300 cursor-pointer">
            <FaLinkedinIn />
          </button>
          <p className="p-3 rounded-full text-xl bg-slate-200 text-green-500 cursor-pointer">
            <FaGoogle />
          </p>
        </div>
        <p className="mt-12 font-semibold text-center">
          Have an account?{" "}
          <Link href={"/login"} className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
