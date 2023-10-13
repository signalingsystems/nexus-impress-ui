import { Menu } from "antd";
import { HomeOutlined, UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';


export default function MenuBar() {


    return (<Menu mode="horizontal" style={{background:'#fff'}}>

        <Menu.Item
            key="home"

            icon={<HomeOutlined />}

        > <a key="home" href="/">Home</a>

        </Menu.Item>
        <Menu.Item
            key="profile"
            icon={<UserOutlined />}
        >
            <a key="profile" href="/profile">Profile</a>
            
        </Menu.Item>
        <Menu.Item
            key="Questions"
            icon={<QuestionCircleOutlined />}
        ><a key="questions" href="/quiz"> Questions</a>
           

        </Menu.Item>
    </Menu>);
}