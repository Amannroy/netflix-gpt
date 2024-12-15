import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from '../Video/VideoBackground';
import VideoTitle from '../Video/VideoTitle';

const MainContainer = () => {
    // Getting all the nowPlaying movies from the store
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(!movies) return;  // Just return, don't render anything(Also known as early return)-> If there is no movie in the store I will not load the main container

    const mainMovie = movies[0];  // The movie background will be filled with first movie from nowPlayingMovies
    // console.log(mainMovie);
    
    const {original_title, overview, id} = mainMovie;
  return (
    <>
    <div className='pt-[30%] bg-black md:pt-0'>
     <VideoTitle title={original_title} overview={overview}/>
     <VideoBackground movieId={id}/> 
    </div>
    </>
  )
}

export default MainContainer