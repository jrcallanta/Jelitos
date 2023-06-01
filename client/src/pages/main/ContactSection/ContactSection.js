import VerticalLabeledSection from "../../../components/VerticalLabeledSection/VerticalLabeledSection.js";
import ContactForm from "../../../components/ContactForm/ContactForm.js";
import "../../../styles/css/pages/main/ContactSectionResponsive.css";

function ContactSection(props) {
    return (
        <VerticalLabeledSection
            sectionId='ContactSection'
            sectionClassName='ContactSection'
            styleMode={"light"}
            styleVars={props.styleVars}
            label='CONTACT'
        >
            <h1 className='content__heading'>Let's Build Together!</h1>
            <div className='content__info'>
                <ContactForm />
            </div>
        </VerticalLabeledSection>
    );
}

export default ContactSection;
