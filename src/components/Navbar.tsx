import { useEffect, useRef, useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
            const target = event.target as Node;
            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
            document.addEventListener("touchstart", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("touchstart", handleOutsideClick);
        };
    }, [isMenuOpen]);

    return (
        <nav className="w-full max-w-[38.25rem] relative flex justify-between md:justify-center items-center px-4 mx-3.5
                        lg:px-6 py-2.5 bg-[#C9CFBB]/30 backdrop-blur-lg shadow-lg rounded-xl"
        >
            <a href="#date" className="flex md:hidden items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-xl font-foglihten whitespace-nowrap text-black">
                  Вадим&Елена
                </span>
            </a>

            <div className="md:hidden">
                <button
                    ref={buttonRef}
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-black rounded-lg
                               hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="mobile-menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1
                             1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {/* Компьютерная версия */}
            <div className="hidden md:flex space-x-8 font-medium">
                {["#date", "#program", "#dresscode", "#presenter", "#details", "#location"].map((href, idx) => (
                    <a
                        key={href}
                        href={href}
                        className="text-black hover:text-primary-700"
                    >
                        {["Дата", "Программа", "Дресс-код", "Ведущий", "Детали", "Место"][idx]}
                    </a>
                ))}
            </div>

            {/* Мобильная версия */}
            <div
                ref={menuRef}
                className={`absolute top-full left-2 right-2 z-40 mt-2 shadow-xl rounded-xl 
                            bg-[#E5E6E1] transition-all duration-300 overflow-hidden ${
                    isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col text-black font-sans font-medium">
                    {[
                        { href: "#date", label: "Дата" },
                        { href: "#program", label: "Программа" },
                        { href: "#dresscode", label: "Дресс-код" },
                        { href: "#presenter", label: "Ведущий" },
                        { href: "#details", label: "Детали" },
                        { href: "#location", label: "Место" },
                    ].map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                onClick={handleLinkClick}
                                className="block px-4 py-2 hover:bg-white/90"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;