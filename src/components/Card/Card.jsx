import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Card = ({image, title, number}) => {
    return (
        <div className='shadow-sm p-6 rounded-md border border-zinc-200 flex flex-col'>
            <div className='w-full  mx-auto'>
                <Image className='rounded-md' src={'/assets/images/banner/3.jpg'} alt={title} width={720} height={720}/>
            </div>
            
                <h1 className="mt-4 text-xl font-bold text-slate-900">{title}</h1>
            <div className="flex flex-row justify-between items-center">
            <h1 className="mt-2 text-xl font-bold text-blue-500">Price:${title}</h1>
            <Link className='text-slate-800 text-xl hover:text-blue-500' href={'/'}>
            <FiArrowRight/>
            </Link>
            </div>
            
        </div>
    );
};

export default Card;