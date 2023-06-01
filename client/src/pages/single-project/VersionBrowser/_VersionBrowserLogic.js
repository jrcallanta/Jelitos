import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

export const useVersionBrowserLogic = (props) => {
    const { versions } = props;
    const params = useParams();
    const [dropDownIsShown, setDropDownIsShown] = useState(false);
    const [currentVersion, setCurrentVersion] = useState(null);

    const toggleDropDown = () => {
        setDropDownIsShown((prev) => !prev);
    };

    const closeDropDown = useCallback(() => {
        document.querySelector(".scroller").style.transform = `translateY(-${
            currentVersion * 3
        }rem)`;
        document.querySelector(".versionOptions").style.height = "2rem";
        document
            .querySelector(".dropDownButton")
            .classList.remove("active", "rotate");

        setDropDownIsShown(() => false);
    }, [currentVersion]);

    const showDropDown = useCallback(() => {
        document.querySelector(".scroller").style.transform = "";
        document.querySelector(".versionOptions").style.height =
            3 * versions.length + "rem";
        document
            .querySelector(".dropDownButton")
            .classList.add("rotate", "active");

        return () => closeDropDown();
    }, [versions, closeDropDown]);

    const versionOptionClassName = ({ isActive }) =>
        isActive ? "versionOptions__option active" : "versionOptions__option";

    useEffect(() => {
        document
            .querySelectorAll(".versionOptions__option")
            .forEach((option, i) =>
                option.addEventListener("click", () => setCurrentVersion(i))
            );
    }, []);

    useEffect(() => {
        const versionNums = versions.map((v) => v.no);
        if (params.version && versionNums.includes(params.version)) {
            setCurrentVersion(versionNums.indexOf(params.version));
        }
    }, [params, versions]);

    useEffect(() => {
        if (dropDownIsShown) showDropDown();
        else closeDropDown();
    }, [dropDownIsShown, showDropDown, closeDropDown]);

    useEffect(() => {
        closeDropDown();
    }, [currentVersion, closeDropDown]);

    return {
        state: {
            params,
        },
        handlers: {
            toggleDropDown,
        },
        classes: {
            versionOptionClassName,
        },
    };
};
