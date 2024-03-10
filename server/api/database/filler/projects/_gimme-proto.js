import { config } from "dotenv";
config();

export default {
    title: "Gimme Proto",
    tags: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Development",
        "Design",
        "BCrypt",
    ],
    period: {
        start: new Date("09/01/2022"),
        end: new Date("01/31/2023"),
    },
    summary:
        "A webapp prototype for creating custom wishlists. A social platform for generous friends and gifters.",
    links: {
        liveDemo: "http://gimme.jelitos.com",
        repo: "https://github.com/jrcallanta/Gimme",
    },
    card_image: `${process.env.HOSTED_URL}/api/assets/Gimme/List_Page.png`,
    card_hue: 290,
    details: {
        intro: [
            {
                _layout: { x: "1/2" },
                subsection_title: "Problem",
                subsection_content:
                    "When the holidays come around, or birthdays, my friends and I tend to question each other about what we want for presents. Some times these desires are tangible items, but sometimes they're as abstract as quality time or vacations. There are apps already they allow users to create wishlists for physical things, but I wanted to create something that gave users a little more freedom and creativity.",
            },
            {
                _layout: { x: "1/2" },
                subsection_title: "Solution",
                subsection_content:
                    "Gimme is just a bare-bones web app protoype, but it meets the requirements that my friends and I wanted at the time. Authorized Users can create and manage their own wish lists while also providing a privacy setting in case their desires are simply personal. Authenticated Users can also create and manage items in each list, with each item having content such as tags, descriptions, links, and images.",
            },

            {
                _layout: { x: "1" },
                subsection_title: "Disclaimer",
                subsection_content:
                    "This project was created primarily as practice using React and the MERN stack. The project may or may not be continued or supported. Any major issues/bugs may be resolved in the future. No personal information will be used for malicious intent.",
            },
        ],
        media: [
            {
                type: "youtube",
                videoId: "m8z2MYfLFQo",
            },
            {
                url: `${process.env.HOSTED_URL}/api/assets/Gimme/Login_Page.png`,
                alt: `${process.env.HOSTED_URL}/api/assets/Gimme/Login_Page.png`,
            },
            {
                url: `${process.env.HOSTED_URL}/api/assets/Gimme/List_Page.png`,
                alt: `${process.env.HOSTED_URL}/api/assets/Gimme/List_Page.png`,
            },
            {
                url: `${process.env.HOSTED_URL}/api/assets/Gimme/Item_Page.png`,
                alt: `${process.env.HOSTED_URL}/api/assets/Gimme/Item_Page.png`,
            },
            {
                url: `${process.env.HOSTED_URL}/api/assets/Gimme/Item_Page_2.png`,
                alt: `${process.env.HOSTED_URL}/api/assets/Gimme/Item_Page_2.png`,
            },
            {
                url: `${process.env.HOSTED_URL}/api/assets/Gimme/Item_Edit_Page.png`,
                alt: `${process.env.HOSTED_URL}/api/assets/Gimme/Item_Edit_Page.png`,
            },
            {
                url: `${process.env.HOSTED_URL}/api/assets/Gimme/Following_Page.png`,
                alt: `${process.env.HOSTED_URL}/api/assets/Gimme/Following_Page.png`,
            },
        ],
    },
};
