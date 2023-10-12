import { combineReducers } from '@reduxjs/toolkit'
import { profileReducer } from './profileSlice';
const rootReducer = combineReducers({
    profileReducer 
});

export default rootReducer;

