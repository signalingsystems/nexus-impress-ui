import { Button} from "antd";

type tagProps ={
    text:string
}
export default function Tag(props:tagProps){

    

    return <Button type="primary" disabled style={{margin:'1px'}}>
    {props.text}
  </Button>

}