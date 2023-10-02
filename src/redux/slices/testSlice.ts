import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState ={data:""};
type stateType = typeof initialState;
const reducers={
    remove:(state: stateType,action:PayloadAction<string>)=>{data:"removed"}
};
const testSlice = createSlice({
    name:"testSlice",
    initialState,
    reducers
});

//export actionsNames too
export default testSlice.reducer;