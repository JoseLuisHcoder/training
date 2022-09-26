import React from 'react'

const ProductPurchase = ({product}) => {
  return (
    <li>
        <h4>{product.title}</h4>
        <span>{product.productsInCart.quantity}</span>
        <span>{product.price}</span>
    </li>
  ) 
}

export default ProductPurchase