import { useEffect, useRef } from 'react';

const SELECTORS = [
    '.reveal-fade-up',
    '.reveal-text',
    '.reveal-scale',
    '.reveal-pop',
    '.reveal-fade-right',
];

export default function useScrollAnimation(scrollContainerRef) {
    useEffect(() => {
        const container = scrollContainerRef?.current;

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        obs.unobserve(entry.target);
                    }
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.15 }
        );

        const elements = document.querySelectorAll(SELECTORS.join(', '));
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}
