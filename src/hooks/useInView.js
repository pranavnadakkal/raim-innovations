import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook: returns [ref, isInView]
 * Uses IntersectionObserver to fire once when element enters viewport.
 */
export function useInView(options = { threshold: 0.15 }) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, options);
        observer.observe(el);
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [ref, inView];
}
