import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import JourneyWay from './components/JourneyWay'
import CustomerFavorite from './components/CustomerFavorite'
import TopRatedHotels from './components/TopRatedHotels'
import WhyChooseUs from './components/WhyChooseUs'
import FlightOfferDeals from './components/FlightOfferDeals'
import ImagesSlider from './components/ImagesSlider'
import EasyPayment from './components/EasyPayment'
import SayingAboutUs from './components/SayingAboutUs'
import News from './components/News'
import JoinOurNewsletter from './components/JoinOurNewsletter'
import img from '../assets/img/beforFooter.png'

export default function Page1() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className=" lg:mx-[12%] pl-[16px]    ">
        <Hero />
        <JourneyWay />
        <CustomerFavorite />
        <TopRatedHotels />
        <WhyChooseUs />
        <FlightOfferDeals />
        <ImagesSlider />
        <EasyPayment />
        <SayingAboutUs />
        <News />
        <JoinOurNewsletter />
        <img src={img} className='h-[130px] mt-[100px]' alt="befor Footer" />
        <Footer />
      </div>

    </div>
  )
}
