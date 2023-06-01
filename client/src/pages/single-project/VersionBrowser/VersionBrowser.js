import { Routes, Route } from "react-router-dom";
import Content from "../Content/Content";
import { NavLink, Navigate } from "react-router-dom";
import "../../../styles/css/pages/single-project/VersionBrowserResponsive.css";
import { useVersionBrowserLogic } from "./_VersionBrowserLogic";

function VersionBrowser(props) {
    const { passedRef, versions } = props;
    const {
        state: { params },
        handlers: { toggleDropDown },
        classes: { versionOptionClassName },
    } = useVersionBrowserLogic(props);

    return (
        <div className='VersionBrowser' ref={passedRef}>
            <div className='versionSelector'>
                <div className='dropDownButton' onClick={toggleDropDown}>
                    {"<"}
                </div>
                <div className='versionOptions'>
                    <div className='scroller'>
                        {versions.map((ver) => (
                            <NavLink
                                key={ver.no}
                                to={ver.no}
                                replace={true}
                                className={versionOptionClassName}
                            >
                                {ver.no}
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className='versionBar'></div>
            </div>

            <Routes>
                {versions.map((ver) => (
                    <Route
                        key={ver.no}
                        path={ver.no}
                        element={<Content content={ver.content} />}
                    />
                ))}

                {/* Only redirect if on route with projectId param */}
                {params.id && (
                    <Route
                        path={"/"}
                        element={
                            <Navigate to={versions[0].no} replace={true} />
                        }
                    />
                )}
            </Routes>
        </div>
    );
}

export default VersionBrowser;
