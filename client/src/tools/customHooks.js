import { useEffect, useCallback, useRef } from "react";

export const useSpacer = (params) => {
    const navBar = document.querySelector(params.divSelector);
    const spacerHeight = navBar?.getBoundingClientRect().height;
    console.log(navBar);
    console.log(spacerHeight);

    const handleNavBarSpacer = useCallback(() => {
        const app = document.querySelector(params.parentSelector);
        const content = document.querySelector(params.beforeChildSelector);

        let spacer = document.querySelector("." + params.spacerClass);
        if (!spacer) {
            spacer = document.createElement("div");
            spacer.className = params.spacerClass;
            app.insertBefore(spacer, content);
        }

        spacer.style.height = spacerHeight + "px";
    }, [spacerHeight, params]);

    useEffect(() => {
        handleNavBarSpacer();

        window.addEventListener("resize", handleNavBarSpacer);
        return () => window.removeEventListener("resize", handleNavBarSpacer);
    }, [handleNavBarSpacer]);
};

export const useListener = (type, ref, callback) => {
    useEffect(() => {
        if (ref && ref.current) {
            const target = ref.current;

            target.addEventListener(type, callback);
            return () => target.removeEventListener(type, callback);
        }
    }, [type, ref, callback]);
};

export const useOnClickOutsideOf = (params) => {
    useEffect(() => {
        const { navBarRef, navMobileRef, showNavMobile, setShowNavMobile } =
            params;

        const handleClick = (e) => {
            console.log(e.target);
            if (
                navBarRef &&
                navBarRef.current &&
                !navBarRef.current.contains(e.target)
            )
                setShowNavMobile(false);
        };

        if (navMobileRef && navMobileRef.current) {
            if (showNavMobile) {
                document.addEventListener("touchstart", handleClick);
                document.addEventListener("mousedown", handleClick);
                return () => {
                    document.removeEventListener("mousedown", handleClick);
                    document.removeEventListener("touchstart", handleClick);
                };
            } else {
                document.removeEventListener("mousedown", handleClick);
                document.removeEventListener("touchstart", handleClick);
            }
        } else {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("touchstart", handleClick);
        }
    }, [params]);
};

export const usePreventScrollBehindModal = (rootLayer) => {
    useEffect(() => {
        const layer = document.getElementById(rootLayer);
        let pointerDef = layer.style.pointerEvents;
        layer.style.pointerEvents = "all";

        const scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;

        return () => {
            layer.style.pointerEvents = pointerDef;

            const scrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        };
    }, [rootLayer]);
};

export const usePreventScrollOnHover = (elementSelector) => {
    const hoverItemRef = useRef(null);

    useEffect(() => {
        if (hoverItemRef?.current) {
            const item = hoverItemRef.current;

            const handleMouseLeave = () => {
                document.querySelector(elementSelector).style.overflowY = "";
            };

            const handleMouseEnter = (event) => {
                document.querySelector(elementSelector).style.overflowY =
                    "hidden";

                event.target.removeEventListener(
                    "mouseleave",
                    handleMouseLeave
                );
                event.target.addEventListener("mouseleave", handleMouseLeave);
            };

            item.addEventListener("mouseenter", handleMouseEnter);
            return () =>
                item.removeEventListener("mouseenter", handleMouseEnter);
        }
    }, [hoverItemRef, elementSelector]);

    return hoverItemRef;
};

export const useAnimateScollOnOverflow = (containerRef, itemRef) => {
    const handleItemOverflow = useCallback(() => {
        if (itemRef?.current && containerRef?.current) {
            const containerDiv = containerRef.current;
            const itemDiv = itemRef.current;

            const overlap =
                containerDiv.getBoundingClientRect().width /
                itemDiv.getBoundingClientRect().width;

            if (overlap < 1) {
                itemDiv.classList.add("animate");
                itemDiv.style.animationDuration =
                    itemDiv.getBoundingClientRect().width / 80 + "s";
                let double = containerDiv.querySelector(".double");
                if (!double) {
                    double = document.createElement(itemDiv.tagName);
                    double.innerHTML = itemDiv.innerHTML;
                    double.className = itemDiv.className.replace(
                        "animate",
                        "double"
                    );
                    double.style.padding = getComputedStyle(itemDiv).padding;
                    itemDiv.appendChild(double);
                }
            } else {
                itemDiv.classList.remove("bounceScroll");
                itemDiv.style.animationDuration = "";
                itemDiv.classList.remove("animate");
                let double = containerDiv.querySelector(".double");
                if (double) itemDiv.removeChild(double);
            }
        }
    }, [itemRef, containerRef]);

    useEffect(() => {
        handleItemOverflow();
        window.addEventListener("resize", handleItemOverflow);
        return () => window.removeEventListener("resize", handleItemOverflow);
    }, [itemRef, containerRef, handleItemOverflow]);

    return handleItemOverflow;
};
