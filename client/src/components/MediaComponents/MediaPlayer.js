import { useCallback, useRef } from "react";
import Youtube from "react-youtube";
import "../../styles/css/components/MediaComponents/MediaPlayer.css";

function MediaPlayer({ id, mediaObject, onReady, className }) {
    const mediaPlayerRef = useRef(null);

    const handleReady = useCallback(() => {
        if (mediaPlayerRef?.current) {
            mediaPlayerRef.current
                .querySelector(".player iframe")
                .classList.add("loaded");
        }
        if (onReady) onReady();
    }, [mediaPlayerRef]);

    return (
        <div
            id={id}
            className={`${className || ""} MediaPlayer`}
            ref={mediaPlayerRef}
        >
            <Youtube
                className='player youtube'
                videoId={mediaObject.videoId}
                onReady={handleReady}
                opts={{
                    height: "auto",
                    width: "100%",
                    allow: "fullscreen",
                    data: "highres",
                    playerVars: {
                        playsinline: 0,
                    },
                }}
            />
        </div>
    );
}

export default MediaPlayer;
