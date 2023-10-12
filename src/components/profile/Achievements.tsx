import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Col, Row } from 'antd';


export default function Achievements() {
    ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);
    //user quiz selector
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    // avg different quiz score over time
    const data = {
        datasets: [
            {
                label: 'A dataset',
                data: Array.from({ length: 100 }, () => ({
                    x: faker.number.int(), // percentage
                    y: faker.number.int() % 100, // month
                })),
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    };

    return (<Row>
        <Col>
            <Scatter options={options} data={data} />
        </Col>
    </Row>)
}