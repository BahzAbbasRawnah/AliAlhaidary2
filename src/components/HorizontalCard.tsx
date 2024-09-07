import React from 'react'
import { IoMdRepeat } from "react-icons/io";
import Button from './Button';

interface CardProps {
    img: string,
    title: string,
    titleSize?: string,
    subtitle: string,
    price: string,
    buttonPrice: string,
    isButtonRight?: boolean,
    children?: React.ReactNode
}

function HorizontalCard({ img, title, titleSize, subtitle, price, buttonPrice, isButtonRight, children }: CardProps) {
    return (
        <section className='h-[311px] rounded-3xl flex -mr-36 md:-mr-8 min-w-[612px]'>
            <div className='relative '>
                <img src={img} className='w-[150px] md:w-[273px] h-[311px] rounded-3xl' alt="" />
                <i className='pi pi-heart absolute left-4 top-4 bg-[#fff]  rounded-full p-2'></i>
            </div>
            <section className='p-8 rounded-l-3xl border-l-2 -ml-8 md:-ml-14 z-1 rounded-3xl border-2 border-secondary-bg relative bg-primary-bg '>
                <div className='flex items-center gap-2'>
                    <i className='pi pi-clock'></i>
                    <span>09 Jun 2024</span>
                    <span className='mx-2 text-[#E4E6E8] pi pi-minus'></span>
                    <i className='pi pi-clock'></i>
                    <span>09 Jun 2024</span>
                </div>
                <div className='flex items-center justify-between gap-2 mt-2'>
                    <h3 className='text-[24px] font-bold'>Denmark</h3>
                    <IoMdRepeat className='text-[24px]' />
                    <h3 className='text-[24px] font-bold'>New York</h3>
                </div>
                <div className='mt-4 flex justify-between'>
                    <div>
                        <p className='font-500 text-[#575756] '>Business</p>
                        <h1  className='text-[24px] font-bold mt-2'>$288.15</h1>
                    </div>
                    <span className='border-[1px] my-3'></span>
                    <div>
                        <p className='font-500 text-[#575756] '>Business</p>
                        <h1  className='text-[24px] font-bold mt-2'>$288.15</h1>
                    </div>
                </div>
                    <div className='flex justify-between items-center mt-8'>
                        <p className='text-[#575756] '>18 Seats left</p>
                        <Button label='Book Now'/>
                    </div>
         

            </section>
        </section>
    )
}

export default HorizontalCard
