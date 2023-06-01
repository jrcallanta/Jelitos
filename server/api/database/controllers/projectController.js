import { connect } from "../data.js";
import Project from "../models/projectModel.js";
import STATIC_PROJECTS from "../filler/projects/statics.js";

/***************************
 * Controller called to retrieve
 * all projects from database.
 */
export const getProjects = async (req, res, next) => {
    console.log("GET: PROJECTS");

    connect()
        .then(() => {
            Project.find({})
                .then((foundProjects, findError) => {
                    if (!findError)
                        res.status(200).send({
                            message: "SUCCESS: GET PROJECTS",
                            projects: foundProjects,
                        });
                    else next(findError);
                })
                .catch((findError) => {
                    res.status(500).send({
                        message: "ERROR: GET PROJECTS",
                        error: findError,
                    });
                });
        })
        .catch((error) => {
            res.status(500).send({
                message: "ERROR: GET PROJECTS",
                error: error,
            });
        });
};

/***************************
 * Controller called to retrieve
 * featured projects from database.
 */
export const getFeaturedProject = async (req, res, next) => {
    console.log("GET: PROJECTS/FEATURED");

    connect()
        .then(async () => {
            const featuredProjects = await Project.find({
                featured: true,
            }).exec();

            if (featuredProjects.length > 0)
                res.status(200).send({
                    message: "SUCCESS: GET PROJECTS/FEATURED",
                    projects: featuredProjects,
                });
            else
                res.status(500).send({
                    message: "ERROR: GET PROJECTS/FEATURED",
                    error: "No featured projects were found.",
                });
        })
        .catch((error) => {
            console.log(error.message);
            res.status(500).send({
                message: "ERROR: GET PROJECTS/FEATURED",
                error: error || "No featured projects were found.",
            });
        });
};

/***************************
 * Controller called to retrieve
 * project from database using
 * project.id.
 */
export const getProjectById = async (req, res, next) => {
    console.log("GET: PROJECTS.id");

    connect()
        .then(() => {
            Project.findById(req.params.id)
                .then((foundProject, findError) => {
                    if (!findError)
                        res.status(200).send({
                            message: "SUCCESS: GET PROJECTS.id",
                            project: foundProject,
                        });
                    else next(findError);
                })
                .catch((findError) => {
                    res.status(404).send({
                        message: "ERROR: GET PROJECTS.id",
                        error: findError,
                    });
                });
        })
        .catch((error) => {
            res.status(404).send({
                message: "ERROR: GET PROJECTS.id",
                error: error,
            });
        });
};

/***************************
 * Controller called to create
 * a new project and save it
 * the database.
 */
export const createProject = async (req, res, next) => {
    console.log("POST: PROJECTS");
    console.log("--body:");
    console.log(req.body);

    connect()
        .then(() => {
            const newProject = new Project({
                ...req.body,
            });

            newProject
                .save()
                .then((savedProject, saveError) => {
                    if (!saveError)
                        res.status(200).send({
                            message: "SUCCESS: POST PROJECTS",
                            newProject: savedProject,
                        });
                    else next(saveError);
                })
                .catch((saveError) => {
                    res.status(500).send({
                        message: "ERROR: POST PROJECTS",
                        error: saveError,
                    });
                });
        })
        .catch((error) => {
            res.status(500).send({
                message: "ERROR: POST PROJECTS",
                error: error,
            });
        });
};

/***************************
 * Controller called to search
 * projects in database using
 * a passed query.
 */
export const searchProjects = async (req, res, next) => {
    console.log("POST: PROJECTS/QUERY");

    connect()
        .then(async () => {
            let matchQuery = req.body.query
                ? {
                      $or: [
                          {
                              title: {
                                  $regex: new RegExp(req.body.query, "i"),
                              },
                          },
                          {
                              $and: [
                                  ...req.body.query.split(" ").map((tag) => ({
                                      tags: {
                                          $regex: new RegExp(`^${tag}`, "i"),
                                      },
                                  })),
                              ],
                          },
                      ],
                  }
                : null;

            let matchTags = req.body.tags
                ? {
                      $and: [
                          ...req.body.tags.map((tag) => ({
                              tags: {
                                  $regex: new RegExp(`^${tag}`, "i"),
                              },
                          })),
                      ],
                  }
                : null;

            let match = !(matchQuery && matchTags)
                ? matchQuery || matchTags
                : { $and: [matchQuery, matchTags] };

            const results = match
                ? await Project.aggregate().match(match).exec()
                : await Project.find({}).exec();

            res.status(200).send({
                message: "SUCCESS: POST PROJECTS/QUERY",
                results: results,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(404).send({
                message: "ERROR: POST PROJECTS/QUERY",
                error: error,
            });
        });
};

/***************************
 * Controller called to
 * DROP ALL projects in database
 * INSERT projects imported from
 * filler/statics/projects.
 */
export const fillStaticProjectData = async (req, res, next) => {
    console.log("GET: PROJECTS/FILL-STATIC-PROJECT-DATA");

    let saved = [];

    connect().then(async () => {
        await Project.deleteMany({});

        await Promise.all(
            STATIC_PROJECTS.map(async (project) => {
                const newProject = new Project(project);
                await newProject.save();
                saved.push(newProject);
            })
        );

        res.status(200).send({
            message: "Successfully filled static project data",
            STATIC_PROJECTS,
            saved,
        });
    });
};

export default {
    getProjects,
    getProjectById,
    getFeaturedProject,
    createProject,
    searchProjects,
    fillStaticProjectData,
};
