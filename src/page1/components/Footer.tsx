import icon from '../../assets/img/icon.png'
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const footerItems = [
    { label: 'Support', subItems: ["Forum support", "Help Center", "Live chat", "How it works", "Security", "Privacy", "Charges logs"] },
    { label: 'Company', subItems: ["About Us", "Community Blog", "Jobs and Careers", "Contact Us", "Our Awards", "Agencies"] },
    { label: 'Services', subItems: ["Tour Guide", "Tour Booking", "Hotel Booking", "Ticket Booking", "Rental Services"] },
    { label: 'Legal', subItems: ["Terms of Service", "Privacy Policy", "Cookies Policy", "Data Processing", "Data Policy", "Refund Policy"] },
]


export default function Footer() {
    return (
        <footer className='bg-[#000000] text-white lg:-mx-[16%] -mx-[2%] px-[5%] py-8'>
        <section className='flex  lg:flex-row justify-between items-start w-full border-b-2 border-gray-700 h-auto lg:h-[90px]'>
            <div className='flex gap-2 items-center'>
                <img src={icon} className='h-[48px] w-[48px] rounded-full' alt="icon for this website" />
                <h2 className='text-[24px] font-bold'>Travel</h2>
            </div>
            <div className='flex flex-col lg:flex-row gap-2 items-center mt-4 lg:mt-0'>
                <FaWhatsapp />
                <p>Need help? Call us</p>
                <h2 className='text-[#F09814] text-[24px] font-bold mx-2'>1-800-222-8888</h2>
            </div>
        </section>
        
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mt-12 border-b-2 border-gray-700 pb-16'>
            <div className='leading-[40px] col-span-2 mr-8'>
                <p className='text-[18px]'>Contact Us</p>
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
                <p className='text-[18px] mt-4'>Follow us</p>
                <div className='flex gap-2'>
                    <i className='pi pi-instagram rounded-full border-2 p-4 text-[24px]'></i>
                    <i className='pi pi-facebook rounded-full border-2 p-4 text-[24px]'></i>
                    <i className='pi pi-twitter rounded-full border-2 p-4 text-[24px]'></i>
                    <i className='pi pi-youtube rounded-full border-2 p-4 text-[24px]'></i>
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
    
        <section className='flex flex-col sm:flex-row justify-between items-center w-full mt-8'>
            <p>© 2024 Travila Inc. All rights reserved.</p>
            <div className='flex gap-4 sm:gap-12 mt-4 sm:mt-0'>
                <p>Terms</p>
                <p>Privacy policy</p>
                <p>Legal notice</p>
                <p>Accessibility</p>
            </div>
        </section>
    </footer>
    
    )
}
