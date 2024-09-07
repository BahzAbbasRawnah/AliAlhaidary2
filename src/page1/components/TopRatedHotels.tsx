import Button from "../../components/Button"
import HeaderSection from "../../components/HeaderSection"
import Card from '../../components/Card'
import img2 from '../../assets/img/2.jpg'
import img3 from '../../assets/img/3.jpg'
import img4 from '../../assets/img/4.jpg'
import img5 from '../../assets/img/5.jpg'
function TopRatedHotels() {
  return (
    <section className="relative mt-[64px] pt-[80px] bg-[url('src/assets/img/bg.svg')] lg:-mx-[16%] md:px-[16%]  pb-[130px] ">
      <div className="absolute top-0 left-0 h-full w-full  pt-[80px] bg-primary-bg opacity-0  md:px-[16%]  pb-[130px]"></div>
      <HeaderSection title="Top Rated Hotels" subtitle="Quality as judged by customers. Book at the ideal price!">
        <Button label="View More" icon="pi pi-arrow-right ml-4" type="third" />
      </HeaderSection>
      <div className='flex gap-4 overflow-x-scroll px-4  mt-[48px] md:-mr-[16%]'>

        <Card
          img={img2}
          title='California Sunset/TwilightBoat Cruise'
          price='$48.25'
          buttonPrice='4.96 (672 reviews)'
          location={{ title: 'Manchester, England', icon: 'pi pi-map-marker' }}

        />
        <Card
          img={img3}
          title='California Sunset/Twilight Boat Cruise'
          location={{ title: 'Manchester, England', icon: 'pi pi-map-marker' }}
          price='$48.25'
          buttonPrice='4.96 (672 reviews)'
        />
        <Card
          img={img4}
          title='NYC: Food Tastings and Culture Tour'
          location={{ title: 'Manchester, England', icon: 'pi pi-map-marker' }}
          price='$48.25'
          buttonPrice='4.96 (672 reviews)'
        />
        <Card
          img={img5}
          title='Grand Canyon HorseshoeBend 2 days'
          location={{ title: 'Manchester, England', icon: 'pi pi-map-marker' }}
          price='$48.25'
          buttonPrice='4.96 (672 reviews)'
        />
      </div>
    </section>
  )
}

export default TopRatedHotels