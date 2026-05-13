import { useEffect } from 'react';

export default function useMagneticButton() {
    useEffect(() => {
        const applyMagnetic = () => {
            const btns = document.querySelectorAll('.magnet-btn');

            btns.forEach((btn) => {
                const onMove = (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    btn.style.transform = `translate3d(${x * 0.2}px, ${y * 0.2}px, 0)`;
                };

                const onLeave = () => {
                    btn.style.transform = 'translate3d(0, 0, 0)';
                };

                btn.addEventListener('mousemove', onMove);
                btn.addEventListener('mouseleave', onLeave);

                // Store cleanup refs
                btn._magnetMove = onMove;
                btn._magnetLeave = onLeave;
            });
        };

        // Small delay so DOM is painted
        const timer = setTimeout(applyMagnetic, 500);

        return () => {
            clearTimeout(timer);
            const btns = document.querySelectorAll('.magnet-btn');
            btns.forEach((btn) => {
                if (btn._magnetMove) btn.removeEventListener('mousemove', btn._magnetMove);
                if (btn._magnetLeave) btn.removeEventListener('mouseleave', btn._magnetLeave);
            });
        };
    }, []);
}
