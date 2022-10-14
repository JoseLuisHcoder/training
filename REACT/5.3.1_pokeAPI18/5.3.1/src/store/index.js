import { configureStore } from "@reduxjs/toolkit";
import userName from './slices/UserName.slice'

export default configureStore({
    reducer:{
        userName
    }
})