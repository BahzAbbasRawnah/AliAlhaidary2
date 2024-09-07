import Button from '../../components/Button'
import Card from '../../components/Card'
import HeaderSection from '../../components/HeaderSection'
import img1 from '../../assets/img/5.jpg'
import car1 from '../img/car1.png'
import car2 from '../img/car2.png'
import car3 from '../img/car3.png'
import car4 from '../img/car4.png'
import car5 from '../img/car5.png'
import car6 from '../img/car6.png'
import car7 from '../img/car7.png'


export default function RecentLaunchedCar() {
    return (
        <section className='mt-[80px] bg-green-bg md:-mx-[16%] md:px-[16%] pb-24 pt-[80px] px-4'>
            <HeaderSection title="Recent Launched Car" subtitle="The world's leading car brands">
                <div className='flex gap-2'>
                    <Button icon="pi pi-arrow-right" />
                    <Button icon="pi pi-arrow-left" />
                </div>
            </HeaderSection>
            <section className='flex gap-4 overflow-x-scroll  px-4 md:-mx-[16%] mx-4  mt-[50px] snap-x snap-mandatory md:-mr-[16%]'            >
                <Card
                    img={img1}
                    title="Audi A3 1.6 TDI S line"
                    location={{ title: 'Manchester, England', icon: 'pi pi-map-marker' }}
                    details={[{ title:'25,100 miles',icon:'pi pi-compass'},{ title:'Automatic',icon:'pi pi-cog'}, { title:'Diesel',icon:'pi pi-car'}, { title:'7 seats',icon:'pi pi-car'},]}
                    price="$35.62"
                    buttonPrice='5.00' />
                <Card
                    img={img1}
                    title="Audi A3 1.6 TDI S line"
                    location={{ title: 'Manchester, England', icon: 'pi pi-map-marker' }}
                    details={[{ title:'25,100 miles',icon:'pi pi-compass'},{ title:'Automatic',icon:'pi pi-cog'}, { title:'Diesel',icon:'pi pi-car'}, { title:'7 seats',icon:'pi pi-car'},]}
                    price="$35.62"
                    buttonPrice='5.00' />
                <Card
                    img={img1}
                    title="Audi A3 1.6 TDI S line"
                    location={{ title: 'Manchester, England', icon: 'pi pi-map-marker' }}
                    details={[{ title:'25,100 miles',icon:'pi pi-compass'},{ title:'Automatic',icon:'pi pi-cog'}, { title:'Diesel',icon:'pi pi-car'}, { title:'7 seats',icon:'pi pi-car'},]}
                    price="$35.62"
                    buttonPrice='5.00' />
                <Card
                    img={img1}
                    title="Audi A3 1.6 TDI S line"
                    location={{ title: 'Manchester, England', icon: 'pi pi-map-marker' }}
                    details={[{ title:'25,100 miles',icon:'pi pi-compass'},{ title:'Automatic',icon:'pi pi-cog'}, { title:'Diesel',icon:'pi pi-car'}, { title:'7 seats',icon:'pi pi-car'},]}

                    price="$35.62"
                    buttonPrice='5.00 '    />
            </section>
            <div className='mt-[115px] mb-[64px]'>
                <h3 className='text-[36px] font-bold'>Search by category</h3>
                <p className='text-[20px] text-secondary-text font-500'>There has 30+ Brand Category Available</p>
            </div>
            <div className='flex flex-wrap gap-8'>
                <img src={car1} alt="" />
                <img src={car2} alt="" />
                <img src={car3} alt="" />
                <img src={car4} alt="" />
                <img src={car5} alt="" />
                <img src={car6} alt="" />
                <img src={car7} alt="" />
            </div>
        </section>)
}
