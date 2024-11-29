const revenueChart = {
    series: [{
        name: 'Revenue',
        data: [42, 85, 101, 56, 37, 105, 38, 58, 92, 82, 72, 32]
    }],
    chartOptions: {
        chart: {
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '14%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1

        },
        colors: ['#556ee6'],
    }
};

const timelineData = [
    {
        active: true,
        icon: "bx bx-server h4 text-primary",
        iconClass: "bx bx-right-arrow-circle bx-fade-right",
        title: "Back end Developer",
        link: "javascript: void(0);",
        date: "2016 - 19",
    },
    {
        active: false,
        icon: "bx bx-code h4 text-primary",
        iconClass: "bx bx-right-arrow-circle",
        title: "Front end Developer",
        link: "javascript: void(0);",
        date: "2013 - 16",
    },
    {
        active: false,
        icon: "bx bx-edit h4 text-primary",
        iconClass: "bx bx-right-arrow-circle",
        title: "UI /UX Designer",
        link: "javascript: void(0);",
        date: "2011 - 13",
    },
]

const projectData = [
    {
        id: 1,
        projectName: "Skote admin UI",
        startDate: "2 Sep, 2019",
        endDate: "20 Oct, 2019",
        price: "$506",
    },
    {
        id: 2,
        projectName: "Skote admin Logo",
        startDate: "1 Sep, 2019",
        endDate: "2 Sep, 2019",
        price: "$94",
    },
    {
        id: 3,
        projectName: "Redesign - Landing page",
        startDate: "21 Sep, 2019",
        endDate: "29 Sep, 2019",
        price: "$156",
    },
    {
        id: 4,
        projectName: "App Landing UI",
        startDate: "29 Sep, 2019",
        endDate: "04 Oct, 2019",
        price: "$122",
    },
    {
        id: 5,
        projectName: "Blog Template",
        startDate: "05 Oct, 2019",
        endDate: "16 Oct, 2019",
        price: "$164",
    },
    {
        id: 6,
        projectName: "Redesign - Multipurpose Landing",
        startDate: "17 Oct, 2019",
        endDate: "05 Nov, 2019",
        price: "$192",
    },
    {
        id: 7,
        projectName: "Logo Branding",
        startDate: "04 Nov, 2019",
        endDate: "05 Nov, 2019",
        price: "$94",
    },
]

export { revenueChart, timelineData, projectData };