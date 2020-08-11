import React from 'react';
import { Line } from 'react-chartjs-2';
import { getConvertedDate, getSortedData } from './../../helpers/dataProcessing';

export const LineChart = ({ userData }) => {
    const days = (getSortedData(userData, true)?.map(item => getConvertedDate(item.date)))?.flat(1);
    const cost = userData?.map(item => item.cost);
    const data = {
        labels: days,
        datasets: [{
            label: 'Cost',
            data: cost,
            backgroundColor: ['transparent'],
            borderColor: [`#4bc0c0`],
            borderWidth: 2,
            pointBackgroundColor: '#4bc0c0',
        }],
    };

    const options = {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontSize: 10,
                    min: 0,
                    max: 3000
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 9
                }
            }]
        }
    };
    return <Line data={data} options={options} />
};