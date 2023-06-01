import Preface from "./Preface/Preface";
import VersionBrowser from "./VersionBrowser/VersionBrowser.js";
import ArrowIcon from "../../components/icons/ArrowIcon.js";

import "../../styles/css/pages/single-project/SingleProjectPageResponsive.css";
import { useSingleProjectPageLogic } from "./_SingleProjectPageLogic";

function SingleProjectPage(props) {
    const { project } = props;
    const {
        handlers: { handleButtonClick, handleBack },
        refs: { pageRef, versionBrowserRef },
        styles: { colorVars },
    } = useSingleProjectPageLogic(props);

    return (
        <>
            <div id='media-modal-root' style={colorVars}></div>
            <div className='SingleProjectPage' style={colorVars} ref={pageRef}>
                <div className='navigationButton' onClick={handleButtonClick}>
                    <div className='navigationButton__icon'>
                        <ArrowIcon id='navigation-button' />
                    </div>
                </div>
                <div className='wrapper'>
                    <div className='actions'>
                        <button className='backButton' onClick={handleBack}>
                            <p>{"back"}</p>
                        </button>
                    </div>

                    <div className='content'>
                        <Preface
                            tags={project.tags}
                            title={project.title}
                            period={project.period}
                            intro={
                                project.summary
                                    ? [
                                          {
                                              subsection_title: "Summary",
                                              subsection_content:
                                                  project.summary,
                                          },
                                          ...project.details.intro,
                                      ]
                                    : project.details.intro
                            }
                            links={project.links}
                            media={project.details.media}
                        />

                        {project.details.versions && (
                            <VersionBrowser
                                passedRef={versionBrowserRef}
                                versions={project.details.versions}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProjectPage;
