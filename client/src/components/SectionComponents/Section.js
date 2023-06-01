import Subsection from "./Subsection.js";
import "../../styles/css/components/SectionComponents/SectionResponsive.css";

function Section({ section }) {
    return (
        <div className='section'>
            <h2 className='section__title'>{section.section_title}</h2>

            {section.section__content && (
                <div className='section__content'>
                    {section.section_content}
                </div>
            )}

            <div className='section__subsections'>
                {section.subsections?.map((subsection, i) => (
                    <Subsection key={i} subsection={subsection} />
                ))}
            </div>
        </div>
    );
}

export default Section;
