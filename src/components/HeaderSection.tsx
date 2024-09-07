
interface HeaderSection {
    title: string;
    subtitle: string;
    titleSize?: number;
    children?: React.ReactNode;
}
function HeaderSection({ title, subtitle, titleSize, children }: HeaderSection) {
    return (
        <header className='flex justify-between items-end '>
            <div>
                {titleSize ? (
                    <h1
                        className='font-bold lg:text-[64px] text-[40px] text-primary-text'
                    >
                        {title}
                    </h1>
                ) : (
                    <h1
                        className='font-bold lg:text-[52px] text-[36px] text-primary-text'
                    >
                        {title}
                    </h1>
                )}



                <p className='text-[20px] text-[#8E8E8E] font-500'>
                    {subtitle}
                </p>
            </div>
            <div className='flex gap-2 flex-wrap'>
                {children}
            </div>
        </header>)
}

export default HeaderSection