/// honestly this file could have been split for maintainability purpuses but this should work
// if we ever divide , here us the tree
// dir: profileSlice-> index.ts,achievements.ts,studysets.ts,createQuizez.ts

import { PayloadAction , createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "../models/state.models";
import { StudySet } from "../models/state.models";
import { sampleProfileTags, studySetList } from "../../__test__/data/sampleStudySet";




/// create quizes reducers


//// studyset reducers

// add qn set when the quiz is submitetd


/// achievements reducers

// update achievement score when the quiz is submitetd

///other profile reducers


// slice state
const initialState : ProfileState ={
    name: "",
    tags: [ ... sampleProfileTags],
    quizzesTaken: 0,
    badges: [],
    email: "",
    score: 23,
    studySets:[...studySetList] ,//mocked data
};

const reducers ={

}

const profileSlice = createSlice({
name: "profileSlice",
initialState,
reducers
});




//eol
//export action names 
const profileActions = profileSlice.actions
const profileReducer = profileSlice.reducer
export {profileActions,profileReducer}
