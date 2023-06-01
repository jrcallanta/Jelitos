export const generateRandom = (type) => {
    if (type === "hue") return Math.floor(Math.random() * 360);

    if (type === "width") return 20 + Math.floor(Math.random() * 5) * 5 + "rem";
};

export const projectDetailSample = {
    intro: [
        {
            _layout: { x: "1/2" },
            subsection_title: "Problem",
            subsection_content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, laoreet aliquam aliquam curabitur nisl ac. Sit ut potenti orci sodales sed nisi, leo. Sapien etiam orci lectus enim. Etiam scelerisque sed cursus tortor velit vitae.",
        },
        {
            _layout: { x: "1/2" },
            subsection_title: "Solution",
            subsection_content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, laoreet aliquam aliquam curabitur nisl ac. Sit ut potenti orci sodales sed nisi, leo. Sapien etiam orci lectus enim. Etiam scelerisque sed cursus tortor velit vitae.",
        },
    ],

    versions: [
        {
            no: "v.1.0.0",
            num: { major: 1, minor: 0, bugFix: 0 },
            content: [
                {
                    section_title: "DESIGN",
                    section_content: null,
                    subsections: [
                        {
                            _layout: { x: "1/2" },
                            type: "text-block",
                            subsection_title: "Social Platform & Tool",
                            subsection_content:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, laoreet aliquam aliquam curabitur nisl ac. Sit ut potenti orci sodales sed nisi, leo. Sapien etiam orci lectus enim. Etiam scelerisque sed cursus tortor velit vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, laoreet aliquam aliquam curabitur nisl ac. Sit ut potenti orci sodales sed nisi, leo. Sapien etiam orci lectus enim. Etiam scelerisque sed cursus tortor velit vitae.",
                        },
                        {
                            _layout: { x: "1/2" },
                            type: "media-block",
                            mediaObject: {
                                type: "youtube",
                                url: "https://www.youtube.com/watch?v=UI6lqHOVHic",
                                videoId: "UI6lqHOVHic",
                                width: generateRandom("width"),
                            },
                        },
                        {
                            _layout: { x: "1/2" },
                            type: "text-block",
                            subsection_title: "Social Platform & Tool",
                            subsection_content:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, laoreet aliquam aliquam curabitur nisl ac. Sit ut potenti orci sodales sed nisi, leo. Sapien etiam orci lectus enim. Etiam scelerisque sed cursus tortor velit vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, laoreet aliquam aliquam curabitur nisl ac. Sit ut potenti orci sodales sed nisi, leo. Sapien etiam orci lectus enim. Etiam scelerisque sed cursus tortor velit vitae.",
                        },
                        {
                            _layout: { x: "1/2" },
                            type: "media-block",
                            mediaObject: {
                                type: "image",
                                url: "https://drive.google.com/file/d/1LYY8S_cff0HkpVkNVKsFR9TQgX4s9h0W/view?usp=sharing",
                                alt: "image",
                                width: generateRandom("width"),
                            },
                        },
                        {
                            _layout: { x: "1/2" },
                            type: "text-block",
                            subsection_title: "Social Platform & Tool",
                            subsection_content:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, laoreet aliquam aliquam curabitur nisl ac. Sit ut potenti orci sodales sed nisi, leo. Sapien etiam orci lectus enim. Etiam scelerisque sed cursus tortor velit vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, laoreet aliquam aliquam curabitur nisl ac. Sit ut potenti orci sodales sed nisi, leo. Sapien etiam orci lectus enim. Etiam scelerisque sed cursus tortor velit vitae.",
                        },
                        {
                            _layout: { x: "1/4" },
                            type: "media-block",
                            mediaObject: {
                                type: "image",
                                url: "https://cdn.dribbble.com/users/56717/screenshots/1682706/media/b5bdb4c57c83e69708254b9af9e63d46.jpg?compress=1&resize=800x600&vertical=top",
                                width: generateRandom("width"),
                            },
                        },
                        {
                            _layout: { x: "1/4" },
                            type: "media-block",
                            mediaObject: {
                                type: "image",
                                url: "https://cdn.dribbble.com/users/56717/screenshots/1682706/media/b5bdb4c57c83e69708254b9af9e63d46.jpg?compress=1&resize=800x600&vertical=top",
                                width: generateRandom("width"),
                            },
                        },
                    ],
                },

                {
                    section_title: "DEVELOPMENT",
                    section_content: null,
                    subsections: [
                        {
                            _layout: { x: "1/2" },
                            subsection_title: "Stack",
                            subsection_content:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, laoreet aliquam aliquam curabitur nisl ac. Sit ut potenti orci sodales sed nisi, leo. Sapien etiam orci lectus enim. Etiam scelerisque sed cursus tortor velit vitae.",
                        },
                        {
                            _layout: { x: "1/2" },
                            subsection_title: "Data Architecture",
                            subsection_content:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, laoreet aliquam aliquam curabitur nisl ac. Sit ut potenti orci sodales sed nisi, leo. Sapien etiam orci lectus enim. Etiam scelerisque sed cursus tortor velit vitae.",
                        },
                        {
                            _layout: { x: "1/2" },
                            type: "media-block",
                            mediaObject: {
                                type: "youtube",
                                videoId: "_1uS0_rgj14",
                            },
                        },
                        {
                            _layout: { x: "1/2" },
                            type: "media-block",
                            mediaObject: {
                                type: "youtube",
                                videoId: "Hi8DVOaZ0Ug",
                            },
                        },

                        {
                            subsection_title: "Extra Features",
                            subsection_content:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, laoreet aliquam aliquam curabitur nisl ac. Sit ut potenti orci sodales sed nisi, leo. Sapien etiam orci lectus enim. Etiam scelerisque sed cursus tortor velit vitae.",
                        },
                    ],
                },
            ],
        },
        {
            no: "v.1.1.0",
            num: { major: 1, minor: 1, bugFix: 0 },
            content: [
                {
                    section_title: "Mobile Support",
                    section_content:
                        "Finally implement mobile support for webapp usage",
                    subsections: [
                        {
                            subsection_title: "Multi-Device Responsiveness",
                            subsection_content:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, laoreet aliquam aliquam curabitur nisl ac. Sit ut potenti orci sodales sed nisi, leo. Sapien etiam orci lectus enim. Etiam scelerisque sed cursus tortor velit vitae.",
                        },
                    ],
                },
            ],
        },
    ],
};

export default {
    generateRandom,
    projectDetailSample,
};
