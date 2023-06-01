import { Link } from "react-router-dom";

import { ReactComponent as ArrowClip } from "../../assets/ArrowIconClip.svg";
import Button from "../micro/Button/Button.js";
import MediaItem from "../MediaComponents/MediaItem/MediaItem.js";

import { useProjectSummaryBlockLogic } from "./_ProjectSummaryBlockLogic.js";
import "../../styles/css/components/ProjectSummaryBlockResponsive.css";

function ProjectSummaryBlock(props) {
    const {
        state: { displayedTags, showMoreTags },
        handlers: { handleShowMoreTags },
        refs: { titleRef, titleTextRef },
        classes: { projectSummaryBlockClassName },
    } = useProjectSummaryBlockLogic(props);

    return (
        <div className={projectSummaryBlockClassName} tabIndex={"1"}>
            <div className='details'>
                <div ref={titleRef} className='details__heading'>
                    <div className='details__heading__tags'>
                        {displayedTags.map((tag) => (
                            <Link
                                key={tag}
                                to={`/projects?tags=${tag}`}
                                tabIndex={-1}
                                className={"details__heading__tags__tag"}
                            >
                                #{tag}
                            </Link>
                        ))}
                        {props.project.tags.length > displayedTags.length &&
                            !showMoreTags && (
                                <p
                                    className='details__heading__tags__more'
                                    onClick={handleShowMoreTags}
                                >
                                    (
                                    {props.project.tags.length -
                                        displayedTags.length}{" "}
                                    more)
                                </p>
                            )}
                    </div>

                    {!props.hideMedia && props.project.details?.media && (
                        <div className='media-mobile'>
                            <MediaItem
                                type={props.project.details.media[0].type}
                                mediaObject={props.project.details.media[0]}
                            />
                        </div>
                    )}

                    <Link
                        ref={titleTextRef}
                        className='details__heading__title'
                        to={`/projects/${props.project._id}`}
                    >
                        <span>{props.project.title}</span>
                        <div className='arrowIcon'>
                            <ArrowClip />
                        </div>
                    </Link>

                    <p className='details__heading__period'>
                        {new Date(
                            props.project.period.start
                        ).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                        })}{" "}
                        -{" "}
                        {new Date(props.project.period.end).toLocaleDateString(
                            "en-US",
                            {
                                month: "short",
                                year: "numeric",
                            }
                        )}
                    </p>
                </div>

                <div className='details__summary'>
                    <span>
                        {props.summaryCharLimit &&
                        props.project.summary?.length > props.summaryCharLimit
                            ? `${props.project.summary.slice(
                                  0,
                                  props.summaryCharLimit
                              )}...`
                            : props.project.summary}
                    </span>
                </div>

                <div className='actions'>
                    {props.project.links?.liveDemo && (
                        <Button href={props.project.links.liveDemo}>
                            live demo
                        </Button>
                    )}
                    {props.project.links?.repo && (
                        <Button
                            href={props.project.links.repo}
                            modifier={"outlined"}
                        >
                            view code
                        </Button>
                    )}
                </div>
            </div>

            {!props.hideMedia && props.project.details?.media && (
                <div className='media'>
                    <MediaItem
                        type={props.project.details.media[0].type}
                        mediaObject={props.project.details.media[0]}
                    />
                </div>
            )}
        </div>
    );
}

export default ProjectSummaryBlock;
