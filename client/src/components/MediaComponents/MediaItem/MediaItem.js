import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { usePreventScrollOnHover } from "../../../tools/customHooks.js";

import MediaPlayer from "../MediaPlayer.js";
import MediaModal from "../MediaModal/MediaModal.js";

import "../../../styles/css/components/MediaComponents/MediaItem.css";

function MediaItem(props) {
    const wrapperRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);
    const [showMediaModal, setShowMediaModal] = useState(false);

    const onReady = () => setIsLoading(false);

    let childDiv;
    switch (props.mediaObject?.type) {
        case "youtube": {
            childDiv = VideoMediaItem(props, onReady);
            break;
        }
        case "google-drive": {
            childDiv = GoogleDriveMedia(props, onReady);
            break;
        }
        default: {
            childDiv = ImageMediaItem(props, onReady);
            break;
        }
    }

    let className = isLoading ? "MediaItem loading" : "MediaItem";

    return (
        <>
            {showMediaModal &&
                props.mediaObject &&
                createPortal(
                    <MediaModal
                        mediaObject={childDiv}
                        onClose={() => setShowMediaModal(false)}
                    />,
                    document.getElementById("media-modal-root")
                )}
            <div
                className={className}
                ref={wrapperRef}
                onClick={() => setShowMediaModal(true)}
            >
                {childDiv}
            </div>
        </>
    );
}

export default MediaItem;

/*** MediaItem Sub-Components **************************/

function VideoMediaItem(props, superReady) {
    const onReady = () => {
        superReady();
        if (props.onReady) props.onReady();
    };

    return (
        <MediaPlayer
            id={props.id}
            mediaObject={props.mediaObject}
            onReady={onReady}
            className={`MediaItem__item video ${props.className || ""}`}
        />
    );
}

function ImageMediaItem(props, superReady) {
    const imgRef = useRef(null);

    const onReady = useCallback(() => {
        superReady();
    }, [superReady]);

    useEffect(() => {
        if (imgRef?.current) {
            imgRef.current.addEventListener("error", () => {
                imgRef.current.parentNode.classList.add("error");
                onReady();
            });
        }
    }, [imgRef, onReady]);

    const vars = !props.mediaObject.url
        ? { "--width": props.mediaObject.width || "none" }
        : null;

    return (
        <div
            id={props.id}
            className={"MediaItem__item image " + (props.className || "")}
            style={vars}
            onClick={props.onClick}
        >
            <img
                ref={imgRef}
                src={props.mediaObject.url}
                alt={props.mediaObject.alt}
                onLoad={onReady}
            />
        </div>
    );
}

function GoogleDriveMedia(props, superReady) {
    const ref = usePreventScrollOnHover(".SingleProjectPage");

    const vars = {
        "--color": props.mediaObject.color || 260,
        "--width": props.mediaObject.url || props.mediaObject.width || "none",
    };

    return (
        <div
            ref={ref}
            id={props.id}
            className={
                "MediaItem__item google-drive " + (props.className || "")
            }
            style={vars}
            onClick={props.onClick}
        >
            <iframe
                title={props.mediaObject.url}
                src={props.mediaObject.url}
                width='640'
                height='480'
                allow='autoplay'
            ></iframe>
        </div>
    );
}
