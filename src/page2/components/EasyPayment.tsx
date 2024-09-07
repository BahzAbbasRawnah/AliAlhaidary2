import payment1 from '../img/payment1.svg'
import payment3 from '../img/payment3.svg'
import payment4 from '../img/payment4.svg'
import payment6 from '../img/payment6.svg'
import payment7 from '../img/payment7.svg'

import Button from '../../components/Button'
export default function EasyPayment() {
    return (
        <section className='mt-[100px] flex lg:flex-row flex-col justify-between items-center -mx-[5%] xl:mx-0 bg-gray-bg rounded-xl px-4 lg:pl-[140px] py-[48px]'>
            <div className="mt-8 w-[70%]">
                <Button type='white' label='Easy payment' className='font-bold' />
                <h2 className='lg:text-[36px] text-[32px] font-bold mt-8 '>Luxury Travel Redefined: Your Passport to Global Glamour</h2>
                <p className='text-[20px] text-[#737373] mt-[24px]'>Discover how you can offset your adventure's carbon emissions and support the sustainable initiatives practiced by our operators worldwide.</p>
            </div>
            <div className='flex items-center gap-4'>
                <img src={payment1} className='h-[307px] w-[166px] ' alt="" />
                <div className='flex flex-wrap grid-cols-2 gap-4'>
                    <img src={payment3} className='h-[260px]  rounded-3xl w-[166px] mt-6  object-cover' alt="" />
                    <img src={payment6} className='h-[168px]  rounded-3xl w-[166px] mt-6  object-cover' alt="" />
                    <img src={payment4} className='h-[168px]  rounded-3xl w-[166px] mt-6  object-cover' alt="" />
                    <img src={payment7} className='h-[260px]  rounded-3xl w-[166px] mt-6  lg:-mt-16  object-cover' alt="" />
                </div>
            </div>

        </section>
    )
}
