import { config } from "dotenv";
config();

export default {
    title: "GameLine",
    tags: ["Java", "ObjectOrientedProgramming", "CommandLine", "Game"],
    period: {
        start: new Date("12/1/2023"),
        end: new Date(),
    },
    summary:
        "A command-line game collection, and a singular program to play them all.",
    links: {
        // liveDemo: "",
        repo: "https://github.com/jrcallanta/GameLine",
    },
    card_image: "",
    card_hue: 180, // Some Hue 0 -> 360
    details: {
        intro: [
            {
                _layout: { x: "1/2" },
                subsection_title: "Inspiration",
                subsection_content:
                    "I had been solving some HackerRank & LeetCode programming questions when I realized that some questions had interesting concepts. I thought it'd be fun to take these concepts and formulate some games out of them. The games can be played to practice relevant computer science concepts, or simply as a fun passtime.",
            },
            {
                _layout: { x: "1/2" },
                subsection_title: "In The Future",
                subsection_content:
                    "Every now and then I'll come across a new and interesting idea. If I'm able to devise a game out of it, surely I'll make it happen. This repo may or may not be updated frequently with new games to come (:",
            },
        ],
        // media: [
        //     {
        //         type: "youtube",
        //         videoId: "SomeYoutubeID",
        //     },
        //     {
        //         url: `${process.env.HOSTED_URL}/api/assets/SomeProject/SomeImage.png`,
        //         alt: `${process.env.HOSTED_URL}/api/assets/SomeProject/SomeImage.png`,
        //     },
        // ],
    },
};
