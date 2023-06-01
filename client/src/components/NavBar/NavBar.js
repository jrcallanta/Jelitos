import { NavLink } from "react-router-dom";
import NavIcon from "../../assets/NavIcon.svg";
import ResumeButton from "./ResumeButton";

import "../../styles/css/components/NavBar/NavBarResponsive.css";
import { useNavBarLogic } from "./_NavBarLogic";

function NavBar(props) {
    const {
        REFS: { navBarRef, navRef, projectsNavRef, navMobileRef },
        CONSTS: {
            projectNav,
            navBarClassName,
            navBarDataType,
            projectsNavItemClassName,
            projectsListClassName,
            navClassName,
        },
        FUNCS: { toggleShowNav },
    } = useNavBarLogic(props);

    return (
        <div
            className={navBarClassName}
            data-type={navBarDataType}
            ref={navBarRef}
        >
            <div className={"wrapper"}>
                <div className={"NavBar__brand"}>
                    <a href='/'>JELITO_callanta</a>
                </div>

                <div ref={navRef} className={navClassName}>
                    <ul>
                        <li ref={projectsNavRef}>
                            <NavLink
                                className={projectsNavItemClassName}
                                to={"/projects?query="}
                            >
                                PROJECTS
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                className={"NavBar__nav__navItem"}
                                to={"/contact"}
                            >
                                CONTACT
                            </NavLink>
                        </li>

                        <li>
                            <ResumeButton />
                        </li>
                    </ul>

                    <div className={projectsListClassName}>
                        {projectNav?.map((list) => (
                            <ul
                                key={list.category}
                                className={"NavBar__projectsList__categoryList"}
                            >
                                <li
                                    className={
                                        "NavBar__projectsList__categoryList__category"
                                    }
                                >
                                    <NavLink to={list.to}>
                                        {list.category.toUpperCase()}
                                    </NavLink>
                                </li>

                                {list.projectList?.map((project) => (
                                    <li
                                        key={project.title}
                                        className={
                                            "NavBar__projectsList__project"
                                        }
                                    >
                                        <NavLink to={project.to}>
                                            {project.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>

            <div className={"wrapper mobile"}>
                <div className={"NavBar__brand"}>
                    <a href='/'>JELITO_callanta</a>
                </div>

                <div className={"NavBar__navIcon"} onClick={toggleShowNav}>
                    <img src={NavIcon} alt={"NavIcon"} />
                </div>

                <div className={navClassName} ref={navMobileRef}>
                    <ul>
                        <li>
                            <NavLink
                                className={projectsNavItemClassName}
                                to={"/projects?query="}
                            >
                                PROJECTS
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                className={"NavBar__nav__navItem"}
                                to={"/contact"}
                            >
                                CONTACT
                            </NavLink>
                        </li>

                        <li>
                            <ResumeButton mobile />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
