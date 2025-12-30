import { useState } from "react";
import "../styles/Navbar.css"; // your CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <a
                href="#home"
                className="brand">
                Ziad
            </a>

            <button
                className="navbar-toggle"
                onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
                <li>
                    <a
                        href="#about"
                        onClick={() => setIsOpen(false)}>
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        onClick={() => setIsOpen(false)}>
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#skills"
                        onClick={() => setIsOpen(false)}>
                        Skills
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
