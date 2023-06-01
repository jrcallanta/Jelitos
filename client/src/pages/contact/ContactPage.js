import { createPalette } from "../../tools/helperFunctions.js";
import ContactForm from "../../components/ContactForm/ContactForm.js";
import VerticalLabeledSection from "../../components/VerticalLabeledSection/VerticalLabeledSection.js";
import "../../styles/css/pages/contact/ContactPage.css";

function ContactPage(props) {
    const { styleVars } = useContactPageLogic();

    return (
        <div className='ContactPage' style={styleVars}>
            <VerticalLabeledSection
                sectionId='ContactSection'
                sectionClassName='ContactSection'
                styleMode={"light"}
                styleVars={styleVars}
                label='CONTACT'
            >
                <h1 className='content__heading'>SEND ME A MESSAGE!</h1>
                <div className='content__info'>
                    <ContactForm />
                </div>
            </VerticalLabeledSection>
        </div>
    );
}

export default ContactPage;

const useContactPageLogic = () => {
    const { color, colorDark, colorShadow } = createPalette("black");
    const styleVars = {
        "--clr": color,
        "--clr-drk": colorDark,
        "--clr-shdw": colorShadow,
    };

    return {
        styleVars,
    };
};
