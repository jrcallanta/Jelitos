import { config } from "dotenv";
config();

export default {
    title: "SomeProject",
    tags: ["sometag"],
    period: {
        start: new Date(), // MM/DD/YYYY
        end: new Date(), // MM/DD/YYYY
    },
    summary: "Some summary about the app. Shown on project card.",
    links: {
        liveDemo: "SomeLinkToSomeLiveSite",
        repo: "SomeLinkToSomeGithubRepo",
    },
    card_image: "SomeLinkToSomeImage",
    card_hue: 80, // Some Hue 0 -> 360
    details: {
        intro: [
            {
                _layout: { x: "1/2" },
                subsection_title: "Some Subsection",
                subsection_content:
                    "Proident eiusmod deserunt magna sint. Eu aliquip proident Lorem quis amet laboris. Est ex laboris excepteur proident labore. Est cupidatat sit mollit est aliqua eu reprehenderit et anim ad laborum sint esse ex. Dolor ea cillum non eu consequat proident mollit minim cupidatat.",
            },
            {
                _layout: { x: "1/2" },
                subsection_title: "Some Other Subsection",
                subsection_content:
                    "Quis labore reprehenderit nulla dolor Lorem. Aliquip duis eu est ex minim minim ex elit aute. Dolor do officia tempor in amet commodo. Culpa amet anim consectetur enim amet ad. Ipsum magna exercitation enim laborum. Ut nostrud aliqua cupidatat amet incididunt deserunt ad aute consequat consectetur amet nisi adipisicing. Consequat ut officia dolore aliquip elit cupidatat quis.",
            },

            {
                _layout: { x: "1" },
                subsection_title: "Disclaimer",
                subsection_content:
                    "Ut mollit reprehenderit reprehenderit eiusmod non sunt nulla dolore culpa do ut reprehenderit. Irure laboris Lorem fugiat enim mollit magna adipisicing pariatur ea sint laboris dolor aliqua. Non dolor reprehenderit amet irure voluptate deserunt esse ipsum reprehenderit.",
            },
        ],
        media: [
            {
                type: "youtube",
                videoId: "SomeYoutubeID",
            },
            {
                url: `${process.env.HOSTED_URL}/api/assets/SomeProject/SomeImage.png`,
                alt: `${process.env.HOSTED_URL}/api/assets/SomeProject/SomeImage.png`,
            },
        ],

        versions: [
            {
                no: "First Try",
                num: { major: 1, minor: 0, bugFix: 0 },
                content: [
                    {
                        section_title: "Amet Mollit Nulla",
                        section_content: null,
                        subsections: [
                            {
                                _layout: { x: "1/2" },
                                type: "text-block",
                                subsection_title: "Aliqua Amet",
                                subsection_content:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, laoreet aliquam aliquam curabitur nisl ac. Sit ut potenti orci sodales sed nisi, leo. Sapien etiam orci lectus enim. Etiam scelerisque sed cursus tortor velit vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, laoreet aliquam aliquam curabitur nisl ac. Sit ut potenti orci sodales sed nisi, leo. Sapien etiam orci lectus enim. Etiam scelerisque sed cursus tortor velit vitae.",
                            },
                            {
                                _layout: { x: "1/2" },
                                type: "media-block",
                                mediaObject: {
                                    type: "youtube",
                                    url: "https://www.youtube.com/watch?v=m8z2MYfLFQo",
                                    videoId: "m8z2MYfLFQo",
                                },
                            },
                        ],
                    },
                    {
                        section_title: "Excepteur Aute Deserunt",
                        section_content: null,
                        subsections: [
                            {
                                _layout: { x: "1/2" },
                                type: "text-block",
                                subsection_title: "Laborum Exercitation",
                                subsection_content:
                                    "Fugiat adipisicing amet Lorem et et dolor ex qui esse nisi ad. Laborum aute labore occaecat in excepteur sint mollit ullamco officia dolor elit voluptate ea. Laborum consequat enim nostrud ad non tempor. Et duis incididunt labore fugiat magna minim. In culpa labore cupidatat cupidatat deserunt non proident sint sint do. Minim velit est consequat nostrud eiusmod culpa labore ipsum irure cupidatat mollit et. Adipisicing commodo quis deserunt sint proident anim excepteur ad.",
                            },
                        ],
                    },
                ],
            },
            {
                no: "A New Era",
                num: { major: 2, minor: 0, bugFix: 0 },
                content: [
                    {
                        section_title: "Aute Lorem quis sit Lorem",
                        section_content: null,
                        subsections: [
                            {
                                _layout: { x: "2/3" },
                                type: "text-block",
                                subsection_title: "Fugiat Lorem",
                                subsection_content:
                                    "Sint eu cupidatat minim sunt duis culpa occaecat ex. Anim culpa tempor id adipisicing dolor exercitation pariatur. Et officia nostrud voluptate est eiusmod aliquip cillum sit. Sunt aliquip et ut sit ipsum sunt consequat. Cupidatat deserunt id veniam sit sit labore qui reprehenderit dolor aliquip eiusmod est do ad. Laboris magna nulla officia commodo veniam deserunt deserunt amet mollit cupidatat dolor incididunt duis.",
                            },
                            {
                                _layout: { x: "1/3" },
                                type: "text-block",
                                subsection_title: "Ullamco Duis",
                                subsection_content:
                                    "Sit reprehenderit mollit irure nulla. Incididunt ullamco eiusmod elit aute id voluptate. Sint adipisicing eu dolor commodo dolore sit qui nostrud officia laborum.",
                            },
                            {
                                _layout: { x: "1" },
                                type: "media-block",
                                mediaObject: {
                                    type: "youtube",
                                    url: "https://www.youtube.com/watch?v=m8z2MYfLFQo",
                                    videoId: "m8z2MYfLFQo",
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    },
};
