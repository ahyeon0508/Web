export const totalData={
    type: 'doughnut',
    data: {
        labels: ['검사중', '결과양성(확진)', '결과음성'],
        datasets:[
            {
                data: [138427, 76429, 5254391],
                backgroundColor: [
                    "#f8f8f8",
                    "#808080",
                    "#00BFFF",
                ],
                fill: false,
            }
        ]
    },
    options: {
        responsive: true,
        lineTension : 1,
        legend: false,
        plugins:{
            datalabels:{
                display: true,
                align:'left',
            }
        }
    }
}

export const todayData={
    type: 'line',
    data: {
        labels: ['01.20', '01.21', '01.22', '01.23', '01.24', '01.25', '01.26'],
        datasets:[
            {
                label: '완치(일)',
                data: [712, 666, 569, 629, 486, 426, 1837],
                borderColor:[
                    "#00BFFF",
                ],
                pointBorderColor:[
                    "#00BFFF",
                    "#00BFFF",
                    "#00BFFF",
                    "#00BFFF",
                    "#00BFFF",
                    "#00BFFF",
                    "#00BFFF",
                ],
                backgroundColor: [
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                ],
                fill: false,
                borderWidth: 3,
                pointStyle: 'circle'
            },
            {
                label: '확진(일)',
                data: [403, 399, 345, 431, 392, 437, 354],
                borderColor: [
                    "#04B404",
                ],
                pointBorderColor:[
                    "#04B404",
                    "#04B404",
                    "#04B404",
                    "#04B404",
                    "#04B404",
                    "#04B404",
                    "#04B404",
                ],
                backgroundColor: [
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                ],
                fill: false,
                borderWidth: 3,
                pointStyle: 'circle'
            }
        ]
    },
    options: {
        responsive: true,
        lineTension : 1,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    padding: 25,
                },
                scaleLabel: {
                    display: true,
                    labelString: '(명)'
                },
            }]
        },
        legend: {
            display: true,
            position: 'bottom',
            labels:{
                usePointStyle: true,
                backgroudColor: '#ffffff'
            }
        }
    }
}

export default {totalData, todayData};