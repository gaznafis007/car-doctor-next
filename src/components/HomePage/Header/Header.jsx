'use client'
import React, { useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const Header = () => {
    const [headerItem, setHeaderItem] = useState(0);
    const handlePreviousItem = id =>{
        if(id == 0){
            setHeaderItem(5)
        }
        else{
            setHeaderItem(id - 1)
        }
    }
    const handleNextItem = id =>{
        if(id == 5){
            setHeaderItem(0)
        }
        else{
            setHeaderItem(id + 1)
        }
    }
  const headerItems = [
    {
      title: "Affordable Price For Car Servicing",
      body: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    },
    {
      title: "Affordable Price For Car Servicing 2",
      body: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    },
    {
      title: "Affordable Price For Car Servicing 3",
      body: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    },
    {
      title: "Affordable Price For Car Servicing 4",
      body: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    },
    {
      title: "Affordable Price For Car Servicing 5",
      body: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    },
    {
      title: "Affordable Price For Car Servicing 6",
      body: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    },
  ];
  return (
    <section>
      {headerItems?.map((item, idx) => (
        <div key={idx} className={`${headerItem == idx ? 'flex flex-col' : 'hidden'} relative duration-200 h-[80vh] rounded-md py-12 px-10 bg-cover bg-no-repeat`} style={{
            backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(${`/assets/images/banner/${idx + 1}.jpg`})`,
          }}>
          <h2 className="text-7xl leading-tight text-white font-bold w-full md:w-1/3">{item?.title}</h2>
          <p className="mt-3 font-thin text-white w-full md:w-1/3 leading-6">{item?.body}</p>
          <div className="mt-4 space-x-4">

            <button className="bg-blue-500 px-8 py-3 rounded-md text-white hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 capitalize">
              discover more
            </button>
            <button className="border border-white px-8 py-3 rounded-md hover:border-0 hover:bg-blue-500 text-white capitalize">
              latest project
            </button>
          </div>
          <div className="absolute bottom-6 right-12 space-x-4">
          <button onClick={() => handlePreviousItem(idx)} className="bg-blue-500 p-3 rounded-full text-white hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500">
              <FiArrowLeft/>
            </button>
            <button onClick={() => handleNextItem(idx)} className="border border-white p-3 rounded-full  text-white hover:border-0 hover:bg-blue-500">
              <FiArrowRight/>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Header;
