import { useState, useEffect, useRef } from 'react';

const PHRASES = ['Digital Systems', 'Interactive UI', 'Web Experiences'];

const TICKER_SKILLS = [
    'Frontend Engineering', 'React.js', 'Performance', 'UI Design',
    'TypeScript', 'Scalability', 'AI Agents', 'Automation',
    'Node.js', 'Responsive Design', 'REST APIs', 'Testing',
    // duplicate for seamless loop
    'Frontend Engineering', 'React.js', 'Performance', 'UI Design',
    'TypeScript', 'Scalability', 'AI Agents', 'Automation',
    'Node.js', 'Responsive Design', 'REST APIs', 'Testing',
];

export default function Hero() {
    const [displayText, setDisplayText] = useState('');
    const phraseIndex = useRef(0);
    const charIndex = useRef(0);
    const isDeleting = useRef(false);

    useEffect(() => {
        let timeout;
        function typeLoop() {
            const current = PHRASES[phraseIndex.current];
            let speed = 100;

            if (isDeleting.current) {
                setDisplayText(current.substring(0, charIndex.current - 1));
                charIndex.current--;
                speed = 50;
            } else {
                setDisplayText(current.substring(0, charIndex.current + 1));
                charIndex.current++;
                speed = 100;
            }

            if (!isDeleting.current && charIndex.current === current.length) {
                isDeleting.current = true;
                speed = 2000;
            } else if (isDeleting.current && charIndex.current === 0) {
                isDeleting.current = false;
                phraseIndex.current = (phraseIndex.current + 1) % PHRASES.length;
                speed = 500;
            }

            timeout = setTimeout(typeLoop, speed);
        }

        const init = setTimeout(typeLoop, 800);
        return () => { clearTimeout(init); clearTimeout(timeout); };
    }, []);

    const scrollTo = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero">
            <div className="hero-inner">
                {/* Meta row */}
                <div className="hero-meta fade-in">
                    <span className="hero-location">Tenkasi, Tamil Nadu</span>
                </div>

                {/* Main title */}
                <h1 className="hero-title fade-up">
                    Frontend Design<br />
                    &amp; <em>Engineering</em>
                </h1>

                {/* Subtitle row */}
                <div className="hero-subtitle-row fade-up d1">
                    <p className="hero-desc">
                        I craft high-performance web applications with a focus on clean architecture,
                        modern UI, and automation. Open to full-time and freelance opportunities.
                    </p>
                    <div className="hero-typing-block">
                        <p className="hero-typing-label">Currently building</p>
                        <div className="hero-typed">
                            <span>{displayText}</span>
                            <span className="typing-cursor" />
                        </div>
                    </div>
                </div>

                {/* CTAs */}
                <div className="hero-cta-row fade-up d2">
                    <a
                        href="#projects"
                        className="btn btn-primary"
                        onClick={(e) => scrollTo(e, '#projects')}
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="btn btn-outline"
                        onClick={(e) => scrollTo(e, '#contact')}
                    >
                        Get in Touch
                    </a>
                </div>
            </div>

            {/* Ticker */}
            <div className="hero-ticker">
                <div className="ticker-track">
                    {TICKER_SKILLS.map((skill, i) => (
                        <span className="ticker-item" key={i}>
                            {skill}
                            {i < TICKER_SKILLS.length - 1 && <span className="ticker-sep" />}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
