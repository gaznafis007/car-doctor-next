import Card from "@/components/Card/Card";
import { services } from "@/lib/services";
import React from "react";

const Services = async () => {
  // console.log(services)
  return (
    <section className="mt-8 md:mt-28 flex flex-col items-center">
      <h3 className="font-semibold text-center text-blue-500">Service</h3>
      <h2 className="mt-4 text-4xl text-center text-slate-800 capitalize font-semibold">
        our service area
      </h2>
      <p className="mt-4 text-slate-600 font-thin w-1/2 text-center mx-auto">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="mt-4 grid grid-cols-1md: grid-cols-3 gap-4">
        {
            services?.map(service =>(
                <Card key={service?._id} title={service?.title} image={service?.img} number={service?.price}/>
            ))
        }
      </div>
      <button className="border border-blue-500 px-8 py-3 text-blue-500 inline-block mt-6 rounded-md hover:border-0 hover:bg-blue-500 hover:text-white capitalize">
              more services
            </button>
    </section>
  );
};

export default Services;
