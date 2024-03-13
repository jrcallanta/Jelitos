import Media from "../MediaComponents/Media.jsx";
import TextBlock from "./TextBlock.js";

function Subsection(props) {
    switch (props.subsection?.type) {
        case "media-block":
            return MediaBlock(props);
        case "text-block":
            return TextBlock(props);
        default:
            return TextBlock(props);
    }
}

export default Subsection;

/*** Subsection Sub-Components **************************/

function MediaBlock({ subsection }) {
    return (
        <div
            className='subsection media'
            data-layout-x={subsection._layout?.x}
            data-layout-y={subsection._layout?.y}
        >
            <Media mediaObject={subsection.mediaObject} />
        </div>
    );
}
