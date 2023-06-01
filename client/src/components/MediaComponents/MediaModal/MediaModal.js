import { useEffect, useRef } from "react";

function MediaModal(props) {
    const modalRef = useRef(null);

    const closeModal = props.onClose;

    useEffect(() => {
        const modalRoot = document.getElementById("media-modal-root");
        modalRoot.setAttribute("data-active", "true");

        return () => {
            modalRoot.setAttribute("data-active", "");
        };
    }, []);

    useEffect(() => {
        const handleClick = (e) => {
            console.log(e.target);

            if (modalRef?.current) {
                if (!modalRef.current.contains(e.target)) closeModal();
            }
        };

        document
            .getElementById("media-modal-root")
            .addEventListener("click", handleClick);

        return () =>
            document
                .getElementById("media-modal-root")
                .removeEventListener("click", handleClick);
    }, [modalRef, closeModal]);

    return (
        <div className={"MediaModal"} ref={modalRef}>
            {props.mediaObject && props.mediaObject}
        </div>
    );
}

export default MediaModal;
