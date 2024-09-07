interface SmallCard{
    img:string,
    title:string,
    subTitle: string,
    className:string,
}
function SmallCard({img,title,subTitle,className}: SmallCard) {
    return (
        <div className={` h-[275px] w-[288px] flex flex-col items-center mb-6 justify-center rounded-3xl px-12 text-center border-2 ${className}`}>
            <img src={img} height={124} width={124} alt="" />
            <h3 className='text-[20px] font-bold mt-[18px]'>{title}</h3>
            <p className='text-[#8E8E8E] text-[14px] font-500 mt-[18px]'>{subTitle}</p>
        </div>)
}

export default SmallCard