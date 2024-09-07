import { useRef } from 'react';
import person from '../../assets/img/person.jpg'
import arrow from '../../assets/img/arrow.png'
import Button from '../../components/Button'
import PersonCard from '../../components/PersonCard'
function SayingAboutUs() {
    const cardContainerRef = useRef<any>(null);

    const handleScroll = (direction: string) => {
        if (cardContainerRef.current) {
            cardContainerRef.current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth',
            });
        }
    };
    return (
        <section className=' mt-[80px] py-[100px] flex flex-col lg:flex-row bg-light-blue px-4 lg:-mx-[16%]  overflow-scroll pr-4'>
            <img src={arrow} className='relative -top-[88px] left-[40%] w-[264px] h-[140px] ' alt="" />
            <section className='min-w-[40%] mr-[80px] -ml-24    '>
                <div className='rounded-full border-2 px-4 h-[48px]  flex items-center w-[180px] bg-white'>
                    <div className='flex '>
                        <img src={person} alt="" className='h-[24px] w-[24px] rounded-full border-2 border-white' />
                        <img src={person} alt="" className='-ml-2 h-[26px] w-[26px] rounded-full border-2 border-white' />
                        <img src={person} alt="" className='-ml-2 h-[26px] w-[26px] rounded-full border-2 border-white' />
                    </div>
                    <p className='text-[14px] font-bold'>Testimonials</p>

                </div>
                <h2 className='lg:text-[52px] text-[32px] font-bold leading-[76px]'>What our clients are saying about us?</h2>
                <p className='text-[20px] text-[#737373] mt-[24px]'>Discover how you can offset your adventure's carbon emissions
                    and support the sustainable initiatives practiced by our
                    operators worldwide.</p>
            </section>
            <div>
                <section className='flex gap-4'>
                    <PersonCard img={person} name='Sara Mohamed' palce='Jakatar'
                        description="I've been using the hotel booking system for several years
                                now, and it's become my go-to platform for planning my
                                trips. The interface is user-friendly, and I appreciate the
                                detailed information and real-time availability of hotels."/>
                    <PersonCard img={person} name='Atend John' palce='Jakatar'
                        description="I had a last-minute business trip, and the hotel booking
                                system came to the rescue. I was able to find a high-quality
                                hotel in no time and even got a great deal on the room. The
                                confirmation process was straightforward, and I received all
                                the necessary information promptly."/>
                </section>
                <div className='flex gap-2 mt-12'>

                    <Button
                        type='secondary'
                        icon='pi pi-arrow-left'
                        onClick={() => handleScroll('left')}
                    />
                    <Button
                        type='secondary'
                        icon='pi pi-arrow-right'
                        onClick={() => handleScroll('right')}
                    />
                </div>
            </div>

        </section>
    )
}

export default SayingAboutUs