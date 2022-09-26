import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProducts:(state, action) => action.payload

    }
})
export const {setProducts} = productsSlice.actions
export default productsSlice.reducer

export const getAllProducts = () => (dispatch) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
    return axios.get(URL)
        .then(res => dispatch(setProducts(res.data.data.products)))
        .catch(err => console.log(err))
}

// https://documenter.getpostman.com/view/5028918/UVypxw3W#8d80d26a-7c0a-4283-a272-253ae4144624.   
// https://dashing-puppy-89779d.netlify.app/
// URL en postman