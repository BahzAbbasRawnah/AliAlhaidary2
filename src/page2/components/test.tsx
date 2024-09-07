import Button from '../../components/Button'
import HeaderSection from '../../components/HeaderSection'
<section className='mt-[80px]'>
<HeaderSection title="" subtitle="">
    <Button label="" type="third" icon="pi pi-arrow-right" />
</HeaderSection>
</section> 



import img5 from '../../assets/img/5.jpg'

{/* card */}

<section className='flex gap-4 overflow-x-scroll  px-4 -mx-[16%] mx-4  mt-[80px] snap-x snap-mandatory'            >
                <Card
                    img={img1}
                    title="California Sunset/Twilight BoatCruise"
                    subtitle="7 days 6 nights - Small group"
                    price="$35.62"
                    buttonPrice='5.00'
                    buttnTopRight='Top Rated'
                    buttnTopRightClass='text-[#F09812]'
                />
                <Card
                    img={img1}
                    title="California Sunset/Twilight BoatCruise"
                    subtitle="7 days 6 nights - Small group"
                    price="$35.62"
                    buttonPrice='5.00'
                    buttnTopRight='Best Sale'
                    buttnTopRightClass='text-[#3DC262]'
                />
                <Card
                    img={img1}
                    title="California Sunset/Twilight BoatCruise"
                    subtitle="7 days 6 nights - Small group"
                    price="$35.62"
                    buttonPrice='5.00'
                    buttnTopRight='25% Off'
                    buttnTopRightClass='text-[#F09812]'
                />
            </section>

</section>