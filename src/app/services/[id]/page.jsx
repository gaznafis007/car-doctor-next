import { getData } from '@/lib/getData';
import Image from 'next/image';
import React from 'react';

const ServiceDetails = async ({params}) => {
    const service = await getData(`/api/services/${params.id}`)
    return (
        <section className='text-slate-800'>
            <h2 className="text-4xl text-center font-semibold text-blue-500">{service?.title}</h2>
            
                <Image className='rounded-md mx-auto my-8' src={service?.img} alt='service-image' width={1080} height={720}/>
                <h3 className="font-semibold">Description: </h3>
            <p className="mt-2 font-thin">
                {service?.description}
            </p>
            <p className="mt-6 text-blue-500 font-bold">Price: ${service?.price}</p>
        </section>
    );
};

export default ServiceDetails;