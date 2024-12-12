import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
        MainContainer
           - VideoBackground
           - VideoTitle
        SecondaryContainer
           - MovieList * n
           - Cards * n
      */}
    </>
  );
};

export default Browse;
