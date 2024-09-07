import Button from '../../components/Button'
import Card from '../../components/Card'
import img1 from '../../assets/img/1.jpg'
import img2 from '../../assets/img/2.jpg'
import img3 from '../../assets/img/3.jpg'
import img4 from '../../assets/img/4.jpg'
import img5 from '../../assets/img/5.jpg'
import { useRef } from 'react'
import HeaderSection from '../../components/HeaderSection'


function JourneyWay() {

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
        <section className='mt-[32px] '>
     
            <HeaderSection title='Your Journey, Your Way' subtitle='Discover the Worlds Treasures with Travila' titleSize={64}>
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
                className='flex gap-4 overflow-x-scroll  px-4  lg:-mx-[14%] -mr-[16%] mx-4  mt-[80px] snap-x snap-mandatory'
                >
                <div className='min-w-[400px] md:min-w-[558px] '>
                    <Card
                        img={img1}
                        title="California Sunset/Twilight BoatCruise"
                        titleSize='32'
                        subtitle="7 days 6 nights - Small group"
                        price="$35.62"
                        buttonPrice='5.00'
                        isButtonRight
                    >
                        <div>
                            <p className='text-[14px] font-bold mb-2'>Promotion will end in</p>
                            <div className='flex gap-1'>
                                <div className='flex flex-col items-center'>
                                    <Button
                                        type='secondary'
                                        label='228'
                                        className='rounded-lg w-[42px] h-[46px] text-[18px] font-bold'
                                    />
                                    <p className='text-[12px]'>days</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Button
                                        type='secondary'
                                        label='09'
                                        className='rounded-lg w-[42px] h-[46px] text-[18px] font-bold'
                                    />
                                    <p className='text-[12px]'>hours</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Button
                                        type='secondary'
                                        label='50'
                                        className='rounded-lg w-[42px] h-[46px] text-[18px] font-bold'
                                    />
                                    <p className='text-[12px]'>mins</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Button
                                        type='secondary'
                                        label='44'
                                        className='rounded-lg w-[42px] h-[46px] text-[18px] font-bold'
                                    />
                                    <p className='text-[12px]'>secs</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <Card
                    img={img2}
                    title='California Sunset/TwilightBoat Cruise'
                    subtitle='2 days 3 nights - Family'
                    price='$48.25'
                    buttonPrice='4.96 (672 reviews)'
                />
                <Card
                    img={img3}
                    title='NYC: Food Tastings andCulture Tour'
                    subtitle='3 days 3 nights - Company'
                    price='$17.32'
                    buttonPrice='4.96 (672 reviews)'
                />
                <Card
                    img={img4}
                    title='Grand Canyon HorseshoeBend 2 days'
                    subtitle='7 days 6 nights - Small group'
                    price='$15.63'
                    buttonPrice='4.96 (672 reviews)'
                />
                <Card
                    img={img5}
                    title='Grand Canyon HorseshoeBend 2 days'
                    subtitle='7 days 6 nights - Small group'
                    price='$15.63'
                    buttonPrice='4.96 (672 reviews)'
                />
            </section>
        </section>
    );


}

export default JourneyWay