import { config } from "dotenv";
config();

export default {
    title: "Castly",
    tags: [
        "Development",
        "FullStack",
        "Typescript",
        "NextJS",
        "FrontEnd",
        "Tailwind",
        "ShadCN",
        "Responsive",
    ],
    period: {
        start: new Date("01/01/2024"),
        end: new Date(),
    },
    summary:
        "An interactive site for multi-team polls and voting. A recycled version of Servant-Of-The-Month but scaled for attractions across the land.",
    links: {
        // liveDemo: "",
        repo: "https://github.com/jrcallanta/Castly",
    },
    card_image: "",
    card_hue: 35, // Some Hue 0 -> 360
    details: {
        intro: [
            {
                _layout: { x: "1/2" },
                subsection_title: "Inspiration",
                subsection_content:
                    "The previous iteration the app was enjoyed; however, it only applied to the Haunted Mansion team. I wanted to create something that other attraction teams and their leads/trainers could use as well. I decided to scale the application, implementing more features and themes.",
            },
            {
                _layout: { x: "1/2" },
                subsection_title: "In The Future",
                subsection_content:
                    "This repo may or may not be updated frequently with new games to come (:",
            },
        ],
        media: [
            // {
            //     type: "youtube",
            //     videoId: "SomeYoutubeID",
            // },
            {
                url: `${process.env.HOSTED_URL}/api/assets/Castly/VoteForm_1.png`,
                alt: `${process.env.HOSTED_URL}/api/assets/Castly/VoteForm_1.png`,
            },
            {
                url: `${process.env.HOSTED_URL}/api/assets/Castly/VoteForm_2.png`,
                alt: `${process.env.HOSTED_URL}/api/assets/Castly/VoteForm_2.png`,
            },
            {
                url: `${process.env.HOSTED_URL}/api/assets/Castly/VoteForm_3.png`,
                alt: `${process.env.HOSTED_URL}/api/assets/Castly/VoteForm_3.png`,
            },
            {
                url: `${process.env.HOSTED_URL}/api/assets/Castly/VoteForm_4.png`,
                alt: `${process.env.HOSTED_URL}/api/assets/Castly/VoteForm_4.png`,
            },
        ],
    },
};
