import { useState, useEffect } from 'react';

const NAV_LINKS = [
    { href: '#projects', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar({ scrollContainerRef }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const container = scrollContainerRef?.current || window;
        const el = scrollContainerRef?.current ? scrollContainerRef.current : document.documentElement;

        const handleScroll = () => {
            const top = scrollContainerRef?.current ? scrollContainerRef.current.scrollTop : window.scrollY;
            setScrolled(top > 60);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [scrollContainerRef]);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        document.body.classList.toggle('light', next === 'light');
    };

    const scrollTo = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            setActiveLink(href);
            setMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo */}
                <a
                    href="#hero"
                    className="logo"
                    onClick={(e) => scrollTo(e, '#hero')}
                >
                    Vibin Kumar.
                </a>

                {/* Desktop Links */}
                <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
                    {NAV_LINKS.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className={`nav-link${activeLink === href ? ' active' : ''}`}
                                onClick={(e) => scrollTo(e, href)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="nav-right">
                    {/* Theme toggle */}
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                        <div className="theme-icon" />
                        <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                    </button>

                    {/* Hamburger */}
                    <button
                        className={`menu-toggle${menuOpen ? ' open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </div>
        </nav>
    );
}
