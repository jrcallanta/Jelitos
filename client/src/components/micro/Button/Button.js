import { useCallback, useRef } from "react";
import "../../../styles/css/components-micro/Button.css";

function Button(props) {
    const buttonRef = useRef(null);
    const { onClick, href, download } = props;

    const handleClick = useCallback(
        (e) => {
            if (onClick) onClick();
            else if (href) buttonRef.current.querySelector("a[href]").click();
            else if (download)
                buttonRef.current.querySelector("a[download]").click();
        },
        [buttonRef, onClick, href, download]
    );

    const StartIcon = props.startIcon ? props.startIcon : null;
    let startIconClass = "icon icon--start";
    if (props.startIconOnHover) startIconClass += " icon--showOnHover";

    const EndIcon = props.endIcon ? props.endIcon : null;
    let endIconClass = "icon icon--end";
    if (props.endIconOnHover) endIconClass += " icon--showOnHover";

    return (
        <button
            className={props.className || "Button " + props.modifier}
            onClick={handleClick}
            ref={buttonRef}
        >
            {StartIcon && (
                <StartIcon
                    clipId={props.startIconClipPath}
                    className={startIconClass}
                    style={{
                        "--clip-path": `url('#${props.startIconClipPath}')`,
                    }}
                />
            )}
            {props.children}
            {EndIcon && (
                <EndIcon
                    clipId={props.endIconClipPath}
                    className={endIconClass}
                    style={{
                        "--clip-path": `url('#${props.endIconClipPath}')`,
                    }}
                />
            )}
            {href && (
                <a href={href} hidden target={"_blank"} rel='noreferrer'>
                    {href}
                </a>
            )}
            {download && (
                <a
                    href={download}
                    download
                    hidden
                    target={"_blank"}
                    rel='noreferrer'
                >
                    {download}
                </a>
            )}
        </button>
    );
}

export default Button;
