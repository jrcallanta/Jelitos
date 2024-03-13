import React from "react";
import MediaPlayer from "./MediaPlayer";
import MediaZoomItem from "./MediaZoomItem";

const Media = ({ mediaObject, ...props }) => {
    switch (mediaObject.type) {
        case "youtube": {
            return <MediaPlayer mediaObject={mediaObject} />;
        }
        default: {
            return <MediaZoomItem mediaObject={mediaObject} />;
        }
    }
};

export default Media;
