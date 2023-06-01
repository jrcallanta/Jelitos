import { model, Schema } from "mongoose";

const Message = new model(
    "message",
    new Schema({
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        message: { type: String, required: true, trim: true },
        phone: { type: String, required: false, trim: true },
        date: { type: Date, required: true, default: Date.now },
    })
);

export default Message;
