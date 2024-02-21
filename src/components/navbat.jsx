import React, { useEffect, useState } from "react";
import logo from "../my-project/logoDDC.png"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        {link: "Home", path: "home"},
        {link: "Board", path: "board"},
        {link: "Game", path: "game"},
    ]

    return (
        <header className="text-main w-full bg-white md:bg-transparent fixed top-0 left -0 right-0">
            <nav>
                <div>
                    <a href="" className="text-3xl font-bold flex "><img src={logo}
                    alt =""className="w-10 inline-blck item-center"/><span className="text-main"
                    >HealthHero</span></a>

                    
                    <ul className="md:flex spce-x-12 hidden">
                        {
                            navItems.map(({links,path}) => <Link to={path} spy={true} smooth={true} offset=
                            {-100} key={path} className="block text-base text-gray-100">{link}</Link> )
                        }
                    </ul>
                    <div className="">
                         <button onClick={toggleMenu} className="md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
