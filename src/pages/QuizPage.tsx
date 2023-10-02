import { Row, Col } from "antd";
import Question from "../components/Question";

export default function QuizPage(){
return (
<>
<Row>
        
        <Col span={24}>
            <Question

            choices={['choice 1','choice 2']}
            question="sample question"
            sucessRate={21}
            flag={true}
            />
        </Col>
      </Row>
</>);
}