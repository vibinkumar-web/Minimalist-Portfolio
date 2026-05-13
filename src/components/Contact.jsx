import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SOCIALS = [
    { href: 'https://github.com/vibinkumar-web', label: 'GitHub', icon: 'fab fa-github' },
    { href: 'https://www.linkedin.com/in/vibin-kumar-a62a692a4', label: 'LinkedIn', icon: 'fab fa-linkedin' },
    { href: 'https://wa.me/6374765266', label: 'WhatsApp', icon: 'fab fa-whatsapp' },
];

export default function Contact() {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus('sent');
                setForm({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
            })
            .catch(() => {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            });
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="contact-inner">
                    {/* Left */}
                    <div>
                        <h2 className="contact-headline fade-up">
                            Let's<br />
                            <em>Collaborate</em>
                        </h2>
                        <p className="contact-sub fade-up d1">
                            Have a project in mind? I'm available for freelance work
                            and full-time opportunities. Let's build something great together.
                        </p>
                        <a
                            href="mailto:vibinwebdesigner@gmail.com"
                            className="contact-email-link fade-up d2"
                        >
                            vibinwebdesigner@gmail.com
                            <span>↗</span>
                        </a>

                        <div className="contact-socials fade-up d3">
                            {SOCIALS.map(({ href, label, icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="contact-social-link"
                                >
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <i className={icon} style={{ fontSize: '1rem', opacity: 0.5 }} />
                                        {label}
                                    </span>
                                    <span className="social-arrow">↗</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: form */}
                    <div className="contact-form-panel fade-up d2">
                        <p className="form-title">Send a message</p>

                        {status === 'sent' ? (
                            <div style={{
                                textAlign: 'center',
                                padding: '3rem 0',
                                color: 'var(--text-2)',
                                fontFamily: 'var(--font-serif)',
                                fontSize: '1.5rem',
                                fontStyle: 'italic'
                            }}>
                                Message received.<br />
                                <span style={{ fontSize: '1rem', fontStyle: 'normal', fontFamily: 'var(--font-sans)', color: 'var(--text-3)' }}>
                                    I'll be in touch shortly.
                                </span>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <div className="form-field">
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <input
                                        className="form-input"
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-field">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input
                                        className="form-input"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-field">
                                    <label className="form-label" htmlFor="message">Message</label>
                                    <input
                                        className="form-input"
                                        type="text"
                                        id="message"
                                        name="message"
                                        placeholder="Tell me about your project"
                                        required
                                        value={form.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                {status === 'error' && (
                                    <p style={{ color: '#e57373', fontSize: '0.85rem', marginBottom: '1rem' }}>
                                        Something went wrong. Please try again.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary form-submit"
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
