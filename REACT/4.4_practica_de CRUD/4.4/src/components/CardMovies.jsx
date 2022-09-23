import axios from 'axios';
import React from 'react'

const CardMovies = ({ movie, getAllMovies }) => {

    console.log(movie);

const deleteMovieId = id =>{
    const URL = `http://movies-crud-academlo.herokuapp.com/movies/${id}/`
        axios.delete(URL)
            .then(res=>{getAllMovies()})
            .catch(res=>console.log(err))
}

    return (
        <article className='card'>
            <h2 className='card__title'>{movie.name}</h2>
            <hr />
            <ul className='card__list'>
                <li className='card__item'>Genre: <span className='card__span'>{movie.genre}</span></li>
                <li className='card__item'>Duration: <span className='card__span'>{movie.duration}</span></li>
                <li className='card__item'>Release: <span className='card__span'>{movie['release_date']}</span></li>
            </ul>
            
            <button onClick={()=>deleteMovieId(movie.id)} className='card__btn'>Delete</button>
            <button className='card__btn'>Update</button>
        </article>
    )
}

export default CardMovies