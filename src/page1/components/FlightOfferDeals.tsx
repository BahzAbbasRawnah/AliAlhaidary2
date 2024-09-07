import { useRef } from 'react'
import HeaderSection from '../../components/HeaderSection'
import Button from '../../components/Button'
import HorizontalCard from '../../components/HorizontalCard';
import img2 from '../../assets/img/2.jpg'

function FlightOfferDeals() {
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
        <section className='mt-[80px] '>
            <hr className='-mx[16%] mb-[80px]' />
            <HeaderSection title='Flight Offer Deals' subtitle='Competitive fares for your route-specific searches.' >
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
            </HeaderSection>
            <section
                ref={cardContainerRef}
                className='flex  overflow-x-scroll  mt-[80px]  lg:-mr-[14%]'
            >
            <HorizontalCard
                    img={img2}
                    title='California Sunset/TwilightBoat Cruise'
                    subtitle='2 days 3 nights - Family'
                    price='$48.25'
                    buttonPrice='4.96 (672 reviews)'
                />
            <HorizontalCard
                    img={img2}
                    title='California Sunset/TwilightBoat Cruise'
                    subtitle='2 days 3 nights - Family'
                    price='$48.25'
                    buttonPrice='4.96 (672 reviews)'
                />
            <HorizontalCard
                    img={img2}
                    title='California Sunset/TwilightBoat Cruise'
                    subtitle='2 days 3 nights - Family'
                    price='$48.25'
                    buttonPrice='4.96 (672 reviews)'
                />
            <HorizontalCard
                    img={img2}
                    title='California Sunset/TwilightBoat Cruise'
                    subtitle='2 days 3 nights - Family'
                    price='$48.25'
                    buttonPrice='4.96 (672 reviews)'
                />
        </section>
        </section>
    )
}

export default FlightOfferDeals