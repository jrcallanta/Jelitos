import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const useAppLogic = (props) => {
    const [currentPage, setCurrentPage] = useState(null);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll({ top: 0, behavior: "instant" });
    }, [currentPage]);

    useEffect(() => {
        const page = pathname.split("/")[1] || "home";
        setCurrentPage(page);
    }, [pathname]);
};
