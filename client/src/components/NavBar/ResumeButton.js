import Button from "../micro/Button/Button.js";
import DownloadIcon from "../icons/DownloadIcon.js";

import "../../styles/css/components/NavBar/ResumeButton.css";

function ResumeButton(props) {
    if (props.mobile === undefined)
        return (
            <Button
                className={"Button ResumeButton"}
                endIcon={DownloadIcon}
                endIconClipPath={"DownloadPath"}
                endIconOnHover={true}
                download={"/PUBLIC_RESUME.pdf"}
            >
                <span>RESUME</span>
            </Button>
        );
    else
        return (
            <Button
                className={"Button ResumeButton"}
                endIcon={DownloadIcon}
                endIconClipPath={"DownloadMobilePath"}
                endIconOnHover={true}
                download={"/PUBLIC_RESUME.pdf"}
            >
                <span>RESUME</span>
            </Button>
        );
}

export default ResumeButton;
