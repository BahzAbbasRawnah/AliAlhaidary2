interface PersonCardProps {
    img: string,
    name: string,
    palce: string,
    description: string,
    children?: React.ReactNode,
    className?: string,
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
}
function PersonCard({ img, name, palce, description }: PersonCardProps) {
    return (
        <section className='rounded-3xl p-[36px]  border-1 bg-white min-w-[470px] border-2 '>
            <p className="mt text-[14px] mb-[32px] text-[#737373] leading-[24px]">{description}</p>
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

        </section>
    )
}

export default PersonCard