import Button from "../../components/Button"

function Hero() {
    return (
        <div >

            <section className="flex  flex-col lg:flex-row mt-[24px]  items-center justify-center border-2 border-secondary-bg  rounded-full ">
                <div className="relative w-full">
                    <i className="pi pi-search  absolute top-[40%] left-3"></i>
                    <input type="text" className="outline-none bg-input h-[75px] pl-10 w-full rounded-l-full font-bold" placeholder='What are you looking for?' />
                </div>
                <ul className="flex gap-4 h-[75px] items-center px-8 ">
                    <li>
                        <Button type="third" label="Tours" />
                    </li>
                    <li>Hotels</li>
                    <li>Tickets</li>
                    <li>Rental</li>
                    <li>Activities</li>

                </ul>
            </section>
            <section className="mt-[24px] flex justify-between">
                <div className="flex gap-2 flex-wrap">
                    <Button  label="Categories" type="secondary" icon="pi pi-angle-down" />
                    <Button  label="Duration" type="secondary" icon="pi pi-angle-down" />
                    <Button  label="Review / Rating" type="secondary" icon="pi pi-angle-down" />
                    <Button  label="Price range" type="secondary" icon="pi pi-angle-down" />
                    <Button  label="Language" type="secondary" icon="pi pi-angle-down" />  
                </div>
                <Button  label="Sort from High to Low" type="text" icon="pi pi-sort-alt" className="w-full md:w-64" />  
                
            </section>
            <hr className="xl:-mx-[16%] mt-[42px] sm:-mx-4  " />
        </div>

    )
}

export default Hero