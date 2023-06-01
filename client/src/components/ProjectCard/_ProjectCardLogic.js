import { useState } from "react";
import { useNavigate } from "react-router";
import { createPalette } from "../../tools/helperFunctions.js";

export const useProjectCardLogic = (props) => {
    const [isImagLoaded, setIsImageLoaded] = useState(false);
    const navigate = useNavigate();

    const imgClassName = !isImagLoaded
        ? "ProjectCard__background__image"
        : "ProjectCard__background__image show";

    const { color, colorDark, colorShadow } = createPalette(
        props.project.card_hue
    );

    const vars = {
        "--clr": color,
        "--clr-drk": colorDark,
        "--clr-shdw": colorShadow,
        "--dly": props.id * 5 + "0ms",
    };

    const handleClick = (e) => {
        if (!e.target.matches(".details__heading__tags > *"))
            navigate(`/projects/${props.project._id}`);
    };

    const handleImageLoad = () => setIsImageLoaded(true);

    return {
        handlers: {
            handleClick,
            handleImageLoad,
        },
        classes: {
            imgClassName,
        },
        styles: {
            vars,
        },
    };
};
