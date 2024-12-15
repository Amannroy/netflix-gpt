import React from "react";
import Header from "../Layout/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "../Layout/MainContainer";
import SecondaryContainer from "../Layout/SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import GPTSearch from "../Shared/GPTSearchPage";
import { useSelector } from "react-redux";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import useTrendingMovies from "../../hooks/useTrendingMovies";
import useHorrorMovies from "../../hooks/useHorrorMovies";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useHorrorMovies();
  return (
    <>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

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
