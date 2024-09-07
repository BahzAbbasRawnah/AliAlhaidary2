interface PersonCardProps {
    img: string,
    name: string,
    palce: string,
    description:string,
    children?: React.ReactNode,
    className?: string,
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
}
function PersonCard({ img, name, palce,description }: PersonCardProps) {
    return (
        <section className='rounded-3xl p-[36px]  border-1 bg-primary-bg border-2 border-secondary-bg w-[470px] '>
            <div className="flex items-center gap-4">
                <img src={img} className="h-[64px] w-[64px] rounded-full" alt="person image" />
                <div>
                    <h3 className="text-[18px] font-bold">{name}</h3>
                    <p className="text-[14px] font-500">{palce}</p>
                </div>
                <div className="justify-self-end items-self-end	flex gap-2">
                    <i className="pi pi-star-fill text-[#FFC700] "></i>
                    <i className="pi pi-star-fill text-[#FFC700] "></i>
                    <i className="pi pi-star-fill text-[#FFC700] "></i>
                    <i className="pi pi-star-fill text-[#FFC700] "></i>
                </div>
            </div>
            <hr className="mt-[24px]"/>
            <p className="mt-[32px] text-[14px] text-[#737373] leading-[24px]">{description}</p>
        </section>
    )
}

export default PersonCard