import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import "../../styles/css/components/Form.css";

function Form(props) {
    const { checkRequiredFields, disabled } = props;
    const formRef = useRef(null);
    const [requiredFieldsAreValid, setRequiredFieldsAreValid] = useState(null);

    // disable form on props.disabled change
    useEffect(() => {
        formRef?.current?.setAttribute("data-disabled", disabled);
        let inputFields = formRef?.current?.querySelectorAll(
            ".Input input, .Input textarea"
        );
        if (inputFields) inputFields = Array.from(inputFields);
        inputFields.forEach((field) => (field.disabled = disabled));
    }, [disabled]);

    const inputReducer = (state, action) => {
        switch (action.type) {
            case "INITIALIZE": {
                let inputFields = formRef?.current?.querySelectorAll(
                    ".Input[required] input, .Input[required] textarea"
                );
                if (inputFields) inputFields = Array.from(inputFields);
                inputFields?.forEach((field) => {
                    state[field.name] = "";
                });
                return state;
            }

            default: {
                state[action.type] = action.payload;
                setRequiredFieldsAreValid(
                    () =>
                        !Object.entries(state)
                            .filter(([key]) => key !== "_valid")
                            .map(([, value]) => value.trim())
                            .includes("")
                );
                return state;
            }
        }
    };

    const [state, dispatch] = useReducer(inputReducer, {});

    const handleRequiredChange = useCallback(
        ({ target }) => {
            if (state[target.name] !== target.value)
                dispatch({ type: target.name, payload: target.value });
        },
        [state]
    );

    // listen to all required inputs
    useEffect(() => {
        if (checkRequiredFields) {
            let inputFields = formRef?.current?.querySelectorAll(
                ".Input[required] input, .Input[required] textarea"
            );

            if (inputFields.length > 0) {
                dispatch({ type: "INITIALIZE" });
                setRequiredFieldsAreValid(false);

                Array.from(inputFields).forEach((field) => {
                    field.addEventListener("keyup", handleRequiredChange);
                });

                return () => {
                    Array.from(inputFields).forEach((field) =>
                        field.removeEventListener("keyup", handleRequiredChange)
                    );
                };
            } else {
                setRequiredFieldsAreValid(true);
            }
        }
    }, [checkRequiredFields, handleRequiredChange]);

    useEffect(() => {
        if (checkRequiredFields) {
            const submit = formRef?.current?.querySelector(".Submit");
            if (submit) {
                if (!requiredFieldsAreValid)
                    submit.setAttribute("disabled", !requiredFieldsAreValid);
                else submit.removeAttribute("disabled");
            }
        }
    }, [checkRequiredFields, requiredFieldsAreValid]);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(event);
    };

    return (
        <form
            className='Form'
            data-style-mode={props.styleMode}
            data-required-valid={requiredFieldsAreValid}
            onSubmit={handleSubmit}
            ref={formRef}
        >
            {props.children}
        </form>
    );
}

export default Form;

/*** Form Child Components */

export const Input = (props) => {
    return (
        <div
            className='Input'
            data-name={props.name}
            data-validity={props.validity}
            required={!!props.required}
        >
            <label>{`${props.label} ${props.required ? "*" : ""}`}</label>
            <input
                placeholder={props.placeholder}
                name={props.name}
                type={props.type}
            />
        </div>
    );
};

export const TextArea = (props) => {
    return (
        <div
            className='Input'
            data-name={props.name}
            data-validity={props.validity}
            required={!!props.required}
        >
            <label>{`${props.label} ${props.required ? "*" : ""}`}</label>
            <textarea placeholder={props.placeholder} name={props.name} />
        </div>
    );
};

export const Submit = (props) => {
    return (
        <button
            className={`Submit ${props.className || ""}`}
            data-style-mode={props.styleMode}
            disabled={props.disabled}
        >
            {props.label}
        </button>
    );
};

export const Feedback = (props) => {
    return (
        <div className='Feedback' data-displayed={props.displayed}>
            <p>{props.text}</p>
        </div>
    );
};

export const PostForm = (props) => {
    const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
        if (props.formRef && props.formRef.current) {
            props.formRef.current.addEventListener("submit", () =>
                setIsDisplayed(true)
            );
        }

        return () =>
            props.formRef?.current?.removeEventListener("submit", () =>
                setIsDisplayed(true)
            );
    }, [props.formRef]);

    return !isDisplayed ? null : (
        <div className='PostForm'>{props.children}</div>
    );
};
