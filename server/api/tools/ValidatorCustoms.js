import { check } from "express-validator";

/***************************
 * Phone Regex
 */
export const phoneRegexPattern =
    /^(?:(\+[0-9]{1,3})[ \.\-]{0,1}){0,1}(\([0-9]{3}\)|[0-9]{3})[ \.\-]{0,1}([0-9]{3})[ \.\-]{0,1}([0-9]{4})$/;

/***************************
 * Custom Phone Sanitizer
 */
export const phoneSanitizer = (value) => {
    console.log("sanitizer:");

    const match = value.match(phoneRegexPattern);
    console.log(match);
    if (match) {
        const [, country, area, prefix, extension] = match;
        const sanitizedArea = area.length < 5 ? `(${area})` : area;
        return country
            ? [country, sanitizedArea, [prefix, extension].join("-")].join(" ")
            : [sanitizedArea, [prefix, extension].join("-")].join(" ");
    } else return value;
};

/***************************
 * Custom Phone Validator
 */
export const phoneValidator = (value) => {
    console.log("validator:");
    if (value === "") return true;
    return value.match(phoneRegexPattern);
};

/***************************
 * Custom Message
 * Validator chain
 */
export const messageValidators = [
    check("name").trim().not().isEmpty(),
    check("email").trim().not().isEmpty().isEmail(),
    check("message").trim().not().isEmpty(),
    check("phone")
        .trim()
        .customSanitizer(phoneSanitizer)
        .custom(phoneValidator),
];

export default {
    messageValidators,
    phoneRegexPattern,
};
