import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductCartInfo = () => {
    

  return (
    <article className='cart__item'>
    <header className='cart__item__header'>
        <h4 className='cart__category'>cel</h4>
        <h3 className='cart__name'>samsung s100</h3>
    </header>
    <i  className='bx bx-trash'></i>
    <span className='cart_quantity'>2</span>
    <div>
        <span className='cart__total__label'>Total: </span>
        <p className='cart__total_number'>1500</p>
    </div>
</article>
  )
}

export default ProductCartInfo