import { useState, useEffect, useRef } from "react";
import { useListener } from "../../tools/customHooks";
import { useLocation } from "react-router-dom";
import Requests from "../../tools/Requests";

export const useNavBarLogic = (props) => {
    /* Navigator */
    const location = useLocation();

    /* Refs */
    const navRef = useRef(null);
    const navBarRef = useRef(null);
    const navMobileRef = useRef(null);
    const projectsNavRef = useRef(null);

    /* States */
    const [, setScrollPos] = useState(window.pageYOffset);
    const [showProjectsList, setShowProjectsList] = useState(false);
    const [showFixedNavBar, setShowFixedNavBar] = useState(false);
    const [showNavMobile, setShowNavMobile] = useState(false);
    const [retrievedProjects, setRetrievedProjects] = useState([]);
    const [devProjects, setDevProjects] = useState([]);
    const [desProjects, setDesProjects] = useState([]);
    const [projectNavItems, setProjectNavItems] = useState(null);

    /* Effects */
    // Retrieve Projects
    useEffect(() => {
        Requests.GET("/api/projects")
            .then((res) => res.json())
            .then((data) => {
                if (!data.error) setRetrievedProjects(data.projects);
            });
    }, []);

    // Prepare Projects By Category
    useEffect(() => {
        const dev = retrievedProjects
            .filter((project) =>
                project.tags
                    .map((tag) => tag.toLowerCase())
                    .includes("development")
            )
            .sort((project) => project.period.end);

        const des = retrievedProjects
            .filter((project) =>
                project.tags.map((tag) => tag.toLowerCase()).includes("design")
            )
            .sort((project) => project.period.end);

        setDevProjects(dev);
        setDesProjects(des);
    }, [retrievedProjects]);

    // Initialize ProjectNav
    useEffect(() => {
        const devProjectList = !devProjects.length
            ? null
            : devProjects
                  .slice(0, Math.min(5, devProjects.length))
                  .map((project) => ({
                      title: project.title,
                      to: `/projects/${project._id}`,
                  }));

        const desProjectList = !desProjects.length
            ? null
            : desProjects
                  .slice(0, Math.min(5, desProjects.length))
                  .map((project) => ({
                      title: project.title,
                      to: `/projects/${project._id}`,
                  }));

        const navItems = [];
        if (devProjectList?.length > 0)
            navItems.push({
                category: "development",
                to: "/projects?tags=development",
                projectList: devProjectList,
            });

        if (desProjectList?.length > 0)
            navItems.push({
                category: "design",
                to: "/projects?tags=design",
                projectList: desProjectList,
            });

        if (devProjectList?.length > 0 || desProjectList?.length > 0)
            navItems.push({
                category: "see all",
                to: "/projects?query=",
            });

        setProjectNavItems(navItems);
    }, [devProjects, desProjects]);

    useEffect(() => {
        if (props.fixed) {
            const handleScroll = () => {
                setScrollPos((prev) => {
                    let inlineNavBar = document.querySelector(".NavBar");
                    let fixedNavBar = document.querySelector(
                        ".NavBar[data-type='fixed']"
                    );

                    let currPos = window.pageYOffset;
                    let atTop = !(
                        inlineNavBar.getBoundingClientRect().bottom < 0
                    );
                    let scrolledUp = prev > currPos;

                    if (window.pageYOffset === 0)
                        fixedNavBar.style.display = "none";
                    else if (!atTop && !showFixedNavBar)
                        fixedNavBar.style.display = "block";

                    setShowFixedNavBar(
                        (scrolledUp && !atTop) || (atTop && showFixedNavBar)
                    );

                    return currPos;
                });
            };

            // handleScroll()

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [showFixedNavBar, props.fixed]);

    useEffect(() => {
        const handleClick = (e) => {
            if (navBarRef && navBarRef.current) {
                if (!navBarRef.current.contains(e.target))
                    setShowNavMobile(false);
            }
        };

        if (navMobileRef && navMobileRef.current) {
            if (showNavMobile) {
                document.addEventListener("touchstart", handleClick);
                document.addEventListener("mousedown", handleClick);
                return () => {
                    document.removeEventListener("mousedown", handleClick);
                    document.removeEventListener("touchstart", handleClick);
                };
            } else {
                document.removeEventListener("mousedown", handleClick);
                document.removeEventListener("touchstart", handleClick);
            }
        } else {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("touchstart", handleClick);
        }
    }, [navBarRef, navMobileRef, showNavMobile]);

    useListener("mouseover", projectsNavRef, () => {
        if (projectNavItems.length > 0) setShowProjectsList(true);
    });

    useListener("mouseleave", navRef, () => setShowProjectsList(false));

    useEffect(() => {
        setShowProjectsList(false);
        setShowNavMobile(false);
    }, [location]);

    const toggleShowNav = () => {
        setShowNavMobile((prev) => {
            return !prev;
        });
    };

    const navBarClassName = !showFixedNavBar
        ? "NavBar hidden"
        : showProjectsList || showNavMobile
        ? "NavBar floating"
        : "NavBar";

    const navBarDataType = props.fixed ? "fixed" : "default";

    const projectsNavItemClassName = showProjectsList
        ? "NavBar__nav__navItem active"
        : "NavBar__nav__navItem";

    const projectsListClassName = showProjectsList
        ? "NavBar__projectsList show"
        : "NavBar__projectsList";

    const navClassName = showNavMobile ? "NavBar__nav show" : "NavBar__nav";

    return {
        REFS: {
            navBarRef,
            navRef,
            projectsNavRef,
            navMobileRef,
        },
        CONSTS: {
            projectNav: projectNavItems,
            navBarClassName,
            navBarDataType,
            projectsNavItemClassName,
            projectsListClassName,
            navClassName,
        },
        FUNCS: {
            toggleShowNav,
        },
    };
};
