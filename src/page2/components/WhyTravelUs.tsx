import HeaderSection from '../../components/HeaderSection'
import Card from './WhyTravelUs.Card'
import repu from '../img/repu.svg'
import security from '../img/security.svg'
import support from '../img/support.svg'
import policy from '../img/policy.svg'
import pay1 from '../img/pay1.png'
import pay2 from '../img/pay2.svg'
import pay3 from '../img/pay3.svg'
import pay4 from '../img/pay4.png'
import pay5 from '../img/pay5.png'
import pay6 from '../img/pay6.png'
import pay7 from '../img/pay7.svg'
import pay8 from '../img/pay8.svg'

function WhyTravelUs() {
    return (
        <section className='mt-[80px] '>
            <div className='flex items-center justify-center text-center'>
            <HeaderSection title="Why Travel With Us?" subtitle="The best booking platform you can trust" />
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-[48px]'>
                <Card img={security} title='Security Assurance' className='bg-red-10' subTitle='Demonstrates commitment to user data security through encryption and secure payment practices'/>
                <Card img={repu} title='Security Assurance' className='bg-green-10' subTitle='Demonstrates commitment to user data security through encryption and secure payment practices'/>
                <Card img={support} title='Security Assurance' className='bg-yello-10' subTitle='Demonstrates commitment to user data security through encryption and secure payment practices'/>
                <Card img={policy} title='Security Assurance' className='bg-pink-10' subTitle='Demonstrates commitment to user data security through encryption and secure payment practices'/>
            </div>
            <div className='mt-[64px] flex flex-wrap gap-14'>
                <img src={pay7} alt="" />
                <img src={pay8} alt="" />
                <img src={pay6} alt="" />
                <img src={pay2} alt="" />
                <img src={pay3} alt="" />
                <img src={pay4} alt="" />
                <img src={pay5} alt="" />
            </div>
        </section>)
}

export default WhyTravelUs