
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Button from '../../components/Button';
import icon from '../../assets/img/icon.png'

const footerItems = [
    { label: 'Support', subItems: ["Forum support", "Help Center", "Live chat", "How it works", "Security", "Privacy", "Charges logs"] },
    { label: 'Company', subItems: ["About Us", "Community Blog", "Jobs and Careers", "Contact Us", "Our Awards", "Agencies"] },
    { label: 'Services', subItems: ["Tour Guide", "Tour Booking", "Hotel Booking", "Ticket Booking", "Rental Services"] },
    { label: 'Legal', subItems: ["Terms of Service", "Privacy Policy", "Cookies Policy", "Data Processing", "Data Policy", "Refund Policy"] },
]


export default function Footer() {
    return (
        <footer className='bg-[#000000] text-white lg:-mx-[16%] -mx-[2%] px-[16%] py-8'>
            <section className='flex  md:flex-row flex-col gap-y-4 justify-between items-start w-full border-b-2 border-gray-700 h-auto lg:h-[120px]'>
                <div className='flex gap-2 items-center'>
                    <h2 className='text-[20px] md:text-[28px] font-bold w-[70%]'>Subscribe to see secret deals prices
                        drop the moment you sign up!</h2>
                </div>
                <div className='flex f gap-2 items-center  lg:mt-0'>
                    <div className='relative'>
                        <i className='pi pi-envelope absolute left-3 top-5 '></i>
                        <input type="text" placeholder='Enter your email' className='bg-black border-2 border-gray-800 h-[58px] w-[250px] md:w-[350px] rounded-3xl border- outline-none pl-12 text-white' />
                    </div>
                    <Button label='Subscribe' type='yellow' className='h-[70px]' />
                </div>
            </section>

            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mt-12 border-b-2 border-gray-700 pb-16'>
                <div className='leading-[40px] col-span-2 mr-8'>
                    <div className='flex gap-2 items-center my-4'>
                        <img src={icon} className='h-[48px] w-[48px] rounded-full' alt="icon for this website" />
                        <h2 className='text-[24px] font-bold'>Travel</h2>
                    </div>
                    <ul className="text-[#8E8E8E]">
                        <li className='flex gap-2 items-center leading-[24px]'>
                            <FaMapMarkerAlt />
                            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <FaClock />
                            <p>Hours: 8:00 - 17:00, Mon - Sat</p>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <IoMdMail />
                            <p>support@travila.com</p>
                        </li>
                    </ul>
                    <div className=' gap-2 items-center mt-6'>
                        <div className="flex items-center gap-2">

                            <FaWhatsapp />
                            <p>Need help? Call us</p>
                        </div>
                        <h2 className='text-[#F09814] text-[24px] font-bold mx-2'>1-800-222-8888</h2>
                    </div>
                </div>

                {footerItems.map((item, index) => (
                    <ul key={index} className='text-[#8E8E8E] leading-[40px]'>
                        <p className='text-[18px] text-white'>{item.label}</p>
                        {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>{subItem}</li>
                        ))}
                    </ul>
                ))}
            </section>

            <section className='flex  justify-between items-center w-full mt-8 md:px-8 '>
                <p>© 2024 Travila Inc. All rights reserved.</p>
                <p>Follow us</p>

            </section>
        </footer>

    )
}
