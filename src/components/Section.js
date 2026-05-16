import React, { useEffect, useRef, useState } from 'react';

const Section = ({ id, title, children, className = '' }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Only animate once
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section id={id} className={`section ${className}`} ref={sectionRef}>
            <div className={`container ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}>
                {title && <h2 className="section-title">{title}</h2>}
                {children}
            </div>
        </section>
    );
};

export default Section;
