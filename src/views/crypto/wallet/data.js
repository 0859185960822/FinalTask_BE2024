const OveviewChart = {
    series: [{
        type: 'area',
        name: 'BTC',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }, {
        type: 'area',
        name: 'ETH',
        data: [28, 41, 52, 42, 13, 18, 29, 18, 36, 51, 55, 35]
    }, {
        type: 'line',
        name: 'LTC',
        data: [45, 52, 38, 24, 33, 65, 45, 75, 54, 18, 28, 10]
    }],
    chartOptions: {
        chart: {
            height: 240,
            type: 'line',
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2,
            dashArray: [0, 0, 3]
        },
        fill: {
            type: 'solid',
            opacity: [0.15, 0.05, 1],
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        colors: ['#f1b44c', '#3452e1', '#50a5f1'],
    }
};

const activitiesData = [
    {
        id: '#SK3215',
        date: '03 Mar, 2020',
        type: 'Buy',
        currency: 'Bitcoin',
        amount: '1.00952 BTC',
        usd: '$ 9067.62'
    },
    {
        id: '#SK3216',
        date: '04 Mar, 2020',
        type: 'Buy',
        currency: 'Litecoin',
        amount: '0.00214 LTC',
        usd: '$ 9067.62'
    },
    {
        id: '#SK3217',
        date: '05 Mar, 2020',
        type: 'Sell',
        currency: 'Bitcoin',
        amount: '1.00952 BTC',
        usd: '$ 9067.62'
    },
    {
        id: '#SK3218',
        date: '03 Mar, 2020',
        type: 'Sell',
        currency: 'Ethereum',
        amount: '0.00413 ETH',
        usd: '$ 2123.01'
    },
    {
        id: '#SK3219',
        date: '08 Mar, 2020',
        type: 'Buy',
        currency: 'Litecoin',
        amount: '1.00124 LTC',
        usd: '$ 1802.62'
    },
    {
        id: '#SK3220',
        date: '06 Mar, 2020',
        type: 'Sell',
        currency: 'Ethereum',
        amount: '0.00413 ETH',
        usd: '$ 2123.01'
    },
    {
        id: '#SK3221',
        date: '05 Mar, 2020',
        type: 'Buy',
        currency: 'Bitcoin',
        amount: '1.00952 BTC',
        usd: '$ 9067.62'
    },
    {
        id: '#SK32122',
        date: '03 Mar, 2020',
        type: 'Buy',
        currency: 'Ethereum',
        amount: '0.00413 ETH',
        usd: '$ 2123.01'
    },
    {
        id: '#SK3223',
        date: '10 Mar, 2020',
        type: 'Buy',
        currency: 'Bitcoin',
        amount: '1.00952 BTC',
        usd: '$ 9067.62'
    },
    {
        id: '#SK3224',
        date: '18 Mar, 2020',
        type: 'Buy',
        currency: 'Litecoin',
        amount: '0.00224 LTC',
        usd: '$ 1773.01'
    },
    {
        id: '#SK3225',
        date: '03 Mar, 2020',
        type: 'Buy',
        currency: 'Bitcoin',
        amount: '1.00952 BTC',
        usd: '$ 9423.73'
    },
    {
        id: '#SK3226',
        date: '15 Mar, 2020',
        type: 'Sell',
        currency: 'Ethereum',
        amount: '0.00413 ETH',
        usd: '$ 2123.01'
    },
    {
        id: '#SK3227',
        date: '03 Mar, 2020',
        type: 'Sell',
        currency: 'Bitcoin',
        amount: '1.00952 BTC',
        usd: '$ 9067.62'
    },
    {
        id: '#SK3228',
        date: '01 Mar, 2020',
        type: 'Sell',
        currency: 'Litecoin',
        amount: '1.00217 LTC',
        usd: '$ 9067.62'
    },

]

const items = [
    {
        id: 1,
        iconClass: "bx bx-send",
        title: "Send",
        amount: "$ 654.42",
        buttonClass: "btn btn-primary btn-sm w-md",
        buttonLabel: "Send",
    },
    {
        id: 2,
        iconClass: "bx bx-import",
        title: "Receive",
        amount: "$ 1054.32",
        buttonClass: "btn btn-primary btn-sm w-md",
        buttonLabel: "Receive",
    },
    {
        id: 3,
        iconClass: "bx bx-wallet",
        title: "Withdraw",
        amount: "$ 824.34",
        buttonClass: "btn btn-primary btn-sm w-md",
        buttonLabel: "Withdraw",
    },
]

const walletData = [
    {
        id: 1,
        iconClass: "mdi mdi-bitcoin h2 text-warning mb-0",
        walletName: "Bitcoin Wallet",
        balance: "1.02356 BTC",
        conversion: " = $ 9148.00",
    },
    {
        id: 2,
        iconClass: "mdi mdi-ethereum h2 text-primary mb-0",
        walletName: "Ethereum Wallet",
        balance: "0.04121 ETH",
        conversion: " = $ 8235.00",
    },
    {
        id: 3,
        iconClass: "mdi mdi-litecoin h2 text-info mb-0",
        walletName: "Litecoin Wallet",
        balance: "0.00356 BTC",
        conversion: " = $ 4721.00",
    },
]
export { OveviewChart, activitiesData, items, walletData };