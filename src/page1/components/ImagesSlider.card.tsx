import Button from "../../components/Button"

interface ImagesSliderCardProps {
    img: string,
    title: string,
    topTitle?: string
}
export function ImagesSliderCard({ img, title }: ImagesSliderCardProps) {
    return (
        <section
            className=" h-[300px] min-w-[400px] md:h-[400px] md:min-w-[500px] pl-[48px] rounded-xl"
            style={{ backgroundImage: `url('${img}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            {/* <h3 className="text-[36px] font-bold leading-[48px] mt-[48px] w-[70%]  text-white">{title}</h3>
            <Button label="View More" icon="pi pi-arrow-right" type="yellow" className="mt-[32px]" /> */}
        </section>
    )
}
export function BigImagesSliderCard({ img, title, topTitle }: ImagesSliderCardProps) {
    return (
        <section
            className=" h-[300px] min-w-[500px] md:h-[400px] md:min-w-[600px] flex flex-col items-center pl-48 text-center  rounded-xl pt-[48px]"
            style={{ backgroundImage: `url('${img}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <p className="text-[18px] font-bold text-white">{ topTitle }</p>
            <h3 className="text-[36px] font-bold leading-[48px] w-[60%]  text-white">{title}</h3>
            <Button label="View More" icon="pi pi-arrow-right" type="yellow" className="mt-[2px] mr-8 h-[107px] pb-10" />
        </section>
    )
}

