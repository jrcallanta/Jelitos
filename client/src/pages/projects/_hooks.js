import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createPalette } from "../../tools/helperFunctions";
import Requests from "../../tools/Requests";

export const useSpotlightEffect = (trigger, hue) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMousePos = ({ clientX, clientY }) => {
            const x = Math.round((clientX / window.innerWidth) * 100);
            const y = Math.round((clientY / window.innerHeight) * 100);
            setMousePos(() => {
                return { x: `${x}%`, y: `${y}%` };
            });
        };
        window.addEventListener("click", handleMousePos);
        return () => window.removeEventListener("click", handleMousePos);
    }, []);

    useEffect(() => {
        const modal = document.getElementById("project-modal-root");
        modal.style.setProperty("--x", mousePos.x);
        modal.style.setProperty("--y", mousePos.y);

        if (trigger && hue) {
            const { color, colorDark } = createPalette(hue);
            modal.style.setProperty("--clr", color);
            modal.style.setProperty("--clr-drk", colorDark);

            modal.setAttribute("data-project-view", "true");
            return () => {
                modal.setAttribute("data-project-view", "false");
            };
        }
    }, [mousePos, trigger, hue]);
};

export const useParamResponder = (
    showModal,
    setShowModal,
    setDisplayedProject
) => {
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        if (showModal) {
            Requests.GET(`/api/projects/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    if (!data.error) {
                        setDisplayedProject(data.project);
                        setShowModal(true);
                    }
                });
        } else setShowModal(false);
    }, [id, showModal, setShowModal, setDisplayedProject]);
};

export const useSearchResponder_v2 = (
    handleResetList,
    setShowModal,
    setProjectList
) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [query, setQuery] = useState("");
    const [queryFeedback, setQueryFeedback] = useState("");

    useEffect(() => {
        const { search } = location;

        if (search) {
            setShowModal(false);

            const match = search.match(/query=(.*)&tags=(.*)/);

            if (match) {
                const [, queryMatch, tagsMatch] = match;

                let queryString;
                let queryFeedbackString;

                if (queryMatch !== "") {
                    queryString = queryMatch.replaceAll("%20", " ");
                    queryFeedbackString = `Search results for "${queryString}"`;
                }

                if (tagsMatch !== "") {
                    let tagString = tagsMatch
                        .split(",")
                        .map((tag) => `#${tag}`)
                        .join(" ");

                    queryString = queryString
                        ? `${queryString} ${tagString}`
                        : tagString;

                    queryFeedbackString = queryFeedbackString
                        ? `${queryFeedbackString} with tags ${tagString}`
                        : `Search results for tags ${tagString}`;
                }

                setQuery(queryString);
                setQueryFeedback(queryFeedbackString);

                Requests.POST("/api/projects/query", {
                    query: queryMatch.replaceAll("%20", " "),
                    tags: tagsMatch.split(",").filter((tag) => tag !== ""),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (!data.error) setProjectList(data.results);
                        else throw Error();
                    })
                    .catch((error) => {
                        setQueryFeedback(
                            "Uh oh! There was an issue with the search. Please try again later."
                        );
                    });

                window.scrollTo({ top: 0, behavior: "instant" });
            } else {
                let queryMatch = search.match(/query=(.*)/);
                console.log(queryMatch);
                queryMatch = queryMatch ? queryMatch[1] : "";

                let tagMatch = search.match(/tags=(.*)/);
                console.log(tagMatch);
                tagMatch = tagMatch ? tagMatch[1] : "";

                navigate(`/projects?query=${queryMatch}&tags=${tagMatch}`);
            }
        }
    }, [location, navigate, handleResetList, setShowModal, setProjectList]);

    return {
        query,
        queryFeedback,
        setQueryFeedback,
    };
};

export const useSearchResponder = (
    handleResetList,
    setShowModal,
    setProjectList
) => {
    const location = useLocation();
    const [query, setQuery] = useState("");
    const [queryFeedback, setQueryFeedback] = useState("");

    const handleQueryTags = useCallback(
        (tags) => {
            Requests.POST("/api/projects/query", { tags: tags })
                .then((res) => res.json())
                .then((data) => {
                    if (!data.error) setProjectList(data.results);
                    else {
                        setQueryFeedback(
                            "There was an issue. Displaying all projects instead."
                        );
                        handleResetList();
                    }
                });
        },
        [handleResetList, setProjectList]
    );

    const handleQueryString = useCallback(
        (queryString) => {
            Requests.POST("/api/projects/query", { query: queryString })
                .then((res) => res.json())
                .then((data) => {
                    if (!data.error) setProjectList(data.results);
                    else {
                        setQueryFeedback(
                            "There was an issue. Displaying all projects instead."
                        );
                        handleResetList();
                    }
                });
        },
        [handleResetList, setProjectList]
    );

    useEffect(() => {
        const { search } = location;

        if (search) {
            setShowModal(false);

            const [, type, value] = search.match(/([a-z]*)=(.*)/);
            let queryString = "";

            if (type === "tags") {
                let tags = value.split(",");
                queryString = tags.map((tag) => "#" + tag).join(" ");
                setQuery(queryString);
                setQueryFeedback(`Search results for tags: ${queryString}`);
                handleQueryTags(tags);
            } else if (type === "query") {
                if (value === "") {
                    setQuery("");
                    setQueryFeedback("");
                    handleResetList();
                } else {
                    queryString = value
                        .replaceAll("%20", " ")
                        .replaceAll("%23", "#");
                    setQuery(queryString);
                    setQueryFeedback(`Search results for "${queryString}"`);
                    handleQueryString(queryString);
                }
            }
            window.scrollTo({ top: 0, behavior: "instant" });
        }
    }, [
        location,
        handleQueryString,
        handleQueryTags,
        handleResetList,
        setShowModal,
    ]);

    return {
        query,
        queryFeedback,
        setQueryFeedback,
    };
};
