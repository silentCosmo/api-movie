import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { filler } from '../axios/instance'

function MovieCard({movie}) {
  const [data,setData] = useState(movie.show)
  useEffect(()=>{setData(movie.show)},[movie])
  console.log(data);
  return (
    <Link to={'/'+data.id} className='bg-white w-48 border border-zinc-200 hover:shadow-md hover:scale-95 duration-200'>
      <img src={data.image?.medium?data.image.medium:filler} className='w-48 h-64 rounded-t-md' alt='movie-poster'/>
      <div className='rounded-b-md mt-1 p-2'>
      <h1 className='text-lg font-bold '>{data.name}</h1>
      <h3 className='text-sm opacity-80'>{data.language}</h3>
      <h3 className='text-sm font-light opacity-80'>{`${data.genres[1]?data.genres[0]+' |':data.genres[0]} ${data.genres[1]?data.genres[1]+' |':''} ${data.genres[2]?data.genres[2]:''}`}</h3>
      </div>
    </Link>
  )
}

export default MovieCard