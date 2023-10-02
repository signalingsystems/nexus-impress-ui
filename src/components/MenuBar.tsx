import { Menu } from "antd";
import { HomeOutlined, UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';

export default function MenuBar(){
    return ( <Menu mode="horizontal" theme="dark">
    <Menu.Item key="home" icon={<HomeOutlined />}>
      Home
    </Menu.Item>
    <Menu.Item key="profile" icon={<UserOutlined />}>
      Profile
    </Menu.Item>
    <Menu.Item key="Questions" icon={<QuestionCircleOutlined />}>
      Questions
    </Menu.Item>
  </Menu>);
}