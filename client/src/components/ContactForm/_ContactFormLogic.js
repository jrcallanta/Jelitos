import { useReducer } from "react";
import Requests from "../../tools/Requests.js";

export const useContactSectionLogic = () => {
    const [state, dispatch] = useReducer(formReducer, formInitState);

    const handleSubmit = (event) => {
        let data = {};
        const formData = new FormData(event.target);
        formData.forEach((value, key) => (data[key] = value));

        dispatch({ type: "SUBMIT_START" });
        Requests.POST("/api/messages", data)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    if (data.error)
                        dispatch({
                            type: "SUBMIT_ERROR",
                            payload: {
                                ...data,
                                error: "FormSubmitError",
                                errors: data.errors,
                            },
                        });
                    else
                        dispatch({
                            type: "SUBMIT_SUCCESS",
                            payload: { ...data },
                        });
                }, 1000);
            });
    };

    return {
        state,
        dispatch,
        handleSubmit,
    };
};

const formInitState = {
    loading: false,
    error: false,
    disabled: false,
    post: {},
    buttonLabel: "Send Message",
};

const formReducer = (state, action) => {
    switch (action.type) {
        case "SUBMIT_START":
            return {
                loading: true,
                disabled: true,
                error: false,
                post: {},
                buttonLabel: "Sending...",
                feedback: "",
            };
        case "SUBMIT_SUCCESS":
            return {
                ...state,
                loading: false,
                post: action.payload,
                buttonLabel: "Sent!",
                feedback: "Your message was sent successfully!",
            };
        case "SUBMIT_ERROR":
            return {
                ...state,
                loading: false,
                disabled: false,
                error: true,
                errors: action.payload.errors ? [...action.payload.errors] : [],
                buttonLabel: "Try Again",
                feedback: action.payload?.errors
                    ? `Oops! Let's try another ${errorsFormatter(
                          action.payload.errors
                      )}.`
                    : "There was an issue. Please try again.",
            };
        default:
            return state;
    }
};

const errorsFormatter = (errorsArray) => {
    if (errorsArray.length > 2) {
        errorsArray.splice(-1, 1, `and ${errorsArray[errorsArray.length - 1]}`);
        return errorsArray.join(", ");
    } else {
        return errorsArray.join(" and ");
    }
};
