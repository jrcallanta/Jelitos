import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import MediaModal from "../MediaModal/MediaModal.js";

export const useMediaScrollerLogic = (media) => {
    const mediaScrollerRef = useRef(null);
    const mediaWindowRef = useRef(null);
    const mediaRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    let debouncer = useRef(null);

    const handleResize = useCallback(() => {
        clearTimeout(debouncer.current);
        debouncer.current = setTimeout(() => {
            handleMediaPlayerOverflow();
        }, 400);
    }, []);

    const handleMediaPlayerOverflow = () => {
        if (mediaWindowRef?.current && mediaRef?.current) {
            const mediaScrollerMedia = mediaRef.current;
            const mediaPlayerItems =
                mediaScrollerMedia.querySelectorAll(".MediaPlayer");
            if (mediaPlayerItems.length) {
                const mediaScrollerWindowRect =
                    mediaWindowRef.current.getBoundingClientRect();
                const padding = Number(
                    getComputedStyle(mediaScrollerMedia).padding.slice(0, -2)
                );

                mediaPlayerItems.forEach((item) => {
                    item.style.minWidth = `${
                        mediaScrollerWindowRect.width - 4 * padding
                    }px`;
                });
            }
        }
    };

    const handleClick = (index) => {
        console.log(media[index]);
        mediaRef?.current
            .querySelector(`.MediaItem > [id='mi${index}']`)
            .scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        setSelectedIndex(index);
    };

    // Effect used to update resizing of media items and their lengths/positions
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    // Effect used to update resizing of media items when media items change
    useEffect(() => {
        handleResize();
    }, [media, handleResize]);

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(entry.target.getAttribute("id").slice(2));
                setSelectedIndex(
                    Number(entry.target.getAttribute("id").slice(2))
                );
            }
        });
    };

    const observerOptions = useMemo(() => {
        return {
            root: mediaWindowRef.current,
            rootMargin: "0px",
            threshold: 0.6,
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );

        const mediaScroller = mediaScrollerRef.current;

        if (mediaScroller)
            mediaScroller
                .querySelectorAll(".MediaItem .MediaItem__item")
                .forEach((mediaItem) => observer.observe(mediaItem));

        return () => {
            if (mediaScroller)
                mediaScroller
                    .querySelectorAll(".MediaItem .MediaItem__item")
                    .forEach((mediaItem) => observer.observe(mediaItem));
        };
    }, [mediaScrollerRef, observerOptions]);

    return {
        mediaRef,
        mediaWindowRef,
        mediaScrollerRef,
        selectedIndex,
        handleClick,
        handleResize,
    };
};
