const items = [
    { iconClass: "mdi mdi-google-drive font-size-16 text-muted me-2", text: "Google Drive" },
    { iconClass: "mdi mdi-dropbox font-size-16 me-2 text-primary", text: "Dropbox" },
    { iconClass: "mdi mdi-share-variant font-size-16 me-2", text: "Shared", badge: "01", badgeClass: "bg-success rounded-pill ms-2" },
    { iconClass: "mdi mdi-star-outline text-muted font-size-16 me-2", text: "Starred" },
    { iconClass: "mdi mdi-trash-can text-danger font-size-16 me-2", text: "Trash" },
    { iconClass: "mdi mdi-cog text-muted font-size-16 me-2", text: "Setting", badge: "01", badgeClass: "bg-success rounded-pill ms-2" }
]

const cardsData = [
    {
        icon: "bx bxs-folder font-size-24 text-warning",
        title: "Design",
        files: "12 Files",
        storage: "6GB"
    },
    {
        icon: "bx bxs-folder font-size-24 text-warning",
        title: "Development",
        files: "20 Files",
        storage: "8GB"
    },
    {
        icon: "bx bxs-folder font-size-24 text-warning",
        title: "Project A",
        files: "06 Files",
        storage: "2GB"
    },
    {
        icon: "bx bxs-folder font-size-24 text-warning",
        title: "Admin",
        files: "08 Files",
        storage: "4GB"
    },
    {
        icon: "bx bxs-folder font-size-24 text-warning",
        title: "Sketch Design",
        files: "12 Files",
        storage: "6GB"
    },
    {
        icon: "bx bxs-folder font-size-24 text-warning",
        title: "Applications",
        files: "20 Files",
        storage: "8GB"
    }
]

const recentData = [
    {
        icon: "mdi mdi-file-document font-size-16 align-middle text-primary me-2",
        fileName: "index.html",
        date: "12-10-2020, 09:45",
        size: "09 KB",
    },
    {
        icon: "mdi mdi-folder-zip font-size-16 align-middle text-warning me-2",
        fileName: "Project-A.zip",
        date: "11-10-2020, 17:05",
        size: "115 KB",
    },
    {
        icon: "mdi mdi-image font-size-16 align-middle text-muted me-2",
        fileName: "Img-1.jpeg",
        date: "11-10-2020, 13:26",
        size: "86 KB",
    },
    {
        icon: "mdi mdi-text-box font-size-16 align-middle text-muted me-2",
        fileName: "update list.txt",
        date: "10-10-2020, 11:32",
        size: "08 KB",
    },
    {
        icon: "mdi mdi-folder font-size-16 align-middle text-warning me-2",
        fileName: "Project B",
        date: "10-10-2020, 10:51",
        size: "72 KB",
    },
    {
        icon: "mdi mdi-text-box font-size-16 align-middle text-muted me-2",
        fileName: "Changes list.txt",
        date: "09-10-2020, 17:05",
        size: "07 KB",
    },
    {
        icon: "mdi mdi-image font-size-16 align-middle text-success me-2",
        fileName: "Img-2.png",
        date: "09-10-2020, 15:12",
        size: "31 KB",
    },
    {
        icon: "mdi mdi-folder font-size-16 align-middle text-warning me-2",
        fileName: "Project C",
        date: "09-10-2020, 10:11",
        size: "20 KB",
    },
    {
        icon: "bx bxs-file font-size-16 align-middle text-primary me-2",
        fileName: "starter-page.html",
        date: "08-10-2020, 03:22",
        size: "11 KB",
    },
]

const storageData = [
    {
        icon: "mdi mdi-image",
        iconclass: "success",
        title: "Images",
        description: "176 Files",
        size: "6 GB",
    },
    {
        icon: "mdi mdi-play-circle-outline",
        iconclass: "danger",
        title: "Video",
        description: "45 Files",
        size: "4.1 GB",
    },
    {
        icon: "mdi mdi-music",
        iconclass: "info",
        title: "Music",
        description: "21 Files",
        size: "3.2 GB",
    },
    {
        icon: "mdi mdi-file-document",
        iconclass: "primary",
        title: "Document",
        description: "21 Files",
        size: "2 GB",
    },
    {
        icon: "mdi mdi-folder",
        iconclass: "warning",
        title: "Others",
        description: "20 Files",
        size: "1.4 GB",
    },
]
export { items, cardsData, recentData, storageData }