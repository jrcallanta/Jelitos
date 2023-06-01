import { useEffect, useState } from "react";
import { createPalette } from "../../tools/helperFunctions";

export const useMainPageLogic = (props) => {
    const [featuredProject, setFeaturedProject] = useState(null);
    const [styleVars, setStyleVars] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });

        fetch("/api/projects/featured")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.projects)
                    setFeaturedProject(
                        data.projects[
                            Math.floor(Math.random() * data.projects.length)
                        ]
                    );
                else throw new Error("There was an issue.");
            })
            .catch((error) => {
                console.log(error);
                const { color, colorDark, colorShadow } = createPalette(108);

                setStyleVars({
                    "--clr": color,
                    "--clr-drk": colorDark,
                    "--clr-shdw": colorShadow,
                });
            });
    }, []);

    useEffect(() => {
        if (featuredProject) {
            const { color, colorDark, colorShadow } = createPalette(
                featuredProject.card_hue
            );
            setStyleVars({
                "--clr": color,
                "--clr-drk": colorDark,
                "--clr-shdw": colorShadow,
            });
        }
    }, [featuredProject]);

    return {
        state: {
            styleVars,
            featuredProject,
        },
    };
};
