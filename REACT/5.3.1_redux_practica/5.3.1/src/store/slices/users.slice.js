import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
        name: 'users',
        initialState:'',
        reducers:{
                setUsersGlobal:(state, action) => action.payload
        }
})
export const {setUsersGlobal} = usersSlice.actions
export default usersSlice.reducer