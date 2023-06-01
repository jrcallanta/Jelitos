import ProjectSummaryBlock from "../ProjectSummaryBlock/ProjectSummaryBlock.js";

import { useProjectCardLogic } from "./_ProjectCardLogic";
import "../../styles/css/components/ProjectCard.css";

function ProjectCard(props) {
    const {
        handlers: { handleClick, handleImageLoad },
        classes: { imgClassName },
        styles: { vars },
    } = useProjectCardLogic(props);

    return (
        <div className='ProjectCard' style={vars} onClick={handleClick}>
            <div className='ProjectCard__background'>
                <img
                    className={imgClassName}
                    src={props.project.card_image}
                    alt={props.project.card_image}
                    onLoad={handleImageLoad}
                />
            </div>

            <ProjectSummaryBlock
                project={props.project}
                modifiers={"small light noArrowIcon"}
                summaryCharLimit={240}
                hideMedia
            />
        </div>
    );
}

export default ProjectCard;
