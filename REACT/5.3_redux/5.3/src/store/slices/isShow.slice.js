import { createSlice } from "@reduxjs/toolkit";

export const isShowSlice = createSlice({
    name: 'isShow',
    initialState: false,
    reducers:{
        changeIsShow: state => !state
    }
})
export const {changeIsShow} = isShowSlice.actions
export default isShowSlice.reducer