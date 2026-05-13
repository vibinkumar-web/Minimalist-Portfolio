import { useEffect } from 'react';

export default function useScrollSpy(scrollContainerRef) {
    useEffect(() => {
        const container = scrollContainerRef?.current;
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-link');

        if (!container || !sections.length) return;

        // Use a rootMargin detection band so that a section becomes "active"
        // the moment its top crosses ~20% from the top of the viewport.
        // threshold:0 fires on ANY intersection — fixes tall sections like Projects
        // where threshold:0.5 never fires because the section exceeds viewport height.
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navItems.forEach((link) => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${id}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            },
            {
                root: container,
                rootMargin: '-20% 0px -75% 0px', // fires when top of section enters top 25% zone
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [scrollContainerRef]);
}
