import React, { useState, useCallback } from "react";

import Zoom from "react-medium-image-zoom";
import { BiExitFullscreen } from "react-icons/bi";
import { TfiFaceSad } from "react-icons/tfi";

import "react-medium-image-zoom/dist/styles.css";
import "../../styles/css/components/MediaComponents/MediaZoomItem.css";

const MediaZoomItem = ({ mediaObject, ...props }) => {
    const unzoom = useCallback(
        () => <BiExitFullscreen color='white' size={26} />,
        []
    );

    const [loadState, setLoadState] = useState("LOADING");

    return (
        <div
            id={props.id}
            className={
                "MediaZoomItem" + (loadState == "LOADING" ? " loading" : "")
            }
        >
            <div className='MediaZoomItem__item'>
                {loadState !== "ERROR" && (
                    <Zoom IconUnzoom={unzoom} zoomMargin={24}>
                        <img
                            src={mediaObject.url}
                            alt={mediaObject.alt}
                            onLoad={() => setLoadState("READY")}
                            onError={() => setLoadState("ERROR")}
                        />
                    </Zoom>
                )}

                {loadState == "ERROR" && (
                    <div className='error'>
                        <TfiFaceSad
                            size={240}
                            opacity={0.1}
                            style={{ position: "absolute" }}
                        />
                        <p>Could Not Load Image</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MediaZoomItem;
