import VerticalLabel from "../VerticalLabel/VerticalLabel.js";
import { useVerticalLabeledSectionLogic } from "./_VerticalLabeledSectionLogic.js";

import "../../styles/css/components/VerticalLabeledSection/VerticalLabeledSectionResponsive.css";

function VerticalLabeledSection(props) {
    const { sectionRef } = useVerticalLabeledSectionLogic(props);

    return (
        <section
            id={props.sectionId}
            ref={sectionRef}
            className={`VerticalLabeledSection ${
                props.sectionClassName ? props.sectionClassName : ""
            }`}
            style={props.styleVars}
            data-style-mode={props.styleMode}
            data-observed={false}
        >
            <div className='wrapper'>
                <VerticalLabel text={props.label} styleMode={props.styleMode} />

                <div className='content'>{props.children}</div>
            </div>
        </section>
    );
}

export default VerticalLabeledSection;
