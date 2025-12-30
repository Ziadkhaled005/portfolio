import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const mobileMenuRef = useRef(null);
    const hamburgerRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "home", name: "Home", href: "#home" },
        { id: "about", name: "About", href: "#about" },
        { id: "skills", name: "Skills", href: "#skills" },
        { id: "projects", name: "Projects", href: "#projects" },
        { id: "contact", name: "Contact", href: "#contact" },
    ];

    const handleLinkClick = (itemId) => {
        setActiveLink(itemId);
        setIsMenuOpen(false);
        // Smooth scroll to section
        const element = document.getElementById(itemId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If clicking outside mobile menu AND outside hamburger button
            if (
                isMenuOpen &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [isMenuOpen]);

    // Close menu on escape key
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === "Escape" && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscapeKey);
        return () => document.removeEventListener("keydown", handleEscapeKey);
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <div className="navbar-inner">
                    {/* Name Section - LEFT SIDE */}
                    <div
                        className="navbar-name-container"
                        onClick={() => handleLinkClick("home")}
                        style={{ cursor: "pointer" }}>
                        <h1 className="navbar-name">Ziad Khaled</h1>
                    </div>

                    {/* Right Side Container */}
                    <div className="navbar-links-container">
                        {/* Desktop Navigation - RIGHT SIDE */}
                        <div className="navbar-desktop">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    className={`navbar-link ${
                                        activeLink === item.id ? "active" : ""
                                    }`}
                                    onClick={() => handleLinkClick(item.id)}>
                                    {item.name}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            ref={hamburgerRef}
                            className="navbar-mobile-button"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu">
                            <div
                                className={`hamburger-icon ${
                                    isMenuOpen ? "open" : ""
                                }`}>
                                <span className="hamburger-line"></span>
                                <span className="hamburger-line"></span>
                                <span className="hamburger-line"></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    ref={mobileMenuRef}
                    id="mobile-menu"
                    className={`navbar-mobile-menu ${isMenuOpen ? "open" : ""}`}
                    role="menu"
                    aria-hidden={!isMenuOpen}>
                    <div className="navbar-mobile-header">
                        <h3 className="mobile-menu-title">Menu</h3>
                        <button
                            className="mobile-menu-close"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu">
                            <svg
                                className="close-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="navbar-mobile-items">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                className={`navbar-mobile-link ${
                                    activeLink === item.id ? "active" : ""
                                }`}
                                onClick={() => handleLinkClick(item.id)}
                                role="menuitem"
                                aria-current={
                                    activeLink === item.id ? "page" : undefined
                                }>
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
