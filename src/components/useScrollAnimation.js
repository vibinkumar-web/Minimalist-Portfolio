import { useEffect } from 'react';

export default function useScrollAnimation() {
    useEffect(() => {
        const targets = document.querySelectorAll(
            '.fade-up, .fade-in, .slide-right'
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        // Small delay so elements are in DOM
        const timeout = setTimeout(() => {
            document.querySelectorAll('.fade-up, .fade-in, .slide-right')
                .forEach((el) => observer.observe(el));
        }, 100);

        return () => {
            clearTimeout(timeout);
            observer.disconnect();
        };
    }, []);
}
