import HeroSection from "./HeroSection/HeroSection.js";
import FeaturedSection from "./FeaturedSection/FeaturedSection.js";
import ContactSection from "./ContactSection/ContactSection.js";

import "../../styles/css/pages/main/MainPage.css";
import { useMainPageLogic } from "./_MainPageLogic.js";

function MainPage(props) {
    const {
        state: { featuredProject, styleVars },
    } = useMainPageLogic(props);

    return (
        <>
            <HeroSection styleVars={styleVars} />
            {featuredProject && (
                <FeaturedSection
                    project={featuredProject}
                    styleVars={styleVars}
                />
            )}
            <ContactSection styleVars={styleVars} />
        </>
    );
}

export default MainPage;
