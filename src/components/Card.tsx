import React from 'react'
import Button from './Button'

interface CardProps {
    img: string,
    title: string,
    topTitle?: string[],
    titleSize?: string,
    subtitle?: string,
    location?: { title: string, icon: string }
    details?: { title: string, icon: string }[]
    price: string,
    buttonPrice: string,
    isButtonRight?: boolean,
    children?: React.ReactNode,
    personalImg?: string,
    name?: string,
    buttnTopRight?: string
    buttnTopRightClass?: string
}
const icons = ['pi pi-calendar', 'pi pi-clock', 'pi pi-comment']; // قم بإضافة الأيقونات المطلوبة هنا

function Card({ img, title, titleSize, subtitle, location, price, buttonPrice, details, isButtonRight, children, topTitle, personalImg, name, buttnTopRight, buttnTopRightClass }: CardProps) {
    return (
        <section className='  md:min-w-[400px] min-w-[350px] rounded-xl bg-primary-bg-card '>
            <div className='relative z-0'>
                <img src={img} className='w-full h-[389px] rounded-xl' alt="best place" loading='lazy' height={389} />
                <i className='pi pi-heart absolute right-4 top-4 bg-[#FFFFFFD1]  rounded-full p-2'></i>
                {buttnTopRight && (

                    <Button type='white' label={buttnTopRight} className={`absolute left-4 top-4 border-none h-[38px] ${buttnTopRightClass}`} />
                )}
            </div>
            <div className='p-[32px] -mt-14 z-1 rounded-3xl border-2 relative bg-primary-bg-card '>
                <div className='flex justify-between  '>
                    {topTitle && topTitle.map((item, index) => (
                        <div className='flex items-center gap-1 mb-4'>
                            <i className={`${icons[index % icons.length]}  text-[#737373]`}></i>
                            <p key={index} className='text-[16px] font-semibold '>{item}</p>
                        </div>
                    ))}
                </div>
                <h2 className={`font-bold`} style={{ fontSize: titleSize ? `${titleSize}px` : '24px' }}>
                    {title}
                </h2>
                <div className='flex justify-between text-[#737373]'>
                    <div className=''>
                        {!topTitle && (
                            <>
                                {topTitle && (

                                    <p>{subtitle}</p>
                                )}
                                {location && (
                                    <div className='text-secondary-text gap-1 mt-1 w-[150%] flex items-center justify-between'>

                                        <div className='flex gap-1 items-center mt-2'>
                                            <i className={location.icon}></i>
                                            <p>{location.title}</p>
                                        </div>
                                        <div className='flex gap-1'>
                                            <i className='pi pi-star-fill text-black'></i>
                                            <i className='pi pi-star-fill text-black'></i>
                                            <i className='pi pi-star-fill text-black'></i>
                                            <i className='pi pi-star-fill text-black'></i>
                                        </div>
                                    </div>
                                )}
                                {details && (
                                    <div className='mt-[30px] border-t-2 pt-[28px] pb-[16px] grid grid-cols-2 justify-between text-secondary  w-[170%] leading-[32px]'>
                                        {details.map((details: any, index) => (

                                            <div className='flex gap-2 items-center' key={index}>
                                                <i className={details.icon}></i>
                                                <p>{details.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <p className='mt-[24px]'><strong className='text-primary-text text-[22px]'>{price}</strong> / person</p>
                            </>
                        )}


                    </div>
                    {!topTitle ? (


                        children ? children : <div><Button type='secondary' label="Book Now" className={`${details ? 'mt-[210px]' : 'mt-16'}  mb-5 w-32 `} /></div>

                    ) : (
                        <>
                            <div className='flex -ml-16 items-center gap-4 mt-[32px]'>
                                <img src={personalImg} className='h-[32px] w-[32px] rounded-full' alt="personal Img" />
                                <p className='text-[14px] font-bold'>{name}</p>
                            </div>
                            <Button label='Keep Reading' className='mt-[32px]' />
                        </>
                    )}
                </div>

                {isButtonRight && (

                    <div className='absolute -top-4  '>
                        <Button type='yellow' label='Exceptional' icon='pi pi-bolt' className='h-[36px] flex-row-reverse ' />
                    </div>
                )}
                {!topTitle && (

                    <div className='absolute -top-4 right-8  '>
                        <Button type='white' label={buttonPrice} icon='pi pi-star-fill text-[#FFC700]' className='h-[36px] flex-row-reverse' />
                    </div>
                )}
            </div>
        </section>
    )
}

export default Card
