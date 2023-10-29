import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import sampleQns from "../../__test__/data/sampleQns";
import { UserChoice } from "../models/question.model";
import { uniqueSet } from "../../utils/storeUtils";


const initialState = {
  questions: [...sampleQns], // init qns is an empty arr
  studySet: "",
  timeStarted: new Date().getTime(),
  timeCompleted: 0,
  score: 0,
  loading: false,
  userAnswers: [] as UserChoice[]// {q,a}
};
type stateType = typeof initialState;
const addToUserAnswers =(state:stateType,action:PayloadAction<UserChoice>) =>{
    const{payload} =action;
    return {...state ,userAnswers:uniqueSet(state.userAnswers,payload)}
}
// reducers , correct qn , subnit quiz ,update qn passrate value, update qn flagstatus

const setLoading =(state:stateType,action:PayloadAction<boolean>)=>{
    return {...state,loading:action.payload}
}
//sets studyset title and scores
const correctQuiz=(state:stateType,action:PayloadAction<string>)=>{
    const {questions,userAnswers}=state;
    const{payload}= action;
    let score =0;
    questions.forEach(qn=>{
        userAnswers.forEach(userAnswer=>{
            if(qn.qn === userAnswer.qn){
                if(qn.choices.correct === userAnswer.ans){
                    score++;
                }
            }
        })
    });

    score = score / questions.length *100;
    return{
        ...state,
        studySet: payload,
        timeCompleted: new Date().getTime(),
        score
    }
}

const reducers = {addToUserAnswers,correctQuiz,setLoading};
const questionSlice = createSlice({
  name: "questionSlice",
  initialState,
  reducers,
});

const questionActions =questionSlice.actions;
const questionsReducer = questionSlice.reducer;
export{questionActions};
export default questionsReducer;
