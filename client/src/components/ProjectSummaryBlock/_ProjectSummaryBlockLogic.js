import { useRef, useState } from "react";
import { useAnimateScollOnOverflow } from "../../tools/customHooks.js";

export const useProjectSummaryBlockLogic = (props) => {
    const DISPLAYED_TAGS_LIMIT = 3;
    const [showMoreTags, setShowMoreTags] = useState(false);
    const titleRef = useRef(null);
    const titleTextRef = useRef(null);

    useAnimateScollOnOverflow(titleRef, titleTextRef);

    const handleShowMoreTags = () => setShowMoreTags(true);

    const projectSummaryBlockClassName =
        "ProjectSummaryBlock " + (props.modifiers || "");

    const displayedTags = showMoreTags
        ? props.project.tags
        : props.project.tags.filter((_, index) => index < DISPLAYED_TAGS_LIMIT);

    return {
        state: {
            displayedTags,
            showMoreTags,
        },
        handlers: {
            handleShowMoreTags,
        },
        refs: {
            titleRef,
            titleTextRef,
        },
        classes: {
            projectSummaryBlockClassName,
        },
    };
};
