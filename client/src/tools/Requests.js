export const GET = (url) => {
    return fetch(url);
};

export const POST = (url, body) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    };

    return fetch(url, requestOptions);
};

const Requests = {
    GET,
    POST,
};

export default Requests;
