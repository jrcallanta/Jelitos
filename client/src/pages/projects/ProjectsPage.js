// Import From React
import { createPortal } from "react-dom";

// Import Components
import VerticalLabel from "../../components/VerticalLabel/VerticalLabel.js";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import NoProjectsFoundCard from "./NoProjectsFoundCard";
import SingleProjectPage from "../single-project/SingleProjectPage";

// Import Styles
import "../../styles/css/pages/projects/ProjectsPageResponsive.css";
import { useProjectsPageLogic } from "./_ProjectsPageLogic";

function ProjectsPage(props) {
    const {
        showModal,
        displayedProject,
        projectList,
        query,
        queryFeedback,
        handleBack,
        handleSearchSubmit,
    } = useProjectsPageLogic(props);

    return (
        <div className='ProjectsPage'>
            {showModal &&
                displayedProject &&
                createPortal(
                    <SingleProjectPage
                        project={displayedProject}
                        onBack={handleBack}
                    />,
                    document.getElementById("project-modal-root")
                )}

            <div className='wrapper'>
                <VerticalLabel text={"PROJECTS"} styleMode='light' />

                <div className='content'>
                    <div className='query'>
                        <SearchBar
                            defaultValue={query}
                            onEnter={handleSearchSubmit}
                            placeholder={"search titles, info, tags, etc..."}
                            autoSubmitDelay={750}
                        />

                        {queryFeedback !== "" && (
                            <p className='query__feedback'>{queryFeedback}</p>
                        )}
                    </div>

                    <div className='table'>
                        {projectList.length > 0 &&
                            projectList.map((project, i) => (
                                <ProjectCard key={i} id={i} project={project} />
                            ))}

                        {query === "" && !projectList.length && (
                            <NoProjectsFoundCard
                                heading='Uh oh!'
                                content='Looks like there was an issue retrieving projects at this time. Please try again later!'
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
