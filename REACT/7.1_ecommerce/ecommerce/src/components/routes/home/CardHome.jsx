import React from 'react'
import { useNavigate } from 'react-router-dom';
import getConfig from '../../../utils/getConfig';
import axios from 'axios'

const CardHome = ({product}) => {
     
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleAddCart = e => {
        e.stopPropagation()
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const obj = {
            id: product.id,
      quantity: 1
        }

        axios.post(URL, obj, getConfig())
            .then(res => console.log(red.data))
            .catch(err => console.log(err))
    }   
  return (
    <article onClick={handleClick} className='card__home'>
        <header className='card__home_header'>
            <img className='card__home__img' src={product.productImgs[0]} alt="" />
        </header>
        <div className='card__home__body'>
            <h3 className='card__home__name'>{product.title}</h3>
            <section className='card__home__price'>
                <h4 className='card__home__price__label'>Price</h4>
                <span className='card__home__price__value'>{product.price}</span>
            </section>
            <button onClick={handleAddCart} className='card__home__btn'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASdJREFUSEvN1MExBUEUBdDzI0AGRIAIlAjIAFsWiIAMsGDLjwAZyAARkAEZUE/1VI2enpku31fecub1ve/e268n5lyTOeP7U4KPpOYdNzj+DXVtBQ1Bg7uJh1lJShYd4Qz32O4haIYZtbjUsIi3BLyC1wLJTASBFxns4AKhKK+ZCdbwiAh8KaHnGeWkRbuGPHzCKvaSohqCjvIhgl1cI4jWs3H7LArFC6k/zo0uWudAZld7wGagZ4TFXzV2zc5xiCkCoKmSgtiZjZalVQTLeEmoEXYoKlVv35iCALvDVno6QlGpTnFSUDpqUYDFNt/2AOefO89LjYIAaa7sEM+3cGtDrhy8v61WwSX2cYWDDG7oX1UGgdfe4nyooX/VBHNX8OMsajP4vwSfTQ87GZT0DnkAAAAASUVORK5CYII="/></button>
        </div>
    </article>
  )
}

export default CardHome