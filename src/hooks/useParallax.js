import { useEffect } from 'react';

export default function useParallax(scrollContainerRef) {
    useEffect(() => {
        const container = scrollContainerRef?.current;
        if (!container) return;

        let ticking = false;

        const handleScroll = () => {
            const scrolled = container.scrollTop;

            if (window.innerWidth > 768) {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        const layers = document.querySelectorAll('.parallax-layer');
                        layers.forEach((layer) => {
                            const speed = parseFloat(layer.getAttribute('data-speed')) || 0.2;
                            layer.style.transform = `translate3d(0, ${-(scrolled * speed)}px, 0)`;
                        });
                        ticking = false;
                    });
                    ticking = true;
                }
            }
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [scrollContainerRef]);
}
