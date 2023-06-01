import { useCallback, useEffect, useRef } from "react";
import { createPalette } from "../../tools/helperFunctions";
import { usePreventScrollBehindModal } from "../../tools/customHooks";

export const useSingleProjectPageLogic = (props) => {
    const { project, onBack } = props;
    const pageRef = useRef(null);
    const versionBrowserRef = useRef(null);

    const { color, colorDark, colorShadow } = createPalette(project.card_hue);
    const colorVars = {
        "--clr": color,
        "--clr-drk": colorDark,
        "--clr-shdw": colorShadow,
    };

    const handleScroll = useCallback(() => {
        if (versionBrowserRef?.current && pageRef?.current) {
            if (
                versionBrowserRef.current.getBoundingClientRect().top <
                window.innerHeight
            )
                pageRef.current
                    ?.querySelector(".navigationButton")
                    .classList.add("show");
            else
                pageRef.current
                    ?.querySelector(".navigationButton")
                    .classList.remove("show");
        }
    }, [versionBrowserRef, pageRef]);

    const handleBack = () => {
        const page = document.querySelector(".SingleProjectPage");
        page.addEventListener("animationend", () => onBack());
        page.classList.add("hide");
    };

    const handleButtonClick = useCallback(() => {
        pageRef?.current?.scrollTo({ top: 0, behavior: "smooth" });
        // versionBrowserRef?.current.scrollTo({top: 0, behavior: 'smooth'})
    }, [pageRef]);

    usePreventScrollBehindModal("project-modal-root");

    useEffect(() => {
        let page = pageRef?.current;
        if (page) {
            page.addEventListener("scroll", handleScroll);
            return () => page?.removeEventListener("scroll", handleScroll);
        }
    }, [pageRef, handleScroll]);

    return {
        handlers: {
            handleBack,
            handleButtonClick,
        },
        refs: {
            pageRef,
            versionBrowserRef,
        },
        styles: {
            colorVars,
        },
    };
};
