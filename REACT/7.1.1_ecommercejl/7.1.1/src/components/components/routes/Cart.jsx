import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCartInfo from './cart/ProductCartInfo'

const Cart = () => {
    const [cartProducts, setCartProducts] = useState()

    useEffect(() => { 
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        console.log(config);
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, config)
        
            .then(res => setCartProducts(res.data))
            .catch(err => console.log(err))
    
    }, [])
    console.log(cartProducts);


  return (
    <section>
        <h2>Cart</h2>
        <ProductCartInfo />
        
        <hr />
        <footer>
            <span>Total: </span>
            <p>1350</p>
            <button >Checkout</button>
        </footer>

    </section>
  )
}

export default Cart