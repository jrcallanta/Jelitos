import { useEffect, useMemo, useRef } from "react";

export const useVerticalLabeledSectionLogic = (props) => {
    const sectionRef = useRef(null);

    const callback = (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting)
            entry.target.setAttribute("data-observed", true);
    };

    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: "0px",
            threshold: 0.4,
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        const section = sectionRef.current;
        if (section) observer.observe(section);
        return () => {
            if (section) observer.unobserve(section);
        };
    }, [sectionRef, options]);

    return {
        sectionRef,
    };
};
