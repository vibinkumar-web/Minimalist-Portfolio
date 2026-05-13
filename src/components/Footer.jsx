const SOCIAL = [
    { href: 'https://github.com/vibinkumar-web', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/vibin-kumar-a62a692a4', icon: 'fab fa-linkedin', label: 'LinkedIn' },
    { href: 'https://wa.me/6374765266', icon: 'fab fa-whatsapp', label: 'WhatsApp' },
    { href: 'mailto:vibinwebdesigner@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
];

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-inner">
                <p className="footer-copy">
                    © 2026 Vibin Kumar · Frontend Developer
                </p>
                <div className="footer-socials">
                    {SOCIAL.map(({ href, icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto') ? '_self' : '_blank'}
                            rel="noreferrer"
                            className="footer-social-link"
                            aria-label={label}
                        >
                            <i className={icon} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
