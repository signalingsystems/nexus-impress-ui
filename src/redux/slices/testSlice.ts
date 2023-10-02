import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState ={data:""};
const reducers={
    remove:(state,action:PayloadAction<string>)=>{data:"removed"}
};
const testSlice = createSlice({
    name:"testSlice",
    initialState,
    reducers
});

export default testSlice.reducer;