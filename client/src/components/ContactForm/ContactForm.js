import Form, { Input, TextArea, Submit, Feedback } from "../Form/Form.js";
import { useContactSectionLogic } from "./_ContactFormLogic";

function ContactForm(props) {
    const { state, handleSubmit } = useContactSectionLogic();

    return (
        <Form
            styleMode={"light"}
            onSubmit={handleSubmit}
            disabled={state.disabled}
            checkRequiredFields={true}
        >
            <Input
                label='Name'
                name='name'
                placeholder='ex. John Smith'
                validity={!state.errors?.includes("name")}
                required
            />
            <Input
                label='Email'
                name='email'
                placeholder='ex. jsmith@email.com'
                validity={!state.errors?.includes("email")}
                required
            />
            <Input
                label='Phone'
                name='phone'
                placeholder='ex. (123) 456-7890'
                validity={!state.errors?.includes("phone")}
            />
            <TextArea
                label='Message'
                name='message'
                placeholder="ex. I got a position if you're interested!"
                validity={!state.errors?.includes("message")}
                required
            />

            <div className='Form__actions'>
                <Submit
                    styleMode={"light"}
                    className={"flashy"}
                    label={state.buttonLabel}
                    name='submit'
                    disabled={!state.loading && state.disabled}
                />
                <Feedback displayed={!state.loading} text={state.feedback} />
            </div>
        </Form>
    );
}

export default ContactForm;
