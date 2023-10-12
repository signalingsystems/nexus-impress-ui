import { PayloadAction , createSlice } from "@reduxjs/toolkit";
import Profile from "../models/profile.model";

const initialState : Profile ={
    name: "",
    tags: [],
    quizzesTaken: 0,
    badges: [],
    email: "",
    score: 0
};
type profileStateType = typeof initialState;

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
