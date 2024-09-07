import Button from "../../components/Button"
import HeaderSection from "../../components/HeaderSection"
import img5 from '../../assets/img/5.jpg'
import SampleCard from "../../components/SampleCard"

function CustomerFavorite() {
  return (
    <section className="mt-[88px]">
      <HeaderSection title="Popular Destinations" subtitle="Favorite destinations based on customer reviews">
        <Button label="Categories" type="secondary" icon="pi pi-angle-down" />
        <Button label="Duration" type="secondary" icon="pi pi-angle-down" />
        <Button label="Review / Rating" type="secondary" icon="pi pi-angle-down" />
        <Button label="Price range" type="secondary" icon="pi pi-angle-down" />
      </HeaderSection>
      <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2  gap-6 mt-[55px]">
        <SampleCard title="Venice" subTitle="356 Tours, 248 Activities" img={img5} />
        <SampleCard title="Amsterdam" subTitle="356 Tours, 248 Activities" img={img5}/>
        <SampleCard title="Budapest" subTitle="356 Tours, 248 Activities" img={img5}/>
        <SampleCard title="Lisbon" subTitle="356 Tours, 248 Activities" img={img5}/>
        <SampleCard title="London" subTitle="356 Tours, 248 Activities" img={img5}/>
        <SampleCard title="Ottawa" subTitle="356 Tours, 248 Activities" img={img5}/>
        <SampleCard title="Paris" subTitle="356 Tours, 248 Activities" img={img5}/>
        <section className="border-2 rounded-3xl h-[224px] bg-[#E4E6E8] p-[28px]">
          <h2 className="text-[#737373] text-[20px] lg:text-[24px] font-bold  w-[80%] leading-[32px]">Crafting Your Perfect Travel Experience</h2>
          <div className="flex justify-between items-center gap-4 px-[28px] bg-black text-white rounded-xl h-[68px] mt-4 ">
            <p className="font-bold">Browse All destinations </p>
            <i className="pi pi-arrow-right p-[8px] text-black  text-[12px] bg-white rounded-full "></i>
          </div>

        </section>
      </section>
    </section>
  )
}

export default CustomerFavorite