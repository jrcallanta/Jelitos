import { config } from "dotenv";
config();

export default {
    title: "Huddle",
    tags: [
        "MongoDB",
        "React.js",
        "Next.js",
        "NextAuth",
        "GoogleAPIs",
        "Typescript",
        "Tailwind",
        "Development",
        "Design",
        "Figma",
    ],
    period: {
        start: new Date("06/01/2023"),
        end: new Date("12/31/2023"),
    },
    summary:
        "A webapp for meetups and social events. A platform for the spontaneous friends and the ones who always have F.O.M.O.",
    links: {
        repo: "https://github.com/jrcallanta/Huddle",
    },
    card_image: "",
    card_hue: 20,
    details: {
        intro: [
            {
                _layout: { x: "1/2" },
                subsection_title: "Problem",
                subsection_content:
                    "Some friends like to spend time together. Sometimes they don't always have a plan. All they know is that they wanna hang out. They can send a text to everybody they know, but that's a lot of invites to wait on, assuming anybody replies at all. Why not create an event on Facebook or some other site? Nah, there's too much setup only for a momentary meetup. That has to be a simpler, quicker, and less humbling solution.",
            },
            {
                _layout: { x: "1/2" },
                subsection_title: "Solution",
                subsection_content:
                    "Huddle is an application built for quick meetups and quicker invites. A host would need only a title and start time. An opional location may be added later as well, with help of Google's Maps & Places APIs. The app allows users to visualize their huddles for the day, grouped together by the hours prior. User can also view huddles by their locations on a map display, seeing how close or far away two huddles may be. Invited users can see who else is going to the huddle, helping them decide if the crowd matches the vibes. Add your friends. Add your friends's friends. Y'all will huddle up in no time.",
            },

            {
                _layout: { x: "1" },
                subsection_title: "Disclaimer",
                subsection_content:
                    "This project was created primarily as practice using Typescript and Tailwind. The project may or may not be continued or supported. Any major issues/bugs may be resolved in the future. No personal information will be used for malicious intent.",
            },
        ],
        media: [
            {
                type: "youtube",
                videoId: "z2Ljl8kpxiA",
            },
        ],
    },
};
