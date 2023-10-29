import { Row, Col, Button } from "antd";
import Question from "../components/Question";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { questionActions } from "../redux/slices/questionsSlice";

export default function QuizPage() {
    const quizSelector = useSelector((state: RootState) => state.questions);
    const dispatch =useDispatch();
    // select  quiz tag types  get a random quiz list
    // data from quizReducer state
    //at submit qn/ generate success rate

    const { questions, loading } = quizSelector;
    const{setLoading,correctQuiz} = questionActions;

    //submit the quiz state object then show modal of results
    function onSubmit() {
        console.log(quizSelector.userAnswers);
        dispatch(setLoading(true));
        dispatch(correctQuiz("sample title")); // quiz title
      //  dispatch(setLoading(false));
        console.log(quizSelector)

    }


    return (
        <>
            <Row>

                <Col span={24}>
                    {
                        questions.map(
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