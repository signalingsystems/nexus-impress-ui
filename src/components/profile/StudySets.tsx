import { Card, Col, Divider, Row,Typography, Input } from "antd";

import { StudySet } from "../../redux/models/state.models";
import Tag from "../Tag";

const { Title } = Typography;
const { Search } = Input;
export default function StudySets(){


    function onSearchClicked(value:string){

    }

    //mock data
    const studySetList:StudySet[] =[ 
        {
        date: 'sept ,2023',
        title: 'Disease mechanismes Exam 5',
        owner: 'Flemming',
        score: 34.5,
        url:"path/to/quiz",
        tags:['science','medical','epidemiology']
    },
    {
        date: 'sept ,2023',
        title: 'Cybersecurity: penetration testing exam ',
        owner: 'Flemming',
        score: 74.83,
        url:"path/to/quiz",
        tags:['science','security','it','cybersecurity','comp sci']
    },
]
    //logic
    //theme controller

    return <Row>
        <Col span={24} > 
        <Search
      placeholder="search a study set or any keyword"
      onSearch={onSearchClicked}
      style={{ width: 400 }}
    /> </Col>
        <Divider/>
        
        {studySetList.map(s=>(
            <>
            <Col span={24}>
            <Card title ={s.date} extra ={s.owner} >
                <Row>
                <Col span={12}>
                
                <a href={s.url}>
            <Title level={3}>{s.title}</Title>
            </a>
                
            </Col>
            <Col span={12}>
                <Row>
                    <Col span={4}>
                    <Title level={4}>{s.score}</Title>
                    </Col>
                    <Col span={20}>
                    {s.tags?.map(tag=>(<Tag text={tag}/>))}
                    </Col>
                </Row>
                
                
                
     
            </Col>
                </Row>
            
            </Card>
        </Col>
        <Divider/>
            </>
        
        )
        )}
        
    </Row>
}