import { PayloadAction , createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "../models/state.models";



const initialState : ProfileState ={
    name: "",
    tags: [],
    quizzesTaken: 0,
    badges: [],
    email: "",
    score: 23
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
