import Button from "../../components/Button";
import Card from "../../components/Card";
import HeaderSection from "../../components/HeaderSection";

import img1 from '../../assets/img/5.jpg'

export default function Featured() {
    return (
        <section className="mt-[200px]">
            <HeaderSection title="Our Featured Tours" subtitle="Favorite destinations based on customer reviews">
                <Button label="Categories" type="secondary" icon="pi pi-angle-down" />
                <Button label="Duration" type="secondary" icon="pi pi-angle-down" />
                <Button label="Review / Rating" type="secondary" icon="pi pi-angle-down" />
                <Button label="Price range" type="secondary" icon="pi pi-angle-down" />
            </HeaderSection>
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
    )
}
