const EXPERIENCE = [
    { title: 'Frontend Developer', sub: 'Currently Working' },
    { title: 'Freelance Developer', sub: 'Independent Projects' },
    { title: 'B.Sc Computer Science', sub: 'Graduate' },
];

const FOCUS_ITEMS = [
    { num: '01', label: 'Performance Optimisation' },
    { num: '02', label: 'Scalable Architecture' },
    { num: '03', label: 'Automation & AI Agents' },
];

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                {/* Header */}
                <div className="section-header">
                    <span className="section-eyebrow">My Story</span>
                    <h2 className="section-title fade-up">About</h2>
                </div>

                <div className="about-grid">
                    {/* Left: text + focus */}
                    <div className="about-text">
                        <p className="fade-up">
                            <strong>Frontend Developer</strong> passionate about bridging the gap
                            between design and engineering. With a strong foundation in Computer Science,
                            I specialize in building responsive, accessible, and performant web applications.
                        </p>
                        <p className="fade-up d1">
                            My approach focuses on creating <strong>scalable frontend architectures</strong> and
                            intuitive user interfaces. I enjoy solving complex problems — from optimizing
                            rendering performance to automating workflows with AI agents.
                        </p>
                        <p className="fade-up d2">
                            I am currently <strong>open to opportunities</strong> where I can contribute
                            to innovative products and work with teams that care about craft quality.
                        </p>

                        {/* Focus areas list (dvdrod row style) */}
                        <div className="about-focus fade-up d3">
                            {FOCUS_ITEMS.map(({ num, label }) => (
                                <div className="focus-row" key={num}>
                                    <span className="focus-num">{num}</span>
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: sidebar timeline */}
                    <div className="about-sidebar">
                        <div className="sidebar-block fade-up d1">
                            <div className="sidebar-label">Experience</div>
                            <div className="timeline-list">
                                {EXPERIENCE.map(({ title, sub, date }) => (
                                    <div className="timeline-item" key={title}>
                                        <div>
                                            <div className="timeline-title">{title}</div>
                                            <div className="timeline-sub">{sub}</div>
                                        </div>
                                        <div className="timeline-date">{date}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-block fade-up d2">
                            <div className="sidebar-label">Currently Exploring</div>
                            <div className="timeline-list">
                                <div className="timeline-item">
                                    <div>
                                        <div className="timeline-title">AI-powered Workflows</div>
                                        <div className="timeline-sub">LLM integrations & agent pipelines</div>
                                    </div>
                                    <div className="timeline-date">2025</div>
                                </div>
                                <div className="timeline-item">
                                    <div>
                                        <div className="timeline-title">Advanced Testing</div>
                                        <div className="timeline-sub">Playwright & Vitest</div>
                                    </div>
                                    <div className="timeline-date">2025</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
