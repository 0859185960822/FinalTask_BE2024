import { Clients1, Clients2, Clients3, Clients4, Clients5, Clients6 } from "../../assets/images/clients/data"
import { avatar1, avatar2, avatar3, avatar5, avatar8 } from "../../assets/images/users/data"
import { Img1, Img2, Img3 } from "../../assets/images/crypto/blog/data"
const cards = [
    {
        avatarClass: "warning",
        avatar: "bitcoin",
        name: "Bitcoin",
        price: "$ 9134.39",
        change: "+ 0.0012.23 ( 0.2 % )",
        changeClass: "mdi mdi-arrow-up ms-1 text-success",
    },
    {
        avatarClass: "primary",
        avatar: "ethereum",
        name: "Ethereum",
        price: "$ 245.44",
        change: "- 004.12 ( 0.1 % )",
        changeClass: "mdi mdi-arrow-down ms-1 text-danger",
    },
    {
        avatarClass: "info",
        avatar: "litecoin",
        name: "Litecoin",
        price: "$ 63.61",
        change: "+ 0.0001.12 ( 0.1 % )",
        changeClass: "mdi mdi-arrow-up ms-1 text-success",
    },
]

const clients = [
    { imageSrc: Clients1 },
    { imageSrc: Clients2 },
    { imageSrc: Clients3 },
    { imageSrc: Clients4 },
    { imageSrc: Clients5 },
    { imageSrc: Clients6 },
]

const timelineData = [
    {
        date: "December, 2019",
        title: "ICO Platform Idea",
        description: "It will be as simple as occidental; in fact, it will be Cambridge"
    },
    {
        date: "January, 2020",
        title: "Research on project",
        description: "To an English person, it will seem like simplified English existence."
    },
    {
        date: "February, 2020",
        title: "ICO & Token Design",
        description: "For science, music, sport, etc., Europe uses the same vocabulary."
    },
    {
        date: "March, 2020",
        title: "ICO Launch Platform",
        description: "New common language will be more simple than existing."
    },
    {
        date: "April, 2020",
        title: "Token sale round 1",
        description: "It will be as simple as occidental; in fact, it will be Cambridge"
    },
    {
        date: "May, 2020",
        title: "Token sale round 2",
        description: "To an English person, it will seem like simplified English existence."
    }
]

const teamData = [
    {
        name: "Mark Hurley",
        role: "CEO & Lead",
        image: avatar2,
        socialLinks: [
            {
                "title": "Facebook",
                "iconClass": "mdi mdi-facebook"
            },
            {
                "title": "Linkedin",
                "iconClass": "mdi mdi-linkedin"
            },
            {
                "title": "Google",
                "iconClass": "mdi mdi-google"
            }
        ]
    },
    {
        name: "Calvin Smith",
        role: "Blockchain developer",
        image: avatar3,
        socialLinks: [
            {
                "title": "Facebook",
                "iconClass": "mdi mdi-facebook"
            },
            {
                "title": "Linkedin",
                "iconClass": "mdi mdi-linkedin"
            },
            {
                "title": "Google",
                "iconClass": "mdi mdi-google"
            }
        ]
    },
    {
        name: "Vickie Sample",
        role: "Designer",
        image: avatar8,
        socialLinks: [
            {
                "title": "Facebook",
                "iconClass": "mdi mdi-facebook"
            },
            {
                "title": "Linkedin",
                "iconClass": "mdi mdi-linkedin"
            },
            {
                "title": "Google",
                "iconClass": "mdi mdi-google"
            }
        ]
    },
    {
        name: "Alma Farley",
        role: "App developer",
        image: avatar5,
        socialLinks: [
            {
                "title": "Facebook",
                "iconClass": "mdi mdi-facebook"
            },
            {
                "title": "Linkedin",
                "iconClass": "mdi mdi-linkedin"
            },
            {
                "title": "Google",
                "iconClass": "mdi mdi-google"
            }
        ]
    },
    {
        name: "Amy Hood",
        role: "Designer",
        image: avatar1,
        socialLinks: [
            {
                "title": "Facebook",
                "iconClass": "mdi mdi-facebook"
            },
            {
                "title": "Linkedin",
                "iconClass": "mdi mdi-linkedin"
            },
            {
                "title": "Google",
                "iconClass": "mdi mdi-google"
            }
        ]
    }
]

const blogData = [
    {
        image: Img1,
        date: "04 Mar, 2020",
        title: "Donec pede justo, fringilla vele",
        content: "If several languages coalesce, the grammar of the resulting language"
    },
    {
        image: Img2,
        date: "12 Feb, 2020",
        title: "Aenean ut eros et nisl",
        content: "Everyone realizes why a new common language would be desirable"
    },
    {
        image: Img3,
        date: "06 Jan, 2020",
        title: "In turpis, pellentesque posuere",
        content: "To an English person, it will seem like simplified English, as a skeptical Cambridge"
    }
]

export { cards, clients, timelineData, teamData, blogData }