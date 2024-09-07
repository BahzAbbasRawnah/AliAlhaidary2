
interface SmallCard {
    img: string;
    title: string;
    subTitle: string;
}

function SmallCardWithBG({ img, title, subTitle }: SmallCard) {
    return (
        <div 
            className="bg-cover bg-center h-[275px] w-[288px] rounded-3xl px-8 pt-[14px] 	"
            style={{ backgroundImage: `url('${img}')` ,  backgroundSize: 'fill'  ,backgroundRepeat: 'no-repeat'      }}
        >
            <h3 className='text-[20px] font-bold w-[60%]'>{title}</h3>
            <p className='text-[#8E8E8E] text-[14px] font-medium mt-[8px] w-[70%]'>{subTitle}</p>
        </div>
    );
}

export default SmallCardWithBG;
