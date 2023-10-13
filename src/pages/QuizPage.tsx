import { Row, Col, Button } from "antd";
import Question from "../components/Question";
import sampleQns from "../__test__/data/sampleQns";
import { useState } from "react";

export default function QuizPage() {
    // select  quiz tag types  get a random quiz list
    // data from quizReducer state
    //at submit qn/ generate success rate
    const [loading, setLoading] = useState(false);

    //submit the quiz state object then show modal of results
    function onSubmit() {

        setLoading(!loading);
    }


    return (
        <>
            <Row>

                <Col span={24}>
                    {
                        sampleQns.map(
                            (qn, key) => <Question
                                key={`${key}`}
                                choices={qn.choices.choices}
                                question={qn.qn}
                                sucessRate={Math.round(Math.random() * 100)}
                                flag={qn.flagged}
                            />
                        )
                    }
                </Col>
                <Col span={12}>

                    <Button
                        type="primary"
                        loading={loading}
                        onClick={onSubmit}
                        style={{ marginTop: "60px" }}
                    >
                        {loading ? 'Submitting' : 'submit'}
                    </Button>


                </Col>
            </Row>
        </>);
}