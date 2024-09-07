import Button from './Button'
interface SampleCardProps {
    img?: string
    title: string
    subTitle: string

}
function SampleCard({ img, title, subTitle }: SampleCardProps) {
    return (
        <section className='h-[224px] border-2 rounded-3xl p-[16px]'>
            <div className='h-[136px]'>

                {img && (
                    <img src={img} className='w-full h-[89%] rounded-xl ' alt="" />
                )}
            </div>
            <div className='flex items-end justify-between'>
                <div>
                    <h3 className='text-[18px] font-bold'>{title}</h3>
                    <p className='text-secondary-text text-[14px]'>{subTitle}</p>
                </div>
                <Button icon='pi pi-arrow-right' className=' text-[12px]'/>
            </div>
           
        </section>
    )
}

export default SampleCard