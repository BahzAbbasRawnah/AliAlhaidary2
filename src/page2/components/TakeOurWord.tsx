import { useRef } from 'react';
import person from '../../assets/img/person.jpg'
import PersonCard from './TakeOurWord.PersonCard'
import Button from '../../components/Button';



export default function TakeOurWord() {
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
        <section className="mt-[100px] bg-[url('src/page2/img/bg.svg')] bg-cover lg:-mx-[16%] lg:pl-[16%]">
            <div className='rounded-full border-2 px-4 h-[48px]  flex items-center w-[180px] bg-yellow-bg border-secondary-bg '>
                <div className='flex '>
                    <img src={person} alt="" className='h-[24px] w-[24px] rounded-full border-2 border-white' />
                    <img src={person} alt="" className='-ml-2 h-[26px] w-[26px] rounded-full border-2 border-white' />
                    <img src={person} alt="" className='-ml-2 h-[26px] w-[26px] rounded-full border-2 border-white' />
                </div>
                <p className='text-[14px] font-bold'>Testimonials</p>
            </div>
            <h2 className='text-[36px] lg:text-[52px] font-bold'>Don't take our word for it</h2>
            <section className='flex gap-4 mt-[72px] overflow-scroll' ref={cardContainerRef}            >
                <PersonCard img={person} name='Sara Mohamed' palce='Jakatar'
                    description="I've been using the hotel booking system for several years
                        now, and it's become my go-to platform for planning my
                        trips. The interface is user-friendly, and I appreciate the
                        detailed information and real-time availability of hotels."/>
                <PersonCard img={person} name='Sara Mohamed' palce='Jakatar'
                    description="I've been using the hotel booking system for several years
                        now, and it's become my go-to platform for planning my
                        trips. The interface is user-friendly, and I appreciate the
                        detailed information and real-time availability of hotels."/>
                <PersonCard img={person} name='Sara Mohamed' palce='Jakatar'
                    description="I've been using the hotel booking system for several years
                        now, and it's become my go-to platform for planning my
                        trips. The interface is user-friendly, and I appreciate the
                        detailed information and real-time availability of hotels."/>
                <PersonCard img={person} name='Sara Mohamed' palce='Jakatar'
                    description="I've been using the hotel booking system for several years
                        now, and it's become my go-to platform for planning my
                        trips. The interface is user-friendly, and I appreciate the
                        detailed information and real-time availability of hotels."/>

            </section>
            <div className='flex gap-4 justify-end mt-8 mr-[16%]'>
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
        </section>
    )
}
