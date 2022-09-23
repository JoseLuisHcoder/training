import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counter.slice'
import isShow from './slices/isShow.slice'

export default configureStore({
    reducer: {
        counterSlice,
        isShow
    }
})