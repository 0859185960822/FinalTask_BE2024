import { Img1, Img2, Img4, Img6, Img7 } from "../../assets/images/small/data"

const archiveData = [
    {
        year: 2020,
        total: "03",
        blogs: [
            { title: "Beautiful Day with Friends" },
            { title: "Drawing a sketch" },
            { title: "Project discussion with team" },
        ],
    },
    {
        year: 2019,
        total: "06",
        blogs: [
            { title: "Coffee with Friends" },
            { title: "Neque porro quisquam est" },
            { title: "Quis autem vel eum iure" },
            { title: "Cras mi eu turpis" },
            { title: "Drawing a sketch" },
            { title: "Project discussion with team" },
        ],
    },
    {
        year: 2018,
        total: "03",
        blogs: [
            { title: "Beautiful Day with Friends" },
            { title: "Drawing a sketch" },
            { title: "Project discussion with team" },
        ],
    },
]

const categoriesData = [
    { label: "Design", },
    { label: "Development", badge: true, badgeCount: "04" },
    { label: "Business" },
    { label: "Project" },
    { label: "Travel", badge: true, badgeCount: "12" },
]

const rightbarArchiveData = [
    { year: 2020, badgeCount: "03" },
    { year: 2019, badgeCount: "06" },
    { year: 2018, badgeCount: "05" },
]

const popularData = [
    {
        image: Img7,
        title: "Beautiful Day with Friends",
        date: "10 Apr, 2020",
    },
    {
        image: Img4,
        title: "Drawing a sketch",
        date: "24 Mar, 2020",
    },
    {
        image: Img6,
        title: "Project discussion with team",
        date: "11 Mar, 2020",
    },
]

const badgeList = [
    { label: "Design" },
    { label: "Development" },
    { label: "Business" },
    { label: "Project" },
    { label: "Travel" },
    { label: "Lifestyle" },
    { label: "Photography" },
]

const gridData1 = [
    {
        title: "Beautiful Day with Friends",
        date: "10 Apr, 2020",
        imageSrc: Img2,
        category: "Project",
        commentCount: "12",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet"
    },
    {
        title: "Drawing a sketch",
        date: "24 Mar, 2020",
        imageSrc: Img6,
        category: "Development",
        commentCount: "08",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus quos"
    },
    {
        title: "Riding bike on road",
        date: "10 Apr, 2020",
        imageSrc: Img1,
        category: "Travel",
        commentCount: "08",
        description: "Itaque earum rerum hic tenetur a sapiente delectus ut aut"
    },
    {
        title: "Project discussion with team",
        date: "24 Mar, 2020",
        imageSrc: Img2,
        category: "Development",
        commentCount: "08",
        description: "Sed ut perspiciatis unde omnis iste eaque natus error sit"
    }

]

const detailData = [
    {
        title: "Categories",
        data: "Project",
    },
    {
        class: "mt-4 mt-sm-0",
        title: "Date",
        data: "10 Apr, 2020",
    },
    {
        class: "mt-4 mt-sm-0",
        title: "Post by",
        data: "Gilbert Smith",
    },
]
export { archiveData, categoriesData, rightbarArchiveData, popularData, badgeList, gridData1, detailData }