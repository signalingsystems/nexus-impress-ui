
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
import { Card, Col, Divider, Row, Statistic } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';



export default function Achievements() {

    const profileState = useSelector((state: RootState) => state.profile)
    ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

    // theme controller , the charts colors have to change too

    const passRate = profileState.score % 100;
    const failRate = 100 - passRate;
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
                label: 'Quiz set x ',
                data: Array.from({ length: 100 }, () => ({
                    x: faker.number.int(), // percentage
                    y: faker.number.int() % 100, // month
                })),
                backgroundColor: '#22223b',
            },
            {
                label: 'Quiz set y ',
                data: Array.from({ length: 100 }, () => ({
                    x: faker.number.int(), // percentage
                    y: faker.number.int() % 100, // month
                })),
                backgroundColor: '#bc4749',
            },
        ],
    };

    return (<Row>
        <Col span={12}>
            <Scatter options={options} data={data} />
        </Col>
        <Col span={12}>
            <Row >
                <Col>
                    <Card bordered={false}>
                        <Statistic
                            title="Pass rate"
                            value={passRate}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}

                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col >
                    <Card bordered={false}>
                        <Statistic
                            title="Fail rate"
                            value={failRate}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}

                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>
        </Col>
        <Divider /> 
        <Col>
        
        </Col>
    </Row>)
}

// maybe medals and other statistical data to show how the person is learning 

// add learningib rate of the user  and subject strengths piechart