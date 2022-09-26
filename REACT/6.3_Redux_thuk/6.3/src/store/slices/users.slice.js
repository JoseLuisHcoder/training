import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersSlice = createSlice({
    name: 'users',
    initialState: 50,
    reducers: {
        add: state => state + 1,
        rest: state => state - 1,
        reset: state => 0,

        setUserGlobal: (state, action) => action.payload
        }

})

export const {add, rest, reset, setUserGlobal} = usersSlice.actions
export const getUsers = () => (dispatch) => (
    axios.get('https://randomuser.me/api/?results=20')
        .then(res => dispatch(setUserGlobal(res.data)))
        .catch(err => console.log(err))
)
export default usersSlice.reducer