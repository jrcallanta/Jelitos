import { Link } from "react-router-dom";

import VerticalLabeledSection from "../../../components/VerticalLabeledSection/VerticalLabeledSection";
import { useFeaturedSectionLogic } from "./_FeaturedSectionLogic";

import "../../../styles/css/pages/main/FeaturedSectionResponsive.css";

function FeaturedSection(props) {
    const {
        state: { selectedTab },
        consts: { TABS },
        handlers: { handleSelectTab },
        classes: { tabClassName },
    } = useFeaturedSectionLogic(props);

    return (
        <VerticalLabeledSection
            sectionId='FeaturedSection'
            sectionClassName='FeaturedSection'
            label='FEATURED'
            styleVars={props.styleVars}
        >
            <div className='content__heading'>
                {TABS.map((tab, i) => (
                    <h1
                        key={i}
                        className={`${tabClassName(i)}`}
                        onClick={() => handleSelectTab(i)}
                    >
                        {tab.title}
                    </h1>
                ))}

                <Link className='content__heading__seeAll' to={"/projects"}>
                    SEE ALL
                </Link>
            </div>

            <div className='content__info'>{TABS[selectedTab].content}</div>
        </VerticalLabeledSection>
    );
}

export default FeaturedSection;
