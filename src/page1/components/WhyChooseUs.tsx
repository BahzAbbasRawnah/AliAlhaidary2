import Button from '../../components/Button'
import appstore from '../../assets/img/appstore.svg'
import googleplay from '../../assets/img/googleplay.svg'
import bage from '../../assets/img/bage.svg'
import support from '../../assets/img/support.svg'
import booking from '../../assets/img/booking.svg'
import bestPrice from '../../assets/img/bestPrice.svg'
import SmallCard from './SmallCard'
import SmallCardWithBG from './SmallCardWithBG'

export default function WhyChooseUs() {
    return (
        <section className='mt-[110px] flex lg:flex-row flex-col gap-4 justify-center items-center'>
            <div className='mt-[88px] '>
                <Button label="Why Choose Us" />
                <h2 className=' text-[36px] xl:text-[52px] font-bold'>Dare to live the lift you’ve always wanted</h2>
                <p className='text-[#737373] lg:text-[20px] text-[18px] mt-[20px]'>Discover how you can offset your adventure's carbon emissionsand support the sustainable initiatives practiced by ouroperators worldwide.</p>
                <div className='flex gap-4 mt-16'>
                    <img src={appstore} alt="" />
                    <img src={googleplay} alt="" />
                </div>
            </div>
            <div className='mt-[36px] '>
                <SmallCard img={bage} title='4500+ Destination' subTitle='Our expert team handpicked all destinations in this site.' className="bg-[#FEFA17]" />
                <SmallCardWithBG img={booking} title='Fast Booking' subTitle='Secure payment' />

            </div>
            <div >

                <SmallCard img={support} title='Great 24/7 Support' subTitle='We are here to help, before,during, and even after your trip.' className="bg-white" />
                <SmallCardWithBG img={bestPrice} title='Best Price' subTitle='Price match within 48 hours of order confirmation' />

            </div>
        </section>
    )
}
