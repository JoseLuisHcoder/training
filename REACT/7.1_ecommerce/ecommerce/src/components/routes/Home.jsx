import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import CardHome from './home/CardHome'
import InputSearch from './home/InputSearch'

const Home = () => {

    const [inputSearch, setInputSearch] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    const products = useSelector(state => state.products)

    console.log(inputSearch);
  return (
    <main className='home'>
        <InputSearch setInputSearch={setInputSearch} />
        <div className='home__container__card'>
            {
                products?.map(product =>(
                    <CardHome key={product.id} product={product}/>
                ) )     
                
            }

        </div>

    </main>
  )
}

export default Home