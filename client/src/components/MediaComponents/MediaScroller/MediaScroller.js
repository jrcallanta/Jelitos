import MediaItem from "../MediaItem/MediaItem";

import { useMediaScrollerLogic } from "./_MediaScrollerLogic";
import "../../../styles/css/components/MediaComponents/MediaScroller.css";

function MediaScroller({ media }) {
    const {
        mediaRef,
        mediaWindowRef,
        mediaScrollerRef,
        selectedIndex,
        handleClick,
        handleResize,
    } = useMediaScrollerLogic(media);

    return (
        <div className='MediaScroller' ref={mediaScrollerRef}>
            <div className='window' ref={mediaWindowRef}>
                <div className='media' ref={mediaRef}>
                    {media.map((mediaObject, i) => {
                        const className = i === selectedIndex ? "active" : "";

                        return (
                            <MediaItem
                                key={i}
                                id={"mi" + i}
                                className={className}
                                mediaObject={mediaObject}
                                onReady={handleResize}
                            />
                        );
                    })}
                    <div className='spacer'></div>
                </div>
            </div>

            <div className='controller'>
                {media.map((_, i) => {
                    const className =
                        i === selectedIndex
                            ? "controller__selector active"
                            : "controller__selector";

                    return (
                        <div
                            key={"ctr" + i}
                            className={className}
                            onClick={() => handleClick(i)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default MediaScroller;
