import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    );

    const currentRef = ref.current;

    if (currentRef) {
      if (currentRef.classList.contains('reveal')) {
        observer.observe(currentRef);
      }

      const revealElements = currentRef.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (currentRef) {
        if (currentRef.classList.contains('reveal')) {
          observer.unobserve(currentRef);
        }
        const revealElements = currentRef.querySelectorAll('.reveal');
        revealElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return ref;
}
