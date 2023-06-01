import escapeStringRegexp from "escape-string-regexp";

export const onSearchProjects = async (req, res, next) => {
    console.log("[ProjectValidator.onSearchProjects]");

    if (req.body.query) {
        let { query } = req.body;
        query = escapeStringRegexp(query);
        query = query.trim().toLowerCase();
        req.body.query = query.length > 0 ? query : null;
    }

    if (req.body.tags) {
        let { tags } = req.body;
        tags.filter((tag) => tag !== "").map((tag) => escapeStringRegexp(tag));
        req.body.tags = tags.length > 0 ? tags : null;
    }

    next();
};

export default {
    onSearchProjects,
};
