import React, { useState } from 'react'

const ProductDescription = ({productInfo}) => {
    const [counter, setCounter] = useState(1)

    const handleMinus = () => {
        if(counter - 1 >= 1){
            setCounter(counter - 1)
        }
    }
    const handlePlus = () => setCounter(counter + 1)

  return (
    <section className='prod_info'>
        <h2 className='prod__info__name'>{productInfo?.title}</h2> 
        <p className='prod__info__description'>{productInfo?.description}</p>

        <div className='prod__body'>
            <article className='prod_price'>
                <h3 className='prod__price__label'>Price</h3>
                <span className='prod__price__value'>{productInfo?.price}</span>
            
            </article>
            <article className='prod__quantity'>
                <h3 className='prod__q__label'>Quantity</h3>
                <div className='prod__quantity__btn'>
                    <button onClick={handleMinus}>-</button>
                    <button>{counter}</button>
                    <button onClick={handlePlus}>+</button>
                </div>
            </article>
        </div>


    </section>
  )
}

export default ProductDescription