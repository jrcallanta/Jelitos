
function TextBlock ({subsection}) {
    return (
        <div
            className="subsection"
            data-layout-x={subsection._layout?.x}
            data-layout-y={subsection._layout?.y}
        >
            <h3 className="subsection__title">{subsection.subsection_title}</h3>
            <p className="subsection__content">{subsection.subsection_content}</p>
        </div>
    );
}

export default TextBlock;