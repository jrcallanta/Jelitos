import { config } from "dotenv";
config();

export default {
    title: "Servant of the Month",
    featured: true,
    tags: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Development",
        "Design",
        "Figma",
        "JWT",
        "BCrypt",
        "Lodash",
    ],
    period: {
        start: new Date("03/13/2023"),
        end: new Date(),
    },
    summary:
        "A simple webapp allowing for voter submissions and admin access over vote management. ",
    links: {
        repo: "https://github.com/jrcallanta/ServantOfTheMonth",
    },
    card_image: `http://localhost:${process.env.PORT}/api/assets/ServantOfTheMonth/Survey_Page.png`,
    card_hue: 260,
    details: {
        intro: [
            {
                _layout: { x: "1/2" },
                subsection_title: "Problem",
                subsection_content:
                    "While working at Disneyland's cult favorite, Haunted Mansion, my supervisor at the time had a monthly responsibilty of counting paper submissions for the 'servant of the month'. He mentioned it being tedious and that options he found online required payments not worth the cost. I took it upon myself to create something he could use that caters specifically to the job at hand.",
            },
            {
                _layout: { x: "1/2" },
                subsection_title: "Solution",
                subsection_content:
                    "The Servant Of The Month webapp works both as a form for cast members to submit their votes and as an interface where the admin can view and manage them. The admin dashboard is secured through password login with authentication persistance, requiring access tokens for database manipulation.",
            },
        ],
        media: [
            {
                type: "youtube",
                videoId: "OF9ZI06C6MA",
            },
            {
                url: `http://localhost:${process.env.PORT}/api/assets/ServantOfTheMonth/Survey_Page.png`,
                alt: `http://localhost:${process.env.PORT}/api/assets/ServantOfTheMonth/Survey_Page.png`,
            },
            {
                url: `http://localhost:${process.env.PORT}/api/assets/ServantOfTheMonth/Survey_Page_2.png`,
                alt: `http://localhost:${process.env.PORT}/api/assets/ServantOfTheMonth/Survey_Page_2.png`,
            },
            {
                url: `http://localhost:${process.env.PORT}/api/assets/ServantOfTheMonth/Admin_Login_Page.png`,
                alt: `http://localhost:${process.env.PORT}/api/assets/ServantOfTheMonth/Admin_Login_Page.png`,
            },
            {
                url: `http://localhost:${process.env.PORT}/api/assets/ServantOfTheMonth/Admin_Login_Page_2.png`,
                alt: `http://localhost:${process.env.PORT}/api/assets/ServantOfTheMonth/Admin_Login_Page_2.png`,
            },
            {
                url: `http://localhost:${process.env.PORT}/api/assets/ServantOfTheMonth/Votes_Page.png`,
                alt: `http://localhost:${process.env.PORT}/api/assets/ServantOfTheMonth/Votes_Page.png`,
            },
            {
                url: `http://localhost:${process.env.PORT}/api/assets/ServantOfTheMonth/Votes_Page_2.png`,
                alt: `http://localhost:${process.env.PORT}/api/assets/ServantOfTheMonth/Votes_Page_2.png`,
            },
        ],
    },
};
