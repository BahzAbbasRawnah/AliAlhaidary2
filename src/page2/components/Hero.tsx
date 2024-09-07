import Button from "../../components/Button"
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import NestedCard from "./Hero.NestedCard"

function Hero() {
    return (
        <section className=" bg-[url('src/page2/img/Background-svg.svg')] min-h-[95vh] bg-cover	 md:-mx-[16%]  -mx-3 ">

            <section className="flex lg:flex-row flex-col md:px-[16%] px-4">
                <header className="mt-[76px]">
                    <Button type="yellow" label="Discovery the World" />
                    <h1 className="text-[48px] lg:text-[64px] font-bold leading-[76px] mt-5 w-[80%]">Unleash Your Wanderlust Book Your Next Journey</h1>
                    <p className="text-[24px] font-500 mt-4">Crafting Exceptional Journeys: Your Global Escape Planner. Unleash Your Wanderlust:
                        Seamless Travel, Extraordinary Adventures</p>
                    <div className="flex gap-2 mt-12">
                        <Button icon="pi pi-arrow-left" />
                        <Button icon="pi pi-arrow-right" />
                    </div>
                </header>
                <div className="flex flex-col items-center">
                    <img src={img1} className="mt-[16px] rounded-lg  h-[122px] min-w-[207px]" alt="" />
                    <img src={img2} className="mt-[16px] rounded-lg  h-[122px] min-w-[207px]" alt="" />
                    <img src={img3} className="mt-[16px] rounded-lg border-white border-[3px] h-[122px] min-w-[207px]" alt="" />
                </div>
            </section>
            <section className="flex flex-col items-center  w-full bg-primary-bg p-[28px] rounded-xl border-2 border-secondary-bg mt-8"> 
                <ul className="flex flex col items-center  gap-6"> 
                    <li><Button label="Tours" type="third"/></li>
                    <li>Hotels</li>
                    <li>Tickets</li>
                    <li>Rental</li>
                    <li>Activities</li>
                </ul>
                <div className="mt-[36px] border-2 border-secondary-bg w-full  flex items-center flex-wrap rounded-xl ">
                    <NestedCard title="Location" subTitle="02 January 2024" icon="pi pi-map" className="border-r-2" />
                    <NestedCard title="Check In" subTitle="02 January 2024" icon="pi pi-calender" className="border-r-2" />
                    <NestedCard title="Check Out" subTitle="02 January 2024" icon="pi pi-calender" className="border-r-2" />
                    <NestedCard title="Guest" subTitle="02 January 2024" icon="pi pi-user"/>
                    <Button label="Search" icon="pi pi-search" type="third" className="flex flex-row-reverse gap-4 h-[58px] px-8"/>

                </div>
            </section>

        </section>

    )
}

export default Hero