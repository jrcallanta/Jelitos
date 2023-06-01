import { model, Schema } from "mongoose";
import { randomHue, randomDetails } from "../../tools/Random.js";

const Project = new model(
    "projects",
    new Schema({
        title: { required: true, type: String, trim: true },
        tags: { required: true, type: [String], default: [] },
        featured: { type: Boolean, enum: [true, false] },
        period: {
            required: true,
            type: {
                _id: false,
                start: { type: Date, required: true, default: Date.now },
                end: { type: Date, required: true, default: Date.now },
            },
            default: {
                start: Date.now(),
                end: Date.now(),
            },
        },
        summary: {
            type: String,
            trim: true,
        },
        links: {
            type: {
                _id: false,
                liveDemo: { type: String, trim: true },
                repo: { type: String, trim: true },
            },
        },
        card_image: { type: String, trim: true },
        card_hue: { required: true, type: Number, default: randomHue },
        details: {
            required: true,
            type: Object,
            default: randomDetails,
        },
    })
);

export default Project;

// const _detailSchema = new mongoose.Schema({
//     intro: { required: true, type: [_subsectionSchema] },
//     // versions: { required: true, type: [_versionSchema] },
// });

// const _subsectionSchema = new mongoose.Schema({
//     _layout: {
//         type: {
//             _id: false,
//             x: { required: true, type: String },
//         },
//     },
//     type: {
//         type: String,
//         enum: ["text-block", "media-block"],
//         default: "text-block",
//     },
// });

// const _textBlockSchema = new mongoose.Schema({
//     subsection_title: { required: true, type: String, trim: true },
//     subsection_content: { required: true, type: String, trim: true },
// });

// const _mediaBlockSchema = new mongoose.Schema({
//     type: { required: true, type: String, default: "media-block" },
//     mediaObject: {
//         required: true,
//         type: {
//             type: { required: true, type: String, enum: ["image", "youtube"] },
//             url: { required: true, type: String, trim: true },
//         },
//     },
// });
