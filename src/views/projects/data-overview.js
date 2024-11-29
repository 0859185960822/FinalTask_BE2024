import { avatar2, avatar1, avatar4 } from "../../assets/images/users/data"

const barChart = {
    series: [{
        name: 'Overview',
        data: [42, 56, 40, 64, 26, 42, 56, 35, 62]
    }],
    chartOptions: {
        chart: {
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '14%',
                endingShape: 'rounded'
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                }
            }
        },
        yaxis: {
            title: {
                text: '% (Percentage)'
            }
        },
        xaxis: {
            labels: {
                rotate: -90
            },
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            title: {
                text: 'Week',
            }
        },
        colors: ['#556ee6'],
    },
};

const memberData = [
    {
        imageSrc: avatar2,
        name: "Daniel Canales",
        jobTitle1: "Frontend",
        jobTitle2: "UI",

    },
    {
        imageSrc: avatar1,
        name: "Jennifer Walker",
        jobTitle1: "UI / UX",
    },
    {
        avatarTitle: "C",
        name: "Carl Mackay",
        jobTitle1: "Backend"
    },
    {
        imageSrc: avatar4,
        name: "Janice Cole",
        jobTitle1: "Frontend",
        jobTitle2: "UI",
    },
    {
        avatarTitle: "T",
        name: "Tony Brafford",
        jobTitle1: "Backend"
    }
];

const filesData = [
    {
        name: 'Skote Landing.Zip',
        size: '3.25 MB',
        link: 'javascript:void(0);',
        downloadLink: 'javascript:void(0);'
    },
    {
        name: 'Skote Admin.Zip',
        size: '3.15 MB',
        link: 'javascript:void(0);',
        downloadLink: 'javascript:void(0);'
    },
    {
        name: 'Skote Logo.Zip',
        size: '2.02 MB',
        link: 'javascript:void(0);',
        downloadLink: 'javascript:void(0);'
    },
    {
        name: 'Veltrix admin.Zip',
        size: '2.25 MB',
        link: 'javascript:void(0);',
        downloadLink: 'javascript:void(0);'
    }
];
export { barChart, memberData, filesData };