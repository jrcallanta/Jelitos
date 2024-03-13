import { useRef } from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/micro/Button/Button.js";
import MediaScroller from "../../../components/MediaComponents/MediaScroller.js";

import "../../../styles/css/pages/single-project/PrefaceResponsive.css";
import "../../../styles/css/util/OverFlowScroller.css";
import { useAnimateScollOnOverflow } from "../../../tools/customHooks";

function Preface({ tags, title, period, intro, links, media }) {
    const titleRef = useRef(null);
    const titleTextRef = useRef(null);
    useAnimateScollOnOverflow(titleRef, titleTextRef);

    return (
        <div className='Preface section'>
            <div className='heading'>
                <div className='heading__tags'>
                    {tags.map((tag, i) => (
                        <Link
                            key={i}
                            className={"heading__tags__tag"}
                            to={`/projects?tags=${tag}`}
                        >
                            #{tag}
                        </Link>
                    ))}
                </div>
                <div className='heading__title' ref={titleRef}>
                    <h1 className='heading__title__text' ref={titleTextRef}>
                        {title}
                    </h1>
                </div>
                <div className='heading__period'>
                    {new Date(period.start).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                    })}{" "}
                    -{" "}
                    {new Date(period.end).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                    })}
                </div>
            </div>

            <div className='section__subsections'>
                {intro?.map((subsection, i) => (
                    <div
                        key={i}
                        className='subsection'
                        data-layout-x={subsection._layout?.x}
                    >
                        <h3 className='subsection__title'>
                            {subsection.subsection_title}
                        </h3>
                        <p className='subsection__content'>
                            {subsection.subsection_content}
                        </p>
                    </div>
                ))}
            </div>

            {links && (
                <div className='section__sources'>
                    <div className='links'>
                        {links?.liveDemo && (
                            <Button href={links.liveDemo}>live demo</Button>
                        )}
                        {links?.repo && (
                            <Button href={links.repo} modifier={"outlined"}>
                                view code
                            </Button>
                        )}
                    </div>

                    {media && <MediaScroller media={media} />}
                </div>
            )}
        </div>
    );
}

export default Preface;
