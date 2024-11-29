import { avatar4, avatar5, avatar1, avatar2, avatar3, avatar7, avatar6, avatar8 } from "../../assets/images/users/data"

const tasksChart = {
    series: [{
        name: 'Complete Tasks',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 52, 21, 44, 22, 30]
    },
    {
        name: 'All Tasks',
        type: 'line',
        data: [23, 11, 34, 27, 17, 22, 62, 32, 44, 22, 39]
    }],
    chartOptions: {
        chart: {
            stacked: false,
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '20%',
                endingShape: 'rounded'
            }
        },
        colors: ['#556ee6', '#34c38f'],
        fill: {
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        markers: {
            size: 0
        },
        yaxis: {
            min: 0
        },
    }
};

const tasks = [
    {
        index: 1,
        taskType: 'upcoming',
        name: 'Create a Skote Dashboard UI',
        images: [avatar2, avatar1],
        status: 'Waiting',
        checked: false
    },
    {
        index: 2,
        taskType: 'upcoming',
        name: 'Create a New Landing UI',
        images: [avatar4, avatar5],
        status: 'Approved',
        checked: true
    },
    {
        index: 3,
        taskType: 'upcoming',
        name: 'Create a Skote Logo',
        images: [avatar1],
        status: 'Waiting',
        checked: false
    },
    {
        index: 4,
        taskType: 'inprogress',
        name: 'Brand logo design',
        images: [avatar7],
        status: 'Complete',
        checked: true
    },
    {
        index: 5,
        taskType: 'inprogress',
        name: 'Create a Blog Template UI',
        images: [avatar8, avatar1],
        status: 'Pending',
        checked: false
    },
    {
        index: 6,
        taskType: 'completed',
        name: 'Redesign - Landing page',
        images: [avatar6],
        status: 'Complete',
        checked: false
    },
    {
        index: 7,
        taskType: 'completed',
        name: 'Multipurpose Landing',
        images: [avatar7],
        status: 'Complete',
        checked: true
    },
    {
        index: 8,
        taskType: 'completed',
        name: 'Create a Blog Template UI',
        images: [avatar4, avatar2],
        status: 'Complete',
        checked: false
    }
];

const recentData = [
    {
        name: 'Brand logo design',
        avatars: [
            { src: avatar4, alt: '', },
            { src: avatar5, alt: '', }
        ]
    },
    {
        name: 'Create a Blog Template UI',
        avatars: [
            { src: avatar1, alt: '', },
            { src: avatar2, alt: '', },
            { src: avatar3, alt: '', },
            {
                avatarTitle: 'D',
                avatarBgColor: 'info '
            }
        ]
    },
    {
        name: 'Redesign - Landing page',
        avatars: [
            { src: avatar8, alt: '', },
            { src: avatar7, alt: '', }, 
            {
                avatarTitle: 'P',
                avatarBgColor: 'danger'
            }
        ]
    }
]

export { tasksChart, tasks, recentData };