import { avatar1, avatar4, avatar2, avatar3, avatar5 } from "@/assets/images/users/data"
import { airbnb, mailchimp, reddit, amazon, adobePhotoshop, line, wechat, sass, adobe, flutter, spotify } from "@/assets/images/companies/data"

const slidesData = [
    {
        id: 1,
        avatarSrc: avatar4,
        name: "Stephen Hadley",
        badgeText: "Freelance",
        badgeClass: "badge-soft-info",
        location: "Germany",
        avatarSrc2: avatar2,
        name2: "Charles Brown",
        badgeText2: "Full Time",
        badgeClass2: "badge-soft-success",
        location2: "Cambodia",
    },
    {
        id: 2,
        avatarSrc: avatar1,
        name: "Adam Miller",
        badgeText: "Internship",
        badgeClass: "badge-soft-warning",
        location: "Australia",
        avatarSrc2: avatar3,
        name2: "Keith Gonzales",
        badgeText2: "Freelance",
        badgeClass2: "badge-soft-info",
        location2: "Belgium",
    },
    {
        id: 3,
        avatarSrc: avatar4,
        name: "Bonnie Harney",
        badgeText: "Full Timer",
        badgeClass: "badge-soft-success",
        location: "Syria",
        avatarSrc2: avatar2,
        name2: "Dolores Minter",
        badgeText2: "Part Time",
        badgeClass2: "badge-soft-danger",
        location2: "San Marino",
    },
]

const jobData = [
    {
        companyLogo: airbnb,
        jobTitle: "Project Manager",
        companyName: "Themesbrand",
        location: "California",
        vacancies: 8,
    },
    {
        companyLogo: mailchimp,
        jobTitle: "Marketing Director",
        companyName: "Themesbrand",
        location: "Danemark",
        vacancies: 12,
    },
    {
        companyLogo: reddit,
        jobTitle: "Product Designer",
        companyName: "Themesbrand",
        location: "France",
        vacancies: 25,
    },
    {
        companyLogo: amazon,
        jobTitle: "Magento Developer",
        companyName: "Themesbrand",
        location: "Hong-Kong",
        vacancies: 8,
    },
    {
        companyLogo: adobePhotoshop,
        jobTitle: "Product Sales Specialist",
        companyName: "Themesbrand",
        location: "Louisiana",
        vacancies: 1,
    },
    {
        companyLogo: line,
        jobTitle: "Business Associate",
        companyName: "Themesbrand",
        location: "Phoenix",
        vacancies: 15,
    },
]

const activityData = [
    {
        avatar: avatar5,
        userName: "Charles Brown",
        action: "applied for the job <b>Sr.frontend Developer</b>",
        time: "3 min ago",
    },
    {
        avatar: avatar4,
        userName: "Your subscription expires today",
        action: '<a href="javascript: void(0);">Renew Now</a>',
        time: "53 min ago",
    },
    {
        avatarText: "JA",
        userName: "Jennifer Alexandar",
        action: "created a new account as a <b>Freelance</b>.",
        time: "1 hrs ago",
    },
    {
        avatarText: "ME",
        avatar: avatar2,
        userName: "Mark Ellison",
        action: "applied for the job <b>Project Manager</b>",
        time: "3 hrs ago",
    },
    {
        avatarText: "AZ",
        userName: "Acolin Zelton",
        action: "created a new account as a <b>Freelance</b>.",
        time: "1 hrs ago",
    },
]

const recentJobData = [
    {
        companyLogo: wechat,
        jobTitle: "Marketing Director",
        companyName: "Themesbrand",
        location: "USA",
        timeAgo: "53",
        hrs: "sec"
    },
    {
        companyLogo: sass,
        jobTitle: "Frontend Developer",
        companyName: "Themesbrand",
        location: "Hong-Kong",
        timeAgo: "47",
        hrs: "min "
    },
    {
        companyLogo: adobe,
        jobTitle: "React Developer",
        companyName: "Creative Agency",
        location: "Danemark",
        timeAgo: "1",
        hrs: "hrs"
    },
    {
        companyLogo: airbnb,
        jobTitle: "NodeJs Developer",
        companyName: "Skote Themes",
        location: "Louisiana",
        timeAgo: "2",
        hrs: "hrs"
    },
    {
        companyLogo: flutter,
        jobTitle: "Digital Marketing",
        companyName: "Web Technology pvt.Ltd",
        location: "Danemark",
        timeAgo: "8",
        hrs: "hrs"
    },
    {
        companyLogo: mailchimp,
        jobTitle: "Marketing Director",
        companyName: "Skote Technology",
        location: "Dominica",
        timeAgo: "1",
        hrs: "days"
    },
    {
        companyLogo: spotify,
        jobTitle: "Business Associate",
        companyName: "Themesbrand",
        location: "Russia",
        timeAgo: "2",
        hrs: "hrs"
    },
    {
        companyLogo: reddit,
        jobTitle: "Backend Developer",
        companyName: "Adobe Agency",
        location: "Danemark",
        timeAgo: "3",
        hrs: "hrs"
    },
]

export { slidesData, jobData, activityData, recentJobData };