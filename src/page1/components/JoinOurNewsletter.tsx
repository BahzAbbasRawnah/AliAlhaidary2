import img from '../../assets/img/JoinOur.png'
import Button from '../../components/Button'
export default function JoinOurNewsletter() {
    return (
        <section className='border-2 border-secondary-bg rounded-[32px] mt-[100px] grid lg:grid-cols-2 bg-light-blue  '>
            <div className='mt-[92px] px-[70px] '>
                <Button label='Join our newsletter' className='font-bold px-6' type="yellow" />
                <h2 className='text-[28px] leading-[36px] font-bold mt-4'>Subscribe to see secret deals
                    prices drop the moment you sign
                    up!</h2>
                <div className='relative mt-[32px] '>
                    <input type="text" className='outline-none border-2 h-[60px] pl-8 bg-input border-secondary-bg  rounded-full w-full' placeholder="Your Email" />
                    <Button className='absolute right-0 top-0 h-[60px] px-6' type='third' label='Subscribe'/>
                </div>
                <p className='text-[14px] font-500 text-[#737373] mt-[16px]'>No ads. No trails. No commitments</p>
            </div>
            <img src={img} alt="" className='w-full'/>
        </section>
    )
}
