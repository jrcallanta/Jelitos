import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// Import From Custom
import Requests from "../../tools/Requests";
import {
    useSpotlightEffect,
    useParamResponder,
    useSearchResponder_v2 as useSearchResponder,
} from "./_hooks.js";

export const useProjectsPageLogic = (props) => {
    const navigate = useNavigate();
    const [projectList, setProjectList] = useState([]);
    const [displayedProject, setDisplayedProject] = useState(null);
    const [showModal, setShowModal] = useState(!!props.showModal);

    const handleSearchSubmit = (text) => {
        if (text !== "") {
            const search = text
                .replaceAll("#", " #")
                .split(" ")
                .filter((token) => token !== "" && token !== "#")
                .reduce(
                    (accum, curr) => {
                        if (curr.startsWith("#"))
                            accum.tags.push(curr.slice(1));
                        else
                            accum.query = accum.query
                                ? `${accum.query} ${curr}`
                                : curr;

                        return accum;
                    },
                    { tags: [], query: "" }
                );

            navigate(
                `/projects?query=${search.query.replaceAll(
                    " ",
                    "%20"
                )}&tags=${search.tags.join(",")}`
            );
        } else {
            navigate(`/projects?query=&tags=`);
        }
    };

    const handleBack = () => {
        setShowModal(false);
        navigate("..");
    };

    const handleResetList = useCallback(() => {
        Requests.GET("/api/projects")
            .then((res) => res.json())
            .then((data) => {
                if (!data.error) {
                    setProjectList(data.projects);
                } else {
                    // setQueryFeedback("Projects could not be retrieved.")
                }
            });
    }, []);

    // Use URL Search Listener when queries change
    const { query, queryFeedback } = useSearchResponder(
        handleResetList,
        setShowModal,
        setProjectList
    );

    // Initialize Project List
    useEffect(() => {
        handleResetList();
    }, [handleResetList]);

    // Use Spotlight Effect when selecting project to view
    useSpotlightEffect(showModal, displayedProject?.card_hue);

    // Use URL Listener when Project.ID passed
    useParamResponder(props.showModal, setShowModal, setDisplayedProject);

    return {
        showModal,
        displayedProject,
        projectList,
        query,
        queryFeedback,
        handleBack,
        handleSearchSubmit,
    };
};
