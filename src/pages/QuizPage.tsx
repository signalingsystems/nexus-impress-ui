import { Row, Col, Button, Divider } from "antd";
import Question from "../components/Question";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { questionActions } from "../redux/slices/questionsSlice";
import Tag from "../components/Tag";
import { useState } from "react";

export default function QuizPage() {
    const quizSelector = useSelector((state: RootState) => state.questions);
    const profileSelector = useSelector((state:RootState)=> state.profile);

    const dispatch =useDispatch();
    // select  quiz tag types  get a random quiz list
    // data from quizReducer state
    //at submit qn/ generate success rate

    const { questions, loading } = quizSelector;
    const{setLoading,correctQuiz} = questionActions;
    const{tags} =profileSelector;
    const uniqueTags = [... new Set(tags)];
   
    const [qList,setQList]= useState(questions);

    //submit the quiz state object then show modal of results
    function onSubmit() {
        console.log(quizSelector.userAnswers);
        dispatch(setLoading(true));
        dispatch(correctQuiz("sample title")); // quiz title
      //  dispatch(setLoading(false));
        console.log(quizSelector)

    }
    function onTagSelect(tag:string){
        // switch to arandom  quiz with tag:tag
        if(tag.toLowerCase() === 'any'){
            setQList(questions);
        }else{
            setQList(questions.filter(qn=>qn.tag === tag ));
        }
        console.log(`tag selected : ${tag}`);
       
       console.log(qList)
    }


    return (
        <>
            <Row>
                <Col span={24}>
                    {
                        uniqueTags.map(
                            (tag,key)=>
                            <Tag enabled={true} text={tag} key={key} onClick={()=>onTagSelect(tag)} />)

                    }
                </Col>
                <Divider type="horizontal"/>

                <Col span={24}>
                    {
                        qList.map(
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
                    {qList.length>0 ?<Button
                        type="primary"
                        loading={loading}
                        onClick={onSubmit}
                        style={{ marginTop: "60px" }}
                    >
                        {loading ? 'Submitting' : 'submit'}
                    </Button> : 'No quiz with such a tag'}

                    


                </Col>
            </Row>
        </>);
}