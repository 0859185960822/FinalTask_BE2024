import Img6 from "@/assets/images/small/img-6.jpg"
import Img1 from "@/assets/images/small/img-1.jpg"
import Img2 from "@/assets/images/small/img-2.jpg"


const items = [
    {
        id: 1,
        cardClass: "mini-stats-wid",
        label: "Total Post",
        value: 120,
        iconClass: "bx bxs-book-bookmark",
    },
    {
        id: 2,
        cardClass: "blog-stats-wid",
        label: "Pages",
        value: 86,
        iconClass: "bx bxs-note",
    },
    {
        id: 3,
        cardClass: "blog-stats-wid",
        label: "Comments",
        value: "4,235",
        iconClass: "bx bxs-message-square-dots",
    },
]

const visitorData = [
    {
        id: 1,
        title: "Today",
        value: 1024,
        percentChange: "",
    },
    {
        id: 2,
        title: "This Month",
        value: 12356,
        percentChange: "0.2 %",
        arrow: "mdi mdi-arrow-up ms-1"
    },
    {
        id: 3,
        title: "This Year",
        value: 102354,
        percentChange: "0.1 %",
        arrow: "mdi mdi-arrow-up ms-1"
    },
]

const topVisitorsData = [
    {
        id: 1,
        location: "California",
        percentage: "78%",
    },
    {
        id: 2,
        location: "Nevada",
        percentage: "69%",
        progressColor: "warning"
    },
    {
        id: 3,
        location: "Texas",
        percentage: "61%",
        progressColor: "success"
    },
]

const activityData = [
    {
        id: 1,
        iconClass: "bxs-right-arrow-circle font-size-18 bx-fade-right text-primary",
        date: "10 Nov",
        content: "Posted Beautiful Day with Friends blog...",
        link: "#",
        linkText: "View",
    },
    {
        id: 2,
        iconClass: "bx-right-arrow-circle font-size-18",
        date: "08 Nov",
        content: "If several languages coalesce, the grammar of the resulting...",
        link: "#",
        linkText: "Read",
    },
    {
        id: 3,
        iconClass: "bx-right-arrow-circle font-size-18",
        date: "02 Nov",
        content: "Create Drawing a sketch blog",
        link: "#",
        linkText: "",
    },
    {
        id: 4,
        iconClass: "bx-right-arrow-circle font-size-18",
        date: "24 Oct",
        content: "In enim justo, rhoncus ut, imperdiet a venenatis vitae",
        link: "#",
        linkText: "",
    },
    {
        id: 5,
        iconClass: "bx-right-arrow-circle font-size-18",
        date: "21 Oct",
        content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut",
        link: "#",
        linkText: "",
    },
]

const blogPostData = [
    {
        id: 1,
        imageSrc: Img2,
        title: "Beautiful Day with Friends",
        date: "10 Nov, 2020",
        likes: 125,
        comments: 68,
        link: "#",
    },
    {
        id: 2,
        imageSrc: Img6,
        title: "Drawing a sketch",
        date: "02 Nov, 2020",
        likes: 102,
        comments: 48,
        link: "#",
    },
    {
        id: 3,
        imageSrc: Img1,
        title: "Riding bike on road",
        date: "24 Oct, 2020",
        likes: 98,
        comments: 35,
        link: "#",
    },
    {
        id: 4,
        imageSrc: Img2,
        title: "Project discussion with team",
        date: "15 Oct, 2020",
        likes: 92,
        comments: 22,
        link: "#",
    },
]
export { items, visitorData, topVisitorsData, activityData, blogPostData };