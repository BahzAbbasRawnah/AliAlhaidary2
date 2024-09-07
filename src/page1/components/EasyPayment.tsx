import pay1 from '../../assets/img/pay1.png.png'
import pay2 from '../../assets/img/pay2.png.png'
import pay3 from '../../assets/img/pay3.png.png'
import stripe from '../../assets/img/stripe.png'
import skrill from '../../assets/img/skrill.png'
import payPal from '../../assets/img/payPal.png'
import unkounPay from '../../assets/img/unkounPay.png'
import Button from '../../components/Button'
export default function EasyPayment() {
    return (
        <section className='mt-[100px] flex lg:flex-row flex-col justify-between items-center -mx-[5%] xl:mx-0'>
            <div className='flex gap-4'>
                <img src={pay1} className='h-[453px] w-[279px]' alt="" />
                <div>
                    <img src={pay2} className='h-[216px] w-[192px]' alt="" />
                    <img src={pay3} className='h-[216px] w-[192px] mt-6' alt="" />
                </div>
            </div>
            <div className="mt-8 w-[50%]">
                <Button label='Easy payment' className='font-bold'/>
                <h2 className='lg:text-[52px] text-[36px] font-bold leading-[76px]'>Discover Dream Destinations with Ease</h2>
                <p className='text-[20px] text-[#737373] mt-[24px]'>Discover how you can offset your adventure's carbon emissions and support the sustainable initiatives practiced by our operators worldwide.</p>
                <div className='flex gap-4 mt-[32px]'>
                    <img src={stripe} alt=""  className='h-[50px] w-[112px]'/>
                    <img src={skrill} alt=""  className='h-[50px] w-[112px]'/>
                    <img src={payPal} alt=""  className='h-[50px] w-[112px]'/>
                    <img src={unkounPay} alt="" className='h-[50px] w-[112px]' />
                </div>
            </div>
        </section>
    )
}
