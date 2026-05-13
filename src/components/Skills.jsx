const SKILLS = {
    'Frontend & UI': [
        { icon: 'fab fa-html5', label: 'HTML5' },
        { icon: 'fab fa-css3-alt', label: 'CSS3' },
        { icon: 'fab fa-js', label: 'JavaScript' },
        { icon: 'fab fa-react', label: 'React.js' },
        { icon: 'fas fa-code', label: 'TypeScript' },
        { icon: 'fas fa-wind', label: 'Tailwind' },
        { icon: 'fas fa-mobile-alt', label: 'Responsive' },
        { icon: 'fas fa-paint-brush', label: 'UI Design' },
    ],
    'Development & Backend': [
        { icon: 'fab fa-python', label: 'Python' },
        { icon: 'fas fa-server', label: 'API Integration' },
        { icon: 'fas fa-database', label: 'MySQL' },
        { icon: 'fab fa-git-alt', label: 'Git' },
        { icon: 'fab fa-docker', label: 'Docker' },
        { icon: 'fab fa-node', label: 'Node.js' },
    ],
    'Testing & Automation': [
        { icon: 'fas fa-vial', label: 'Playwright' },
        { icon: 'fas fa-check-circle', label: 'Vitest' },
        { icon: 'fas fa-robot', label: 'AI Agents' },
        { icon: 'fas fa-cogs', label: 'Automation' },
    ],
    'Design Tools': [
        { icon: 'fab fa-figma', label: 'Figma' },
        { icon: 'fas fa-palette', label: 'Canva' },
        { icon: 'fas fa-image', label: 'Adobe Photoshop' },
    ],
    'Soft Skills': [
        { icon: 'fas fa-comments', label: 'Communication' },
        { icon: 'fas fa-lightbulb', label: 'Problem Solving' },
        { icon: 'fas fa-users', label: 'Collaboration' },
        { icon: 'fas fa-sync-alt', label: 'Adaptability' },
    ],
};

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Stack</span>
                    <h2 className="section-title fade-up">Technical Expertise</h2>
                </div>

                <div className="skills-categories">
                    {Object.entries(SKILLS).map(([category, skills], ci) => (
                        <div key={category} className={`fade-up d${ci + 1}`}>
                            <div className="skill-cat-header">
                                <span className="skill-cat-name">{category}</span>
                                <div className="skill-cat-line" />
                            </div>
                            <div className="skills-list">
                                {skills.map(({ icon, label }, si) => (
                                    <span className={`skill-pill fade-up d${(si % 4) + 1}`} key={label}>
                                        <i className={icon} />
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
