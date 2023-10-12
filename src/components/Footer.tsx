
import { Divider,Layout } from "antd";
const{ Footer}=Layout;

export default function Foot(){
    return (<>
    <Divider type="vertical" />
    <Footer style={{ textAlign: 'center' }}>Impress ©2023 </Footer>
    
    </>)
}