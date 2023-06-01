import { validationResult } from "express-validator";

import { connect } from "../data.js";
import Message from "../models/messageModel.js";

/***************************
 * Controller called to retrieve
 * all messages from database.
 */
export const getMessages = async (req, res, next) => {
    console.log("MESSAGE: GET");

    await connect();
    Message.find({}).then((foundMessages, findError) => {
        if (!findError)
            res.status(200).send({
                message: "SUCCESS: GET MESSAGE",
                data: foundMessages,
            });
        else next(findError);
    });
};

/***************************
 * Controller called to create
 * a new message and insert it
 * into the database.
 */
export const createMessage = async (req, res, next) => {
    console.log("MESSAGE: POST");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorFields = Array.from(errors.errors)
            .map((error) => ({
                name: error.path,
                value: error.value,
            }))
            .filter((error) => {
                if (error.name === "phone") {
                    return error.value !== "";
                }
                return true;
            });

        console.log(errors);
        console.log(errorFields);
        if (errorFields.length > 0)
            return res.status(422).send({
                message: "Invalid inputs, please check your data.",
                error: errorFields,
                errors: Array.from(new Set(errorFields)).map(
                    (error) => error.name
                ),
            });
    }

    const newMessage = new Message({
        ...req.body,
    });

    await connect();
    newMessage
        .save()
        .then((savedMessage, saveError) => {
            if (!saveError)
                res.status(200).send({
                    message: "SUCCESS: POST MESSAGE",
                    newMessage: savedMessage,
                });
            else next(saveError);
        })
        .catch((saveError) => {
            res.status(500).send({
                message: "ERROR: POST MESSAGE",
                error: saveError,
            });
        });
};

/***************************
 * Controller called to delete
 * a message from database.
 */
export const deleteMessage = async (req, res, next) => {
    console.log("MESSAGE: DELETE");
    await connect();

    const { id } = req.params;

    try {
        const message = await Message.findByIdAndRemove(id);
        if (message)
            res.status(200).send({
                message: "SUCCESS: DELETE MESSAGE",
                deletedMessage: message,
            });
        else
            res.status(404).send({
                message: "Message does not exist",
                error: "MessageNotFoundError",
            });
    } catch (error) {
        res.status(401).send({
            message: "There was an issue",
            error: error,
        });
    }
};

export default {
    getMessages,
    createMessage,
};
