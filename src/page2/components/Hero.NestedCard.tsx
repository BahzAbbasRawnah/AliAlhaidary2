interface NestedCard {
    title: string,
    subTitle: string,
    icon: string,
    className?: string,
}
function NestedCard({ title, subTitle, icon ,className}: NestedCard) {
    return (
        <section className={`px-[36px] my-[24px] ${className}`}>
            <h3 className=' text-secondary-text text-[14px] font-bold'>{title}</h3>
            <div className='flex gap-2 items-center text-secondary-text mt-4 '>
                <i className={icon}></i>
                <p className='  text-[14px]  text-primary-text font-bold'>{subTitle}</p>
                <i className="pi pi-angle-down"></i>
            </div>
        </section>
    )
}

export default NestedCard