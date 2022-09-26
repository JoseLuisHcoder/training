import { configureStore } from "@reduxjs/toolkit";
import isShowSlice from "./slices/isShow.slices";
import usersSlice from './slices/users.slice'


configureStore

export default configureStore({
    reducer: {
        usersSlice,
        isShowSlice
    }
}) 