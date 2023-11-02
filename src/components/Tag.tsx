import { Button} from "antd";
import { MouseEventHandler } from "react";

type tagProps ={
    text:string,
    enabled:boolean,
    onClick:MouseEventHandler<HTMLElement>
}
export default function Tag(props:tagProps){

    const enabled = props?.enabled ===true?true:false;
    
    
    return enabled? <Button type="primary" style={{margin:'1px'}} onClick={props?.onClick}>
    {props.text}
  </Button>:<Button type="primary" disabled style={{margin:'1px'}}>
    {props.text}
  </Button>

}