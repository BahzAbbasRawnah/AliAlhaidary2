import { useEffect, useState } from 'react';
import icon from '../assets/img/icon.png'
import { CgMenuGridO, CgClose } from "react-icons/cg"; // لإضافة أيقونة الإغلاق
import Button from './Button';

export default function Navbar() {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة التحكم في القائمة المنسدلة للجوال

    const toggleLanguageDropdown = () => {
        setIsLanguageOpen(!isLanguageOpen);
        setIsCurrencyOpen(false);
    };

    const toggleCurrencyDropdown = () => {
        setIsCurrencyOpen(!isCurrencyOpen);
        setIsLanguageOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // التحكم في حالة القائمة
    };
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light'; // إذا لم يكن هناك ثيم مخزن، استخدم 'light'
    });
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);
    const handleThemeToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // تخزين الثيم في localStorage
    };


    const navItems = [
        { label: "Home", subItems: ["home", "home", "home", "home", "home"], },
        { label: "Tours", subItems: [], },
        { label: "Destinations", subItems: [], },
        { label: "Activities", subItems: [], },
        { label: "Hotel", subItems: [], },
        { label: "Rental", subItems: [], },
        { label: "Tickets", subItems: [], },
        { label: "Pages", subItems: [], },
        { label: "Blog", subItems: [], },
        { label: "Contact" },
    ];

    return (
        <nav className='h-[62px] shadow-lg border-b-2 border-secondary-bg  flex justify-between px-4 xl:px-8 px-2 items-center'>
            <div className='flex gap-2 items-center'>
                <img src={icon} className='h-[48px] w-[48px] rounded-full' alt="icon" />
                <h2 className='text-[20px] sm:text-[24px] font-bold'>Travel</h2>
            </div>

            <ul className={`lg:flex xl:gap-4 gap-1 text-[14px] hidden ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                {navItems.map((item) => (
                    <li key={item.label} className="relative group flex items-center gap-1">
                        {item.label}
                        {item.subItems && (
                            <div className="relative">
                                <i className="pi pi-angle-down"></i>
                                <ul className="absolute left-0 top-full mt-1 hidden group-hover:grid bg-gray-100 shadow-lg grid grid-cols-4 w-[300px]">
                                    {item.subItems.map((subItem) => (
                                        <li key={subItem} className="px-4 py-2 hover:bg-gray-200">
                                            {subItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div className='relative'>
                <div className="lg:hidden">
                    <button className="p-2 text-lg" onClick={toggleMenu}>
                        {isMenuOpen ? <CgClose /> : <CgMenuGridO />}
                    </button>
                </div>

                {isMenuOpen && (
                    <ul className='bg-gray-100 border-2 px-8 w-96 pb-8 z-10 rounded-lg shadow-lg leading-[32px] absolute top-8 right-0 md:-left-4 grid grid-cols-3 gap-4'>
                        {navItems.map((item, index) => (
                            <li key={index} className='py-2'>{item.label}</li>
                        ))}
                        <li className='md:hidden'>
                            <Button type='secondary' icon='pi pi-sun' className='rounded-2xl' />
                        </li>
                        <li className='md:hidden'>
                            <Button type='text' label='Sign Up' />
                        </li>
                        <li className='md:hidden'>
                            <div className='relative'>
                                <div className='flex gap-1 items-center cursor-pointer' onClick={toggleLanguageDropdown}>
                                    <i className='pi pi-globe'></i>
                                    <p>EN</p>
                                    <i className={`pi ${isLanguageOpen ? 'pi-angle-up' : 'pi-angle-down'}`}></i>
                                </div>
                                {isLanguageOpen && (
                                    <ul className='absolute left-0 mt-2 bg-gray-100 shadow-lg w-24'>
                                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>EN</li>
                                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>FR</li>
                                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>ES</li>
                                    </ul>
                                )}
                            </div>
                        </li>
                        <li className='md:hidden'>
                            <div className='relative'>
                                <div className='flex gap-1 items-center cursor-pointer' onClick={toggleCurrencyDropdown}>
                                    <p>USD</p>
                                    <i className={`pi ${isCurrencyOpen ? 'pi-angle-up' : 'pi-angle-down'}`}></i>
                                </div>
                                {isCurrencyOpen && (
                                    <ul className='absolute left-0 mt-2 bg-gray-100 shadow-lg w-24'>
                                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>USD</li>
                                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>EUR</li>
                                        <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>GBP</li>
                                    </ul>
                                )}
                            </div>
                        </li>
                    </ul>

                )}
            </div>

            <div className='md:flex items-center xl:gap-4 gap-1 hidden '>
                <div className='relative '>
                    <div className='flex gap-1 items-center cursor-pointer' onClick={toggleLanguageDropdown}>
                        <i className='pi pi-globe'></i>
                        <p>EN</p>
                        <i className={`pi ${isLanguageOpen ? 'pi-angle-up' : 'pi-angle-down'}`}></i>
                    </div>
                    {isLanguageOpen && (
                        <ul className='absolute left-0 mt-2 bg-gray-100 shadow-lg w-24'>
                            <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>EN</li>
                            <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>FR</li>
                            <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>ES</li>
                        </ul>
                    )}
                </div>

                <div className='relative'>
                    <div className='flex gap-1 items-center cursor-pointer' onClick={toggleCurrencyDropdown}>
                        <p>USD</p>
                        <i className={`pi ${isCurrencyOpen ? 'pi-angle-up' : 'pi-angle-down'}`}></i>
                    </div>
                    {isCurrencyOpen && (
                        <ul className='absolute left-0 mt-2 bg-gray-100 shadow-lg w-24'>
                            <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>USD</li>
                            <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>EUR</li>
                            <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>GBP</li>
                        </ul>
                    )}
                </div>
                <Button onClick={handleThemeToggle} type='secondary' icon={`pi pi-${theme === 'light' ? 'sun' : 'moon'}`} />

                <Button type='text' label='Sign Up' />

                <div className='hidden sm:flex bg-yellow-bg h-[42px] w-[42px] text-[32px] items-center justify-center'>
                    <CgMenuGridO />
                </div>
            </div>
        </nav>
    );
}
