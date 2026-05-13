const PROJECTS = [
    {
        num: '01',
        title: 'Personal Studio Portfolio',
        desc: 'Minimal creative portfolio for a personal studio with refined typography, smooth transitions, and a clean editorial layout that puts the work front and centre.',
        live: 'https://aura-project-xi.vercel.app/',
    },
    {
        num: '02',
        title: 'Bite Fast',
        desc: 'Visually engaging restaurant website showcasing menus and services. Implements smooth geometric layouts and interactive hover effects for an appetising experience.',
        live: 'https://bite-fast.vercel.app/',
    },
    {
        num: '03',
        title: 'Space Craft Portfolio',
        desc: 'Immersive space-themed portfolio with parallax star fields, cinematic section transitions, and a bold dark aesthetic that captures the scale of the cosmos.',
        live: 'https://space-craft-tau.vercel.app/',
    },
    {
        num: '04',
        title: 'Gomathi Dental Care',
        desc: 'Professional clinic website for a dental practice — clean, trustworthy design with service listings, appointment prompts, and a patient-friendly layout.',
        live: 'https://gomathi-dental-care.vercel.app/',
    },
    {
        num: '05',
        title: 'TNGASA College Website',
        desc: 'Official government college website delivering institution information, department listings, and announcements in a structured, accessible layout.',
        live: 'https://tngasa.vercel.app/',
    },
    {
        num: '06',
        title: 'Streaks — Premium Streetwear',
        desc: 'Full-featured streetwear e-commerce storefront with product collections, quick-view modals, a multi-step checkout flow, and a bold promotional hero.',
        live: 'https://streaks-front-end.vercel.app/',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Selected Works</span>
                    <h2 className="section-title fade-up">Work</h2>
                </div>

                <div className="projects-list">
                    {PROJECTS.map(({ num, title, desc, live }, i) => (
                        <a
                            key={num}
                            href={live}
                            target="_blank"
                            rel="noreferrer"
                            className={`project-row fade-up d${(i % 4) + 1}`}
                        >
                            <span className="project-num">{num}</span>

                            <div className="project-main">
                                <h3 className="project-name">{title}</h3>
                                <p className="project-desc">{desc}</p>
<div className="project-visual-strip" />
                            </div>

                            <span className="project-arrow">↗</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
