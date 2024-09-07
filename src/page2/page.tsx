import Header from "../components/Header"
import Navbar from "../components/Navbar"
import News from "../page1/components/News"
import TopRatedHotels from "../page1/components/TopRatedHotels"
import Categories from "./components/Categories"
import EasyPayment from "./components/EasyPayment"
import Featured from "./components/Featured"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import RecentLaunchedCar from "./components/RecentLaunchedCar"
import TakeOurWord from "./components/TakeOurWord"
import WhyTravelUs from "./components/WhyTravelUs"

function Page2() {
    return (
        <main>
            <Header />
            <Navbar />
            <div className=" lg:mx-[12%] md:pl-[0px] pl-4   ">
                <Hero />
                <Featured />
                <Categories />
                <TopRatedHotels />
                <EasyPayment />
                <WhyTravelUs />
                <RecentLaunchedCar />
                <TakeOurWord />
                <News />
                <div className="mt-32">

                    <Footer />
                </div>
            </div>

        </main>
    )
}

export default Page2