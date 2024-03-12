import React, { useState, useRef, useEffect, useCallback } from "react";

import Zoom from "react-medium-image-zoom";
import { BiExitFullscreen } from "react-icons/bi";

import "react-medium-image-zoom/dist/styles.css";
import "../../../styles/css/components/MediaComponents/MediaZoomItem.css";

const MediaZoomItem = ({ mediaObject, ...props }) => {
    const unzoom = useCallback(
        () => <BiExitFullscreen color='white' size={26} />,
        []
    );

    const [isReady, setIsReady] = useState(false);
    const imgRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const addError = () => {
            if (wrapperRef?.current) wrapperRef.current.classList.add("error");
            setIsReady(true);
        };

        if (imgRef?.current) imgRef.current.addEventListener("error", addError);
        return () => imgRef?.current?.removeEventListener("error", addError);
    }, [imgRef, wrapperRef]);

    const handleClick = useCallback(
        (e) => {
            if (!isReady) e.stopPropagation();
        },
        [isReady]
    );

    return (
        <div
            id={props.id}
            className={"MediaZoomItem" + (!isReady ? " loading" : "")}
            onClick={handleClick}
            ref={wrapperRef}
        >
            <div className='MediaZoomItem__item'>
                <Zoom IconUnzoom={unzoom} zoomMargin={24}>
                    <img
                        src={mediaObject.url}
                        alt={mediaObject.alt}
                        ref={imgRef}
                        onLoad={() => setIsReady(true)}
                    />
                </Zoom>
                {/* <img
                    ref={imgRef}
                    src={mediaObject.url}
                    alt={mediaObject.alt}
                    onLoad={markReady}
                /> */}
            </div>
        </div>
    );
};

export default MediaZoomItem;
