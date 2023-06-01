import { useState } from "react";
import ProjectSummaryBlock from "../../../components/ProjectSummaryBlock/ProjectSummaryBlock.js";

export const useFeaturedSectionLogic = (props) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const TABS = [
        {
            title: "latest work",
            content: props.project ? (
                <ProjectSummaryBlock
                    project={props.project}
                    summaryCharLimit={500}
                />
            ) : null,
        },
    ];

    const tabClassName = (tab) => {
        return tab === selectedTab
            ? "content__heading__tab active"
            : "content__heading__tab";
    };

    const handleSelectTab = (tab) => setSelectedTab(tab);

    return {
        state: { selectedTab },
        consts: { TABS },
        handlers: {
            handleSelectTab,
        },
        classes: {
            tabClassName,
        },
    };
};
