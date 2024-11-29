const salesAnalyticsDonutChart = {
    series: [56, 38, 26],
    chartOptions: {
        chart: {
            type: 'donut',
            height: 240,
        },
        labels: ['Series A', 'Series B', 'Series C'],
        colors: ['#556ee6', '#34c38f', '#f46a6a'],
        legend: {
            show: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                }
            }
        }
    }
};

const ChatData = [
    {
        id: 1,
        name: 'Steven Franklin',
        message: 'Hello!',
        time: '10:00',
    },
    {
        id: 2,
        align: 'right',
        name: 'Henry Wells',
        message: 'Hi, How are you? What about our next meeting?',
        time: '10:02'
    },
    {
        id: 3,
        name: 'Steven Franklin',
        message: 'Yeah everything is fine',
        time: '10:06'
    },
    {
        id: 4,
        name: 'Steven Franklin',
        message: '& Next meeting tomorrow 10.00AM',
        time: '10:06'
    },
    {
        id: 5,
        align: 'right',
        name: 'Henry Wells',
        message: "Wow that's great",
        time: '10:02'
    },
]

const widgetData = [
    {
        title: "Orders",
        value: "1,452",
        percentageChange: "+ 0.2%",
        iconClass: "bx-copy-alt",
        extraInfo: "From previous period",
        colorClass: "soft-success"
    },
    {
        title: "Revenue",
        value: "$ 28,452",
        percentageChange: "+ 0.2%",
        iconClass: "bx-archive-in",
        extraInfo: "From previous period",
        colorClass: "soft-success"
    },
    {
        title: "Average Price",
        value: "$ 16.2",
        percentageChange: "0%",
        iconClass: "bx-purchase-tag-alt",
        extraInfo: "From previous period",
        colorClass: "soft-warning"
    }
]

const productsData = [
    {
        name: "Product A",
        price: "$2,132",
        colorClass: "text-primary"
    },
    {
        name: "Product B",
        price: "$1,763",
        colorClass: "text-success"
    },
    {
        name: "Product C",
        price: "$973",
        colorClass: "text-danger"
    }
]

const tasksData = [
    {
        id: 'tasklistCheck01',
        title: 'Skote Saas Dashboard',
        assignedTo: 'Mark',
    },
    {
        id: 'tasklistCheck02',
        title: 'New Landing UI',
        assignedTo: 'Team A',
    },
    {
        id: 'tasklistCheck03',
        title: ' Brand logo design',
        assignedTo: 'Janis',
    },
    {
        id: 'tasklistCheck04',
        title: ' Blog Template UI',
        assignedTo: 'Dianna',
    },
    {
        id: 'tasklistCheck05',
        title: 'Multipurpose Landing',
        assignedTo: 'Team B',
    },
    {
        id: 'tasklistCheck06',
        title: 'Redesign - Landing page',
        assignedTo: 'Jerry',
    },
    {
        id: 'tasklistCheck07',
        title: 'Skote Crypto Dashboard',
        assignedTo: 'Eric',
    },
]

export { salesAnalyticsDonutChart, ChatData, widgetData, productsData, tasksData };
