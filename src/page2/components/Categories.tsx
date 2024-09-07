import HeaderSection from '../../components/HeaderSection'
import Button from '../../components/Button'
import SampleCard from '../../components/SampleCard'
import img5 from '../../assets/img/5.jpg'


function Categories() {
    return (
        <section className='mt-[80px]'>
            <HeaderSection title="Top Categories of Tours" subtitle="Favorite destinations based on customer reviews">
                <Button label="View More" type="third" icon="pi pi-arrow-right" />
            </HeaderSection>
            <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2  gap-6 mt-[36px]">
                <SampleCard title="Mountain" subTitle="356 Tours, 248 Activities" img={img5} />
                <SampleCard title="Safari" subTitle="356 Tours, 248 Activities" img={img5} />
                <SampleCard title="Venice" subTitle="356 Tours, 248 Activities" img={img5} />
                <SampleCard title="Venice" subTitle="356 Tours, 248 Activities" img={img5} />
                <SampleCard title="Beach" subTitle="356 Tours, 248 Activities" img={img5} />
                <SampleCard title="Temples" subTitle="356 Tours, 248 Activities" img={img5} />
                <SampleCard title="Venice" subTitle="356 Tours, 248 Activities" img={img5} />
                <SampleCard title="Venice" subTitle="356 Tours, 248 Activities" img={img5} />
            </section>
            <section className='mt-[80px] flex  md:flex-row flex-col gap-6 min-h-[300px] w-full '>
                <div className="bg-[url('src/page2/img/banner1.svg')] h-full md:w-full w-[90%] bg-cover rounded-xl p-8">
                    <h2 className='mb-8 text-[36px] font-bold w-[45%]'>Waking up in a faraway place</h2>
                    <Button label='View More' type="yellow" icon="pi pi-arrow-right" />
                </div>
                <div className="bg-[url('src/page2/img/banner1.svg')] bg-cover h-full md:w-full  w-[90%] rounded-xl p-8">
                    <h2 className='mb-8 text-[36px] font-bold w-[55%]'>Big promotion at the end of the year</h2>
                    <Button label='View More' type="yellow" icon="pi pi-arrow-right" />
                </div>

            </section>
        </section>
    )
}

export default Categories