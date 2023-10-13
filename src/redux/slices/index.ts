import { combineReducers } from '@reduxjs/toolkit'
import { profileReducer } from './profileSlice';

// state names, sounds better when use selector hook on them
const rootReducer = combineReducers({
    profile:profileReducer ,
});

export default rootReducer;

