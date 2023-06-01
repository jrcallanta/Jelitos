import { useEffect, useState } from "react";
import GitHubLogo from "../../../assets/GitHubLogo.svg";
import DribbbleLogo from "../../../assets/DribbbleLogo.svg";
import LinkedInLogo from "../../../assets/LinkedInLogo.svg";

export const useHeroSectionLogic = (props) => {
    const GREET_PRIMARY = "My name's JELITO";
    const GREET_TITLE_PRIMARY = "software";
    const GREET_TITLE_SECONDARY = "engineer";
    const SOCIALS = [
        {
            title: "github",
            link: "https://github.com/jrcallanta",
            alt: "github.svg",
            logo: GitHubLogo,
        },
        {
            title: "dribbble",
            link: "https://dribbble.com/jrscallanta",
            alt: "dribbble.svg",
            logo: DribbbleLogo,
        },
        {
            title: "linkedin",
            link: "https://www.linkedin.com/in/jelito-callanta-0231b4143/",
            alt: "linkedin.svg",
            logo: LinkedInLogo,
        },
    ];

    /* States */
    const [avatarIsLoaded, setAvatarIsLoaded] = useState(false);
    const [imgIsSaturated, setImgIsSaturated] = useState(false);

    /* Effects */
    useEffect(() => {
        const setClassAndRemoveListener = () => {
            if (avatarIsLoaded) {
                setImgIsSaturated(true);
                window.removeEventListener("scroll", setClassAndRemoveListener);
            }
        };

        if (window.pageYOffset !== 0) setImgIsSaturated(true);
        else window.addEventListener("scroll", setClassAndRemoveListener);
        return () =>
            window.removeEventListener("scroll", setClassAndRemoveListener);
    }, [avatarIsLoaded, setImgIsSaturated]);

    /* Conditional Consts */
    const avatarClassName = avatarIsLoaded ? "avatar show" : "avatar";
    const imgClassName = imgIsSaturated ? "color" : "";

    const handleAvatarLoad = () => setAvatarIsLoaded(true);

    return {
        state: {
            imgIsSaturated,
        },
        consts: {
            GREET_PRIMARY,
            GREET_TITLE_PRIMARY,
            GREET_TITLE_SECONDARY,
            SOCIALS,
        },
        handlers: { handleAvatarLoad },
        classes: {
            avatarClassName,
            imgClassName,
        },
    };
};
