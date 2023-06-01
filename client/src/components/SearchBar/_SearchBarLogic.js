import { useState, useEffect, useRef } from "react";

export const useSearchBarLogic = (props) => {
    const { autoSubmitDelay, onEnter, defaultValue } = props;

    const [isActive, setIsActive] = useState(false);
    const searchBarRef = useRef(null);
    let debouncer = useRef(null);

    useEffect(() => {
        if (autoSubmitDelay && searchBarRef?.current) {
            const target = searchBarRef.current;
            const handleAutoSubmit = () => {
                clearTimeout(debouncer.current);
                debouncer.current = setTimeout(
                    () => onEnter(target.value),
                    autoSubmitDelay
                );
            };
            target.addEventListener("input", handleAutoSubmit);
            return () => target.removeEventListener("input", handleAutoSubmit);
        }
    }, [autoSubmitDelay, onEnter, searchBarRef]);

    useEffect(() => {
        if (defaultValue === undefined) {
            setIsActive(false);
        } else {
            searchBarRef.current.value = defaultValue;
            setIsActive(true);
        }
    }, [defaultValue]);

    useEffect(() => {
        if (searchBarRef && searchBarRef.current) {
            const target = searchBarRef.current;

            const handleEnter = (e) => {
                if (e.key.toLowerCase() === "enter") {
                    e.preventDefault();
                    onEnter(target.value);
                }
            };

            target.addEventListener("keydown", handleEnter);
            return () => target.removeEventListener("keydown", handleEnter);
        }
    }, [searchBarRef, onEnter]);

    const handleSubmit = () => {
        const target = searchBarRef.current;
        onEnter(target.value);
    };

    const searchBarInputClass = isActive
        ? "SearchBar__input active"
        : "SearchBar__input";

    return {
        state: {},
        refs: {
            searchBarRef,
        },
        handlers: {
            handleSubmit,
        },
        classes: {
            searchBarInputClass,
        },
    };
};
