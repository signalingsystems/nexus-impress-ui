import { Row,Col, Tabs, Avatar, Button } from "antd";
import type { TabsProps } from 'antd';
import Foot from "../components/Footer";
import Achievements from "../components/profile/Achievements";
import { toPadding } from "chart.js/helpers";

export default function Profile(){

    // profile from profile slice
    const userName =" Flemmimg"



const onChange = (key: string) => {
  console.log(key);
};
const editUserProfile =()=>{

}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Achievements',
    children: <Achievements/>,
  },
  {
    key: '2',
    label: 'study sets',
    children: 'study sets',
  },
  {
    key: '3',
    label: 'create quizes',
    children: 'create quiz',
  },
];
    return (<>
     <Row>
      <Col  style={{marginTop:'4em',marginBottom:'1em'}}>
      <Avatar style={{ backgroundColor: '#7265e6', verticalAlign: 'middle' }} size="large">
        {userName}
      </Avatar>
      <Button
        size="small"
        style={{ margin: '0 16px', verticalAlign: 'middle' }}
        onClick={editUserProfile}
      >
        Edit profile
      </Button>
      
      </Col>
      <Col span={24}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Col>
    </Row>
    
    <Foot/>
    </>);
}