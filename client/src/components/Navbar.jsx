import { useState, useRef, useEffect } from 'react';

const Navbar = ({ onHomeClick, onFeaturesClick, onGenerateClick, onAboutClick }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="relative w-full flex items-center justify-between px-4 py-3 ">
            <div>
                <p className="text-white sm:text-4xl text-3xl font-lilita font-semibold">
                    Test
                    <span className="bg-gradient-to-tr from-blue-600 to-white bg-clip-text text-transparent">
                        Maker
                    </span>
                </p>
            </div>
            <div className="hidden sm:flex items-end justify-center">
                <ul className="text-gray-300 flex gap-6 lg:gap-10 text-[15px] lg:text-[17px] font-poppins cursor-pointer">
                    <li onClick={onHomeClick}>Home</li>
                    <li onClick={onFeaturesClick}>Features</li>
                    <li onClick={onGenerateClick}>Generate</li>
                    <li onClick={onAboutClick}>About</li>
                </ul>
            </div>
            <div className="sm:hidden" ref={dropdownRef}>
                <button
                    onClick={toggleMobileMenu}
                    className={`text-2xl text-white focus:outline-none transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
                        }`}
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
                {isMobileMenuOpen && (
                    <div className="absolute right-6 text-[18px] top-11 w-40 bg-gradient-to-tr from-black to-blue-900 text-white rounded shadow-md z-20">
                        <ul className="flex flex-col font-poppins">
                            <li onClick={() => { onHomeClick(); setIsMobileMenuOpen(false); }} className="px-4 py-2 hover:bg-blue-900 cursor-pointer">Home</li>
                            <li onClick={() => { onFeaturesClick(); setIsMobileMenuOpen(false); }} className="px-4 py-2 hover:bg-blue-900 cursor-pointer">Features</li>
                            <li onClick={() => { onGenerateClick(); setIsMobileMenuOpen(false); }} className="px-4 py-2 hover:bg-blue-900 cursor-pointer">Generate</li>
                            <li onClick={() => { onAboutClick(); setIsMobileMenuOpen(false); }} className="px-4 py-2 hover:bg-blue-900 cursor-pointer">About</li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>

    );
};

export default Navbar;
