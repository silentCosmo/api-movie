import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { instance } from '../axios/instance'

function Home() {
  
  const [movies,setMovies] = useState([])
  const getMovies = async ()=>{
    await instance.get('search/shows/?q=all').then((res)=>{setMovies(res.data)}).catch((err)=>{alert(err)})
  }
  
  useEffect(()=>{getMovies()},[])
  return (
    <div>

      <section className='grid grid-cols-5 gap-5 p-5'>
        {
          movies.map((movie)=>{
            
            return <MovieCard key={movie.show.id} movie={movie}/>
          })
        }
      </section>
    </div>
  )
}

export default Home