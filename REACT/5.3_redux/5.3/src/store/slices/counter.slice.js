import { createSlice } from "@reduxjs/toolkit";

  export const counterSlice = createSlice({
    name:'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1,
        resett: state => 0
    } 
})
export const {increment, decrement, resett} = counterSlice.actions
export default counterSlice.reducer