import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

  
const MainContainer = () => {
    // Getting all the nowPlaying movies from the store
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(movies === null) return;  // Just return, don't render anything(Also known as early return)-> If there is no movie in the store I will not load the main container

    const mainMovie = movies[0];  // The movie background will be filled with first movie from nowPlayingMovies
    console.log(mainMovie);
    
    const {original_title, overview, id} = mainMovie;
  return (
    <>
     <VideoTitle title={original_title} overview={overview}/>
     <VideoBackground movieId={id}/> 
    </>
  )
}

export default MainContainer