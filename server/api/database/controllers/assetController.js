import path from "path";
import { fileURLToPath } from "url";

/***************************
 * Controller called to retrieve
 * asset from server using passed
 * projectName and fileName
 */
export const getAsset = (req, res, next) => {
    console.log("GET: ASSET");
    console.log(req.params.projectName, req.params.fileName);

    if (req.params.projectName && req.params.fileName) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const file = path.resolve(
            __dirname,
            `../../assets/${req.params.projectName}/${req.params.fileName}`
        );

        if (file) res.status(200).sendFile(file);
        else
            res.status(404).send({
                message: "File Not Found",
            });
    } else
        res.status(404).send({
            message: "Invalid File Params",
        });
};

export default {
    getAsset,
};
