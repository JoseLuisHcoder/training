

import { configureStore } from '@reduxjs/toolkit'
import users from './slices/users.slice'

export default configureStore({
    reducer:{
        users
    }
})