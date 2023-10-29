import { combineReducers } from '@reduxjs/toolkit'
import { profileReducer } from './profileSlice';
import questionsReducer from './questionsSlice';

// state names, sounds better when use selector hook on them
const rootReducer = combineReducers({
    profile:profileReducer ,
    questions: questionsReducer
});

export default rootReducer;

