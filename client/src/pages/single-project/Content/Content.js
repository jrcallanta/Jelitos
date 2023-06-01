import { useEffect, useReducer } from "react";
import Section from "../../../components/SectionComponents/Section.js";

import "../../../styles/css/pages/single-project/ContentResponsive.css";

function Content({ content }) {
    const initialState = {
        displayedContent: content,
        showContent: true,
    };

    const contentReducer = (state, action) => {
        switch (action.type) {
            case "FADE_OUT":
                return { ...state, showContent: false };
            case "FADE_IN":
                return { ...state, showContent: true };
            case "CHANGE_CONTENT":
                return { ...state, displayedContent: action.payload };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(contentReducer, initialState);

    useEffect(() => {
        dispatch({ type: "CHANGE_CONTENT", payload: content });
    }, [content]);

    return (
        <div className={`Content ${state.showContent ? "show" : ""}`}>
            {state.displayedContent.map((section, i) => (
                <Section key={i} section={section} />
            ))}
        </div>
    );
}

export default Content;
