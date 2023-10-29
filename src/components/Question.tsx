import { Col, Radio, RadioChangeEvent, Row, Typography } from "antd";
import { QuestionProps } from "./props";
import { FlagTwoTone } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { questionActions } from "../redux/slices/questionsSlice";

const { Title, Text } = Typography;
export default function ({ question, choices, flag, sucessRate }: QuestionProps) {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    function onChoiceClick(e: RadioChangeEvent) {
       // console.log(e.target.value);

        dispatch(questionActions
            .addToUserAnswers(
                {
                    qn: question,
                    ans: e.target.value
                }));

    }
    function onValueChange(val: string) {
        setValue(val);
    }
    return (
        <>
            <Title level={5} >{question}</Title>
            <Row>
                <Col span={20}>
                    <Radio.Group
                        onChange={onChoiceClick}
                        value={value}
                    >
                        {
                            choices.map((choice, key) => {

                                return (
                                    <div key={choice}>
                                        <Radio
                                            value={choice}
                                            key={key}
                                            onClick={() => onValueChange(choice)}
                                        >{choice}

                                        </Radio>
                                    </div>
                                )
                            })
                        }


                    </Radio.Group>

                </Col>
                <Col span={2}>{flag == true ? <FlagTwoTone color="red" /> : ''}</Col>
                <Col span={2}><Text type="secondary">{sucessRate != undefined ? sucessRate : ''}</Text></Col>
            </Row>


        </>);

}