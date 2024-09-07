import Button from "../../components/Button"

interface CardProps {
    img: string,
    title: string,
    subTitle: string,
    className?: string,
}
function Card({ img, title, subTitle, className }: CardProps) {
    return (
        <section className={`pt-[36px] pb-4 px-[28px] rounded-xl text-center flex flex-col items-center justify-center ${className}`}>
            <div className="bg-primary-bg h-[64px] w-[64px]  rounded-xl flex items-center justify-center ">
                <img src={img} className="h-[36px] w-[36px] " />
            </div>
            <h3 className="mt-4 text-[20px] font-bold">{title}</h3>
            <p className="mt-4 text-secondary-text text-[14px] font-500 mb-3">{subTitle}</p>
            <Button label="Learn More " icon="pi pi-arrow-right" type='text' className="border-none" />
        </section>
    )
}

export default Card