import React from 'react'
import { useNavigate } from 'react-router-dom';

const CardHome = ({product}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }


    // console.log(product);
  return (
    <article className='card__home' onClick={handleClick}>
        <header className='card__home__header'>
            <img className='card__home__img' src={product.productImgs[0]} alt={product.title} />
        </header>

        <section className='card__home__body'>
            <h3 className='card__home__name'>{product.title}</h3>
            <section className='card__home__price'>
                <h4 className='card__price__label'>Price</h4>
                <span className='card__price__value'>{product.value}</span>
            </section>
            <button className='card__home__btn'>
            <img className='card__btn__img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASdJREFUSEvN1MExBUEUBdDzI0AGRIAIlAjIAFsWiIAMsGDLjwAZyAARkAEZUE/1VI2enpku31fecub1ve/e268n5lyTOeP7U4KPpOYdNzj+DXVtBQ1Bg7uJh1lJShYd4Qz32O4haIYZtbjUsIi3BLyC1wLJTASBFxns4AKhKK+ZCdbwiAh8KaHnGeWkRbuGPHzCKvaSohqCjvIhgl1cI4jWs3H7LArFC6k/zo0uWudAZld7wGagZ4TFXzV2zc5xiCkCoKmSgtiZjZalVQTLeEmoEXYoKlVv35iCALvDVno6QlGpTnFSUDpqUYDFNt/2AOefO89LjYIAaa7sEM+3cGtDrhy8v61WwSX2cYWDDG7oX1UGgdfe4nyooX/VBHNX8OMsajP4vwSfTQ87GZT0DnkAAAAASUVORK5CYII="/>
            </button>
        </section>


    </article>
  )
}

export default CardHome