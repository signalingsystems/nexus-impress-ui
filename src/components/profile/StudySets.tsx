import { Card, Col, Divider, Row,Typography, Input } from "antd";

import Tag from "../Tag";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const { Title } = Typography;
const { Search } = Input;
export default function StudySets(){

    const profileSelector = useSelector((state:RootState)=> state.profile)

    function onSearchClicked(value:string){

    }

    
    const studySetList = profileSelector.studySets
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