import { API_OPTIONS } from "../utils/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/redux/slices/movieSlice";
import { useEffect } from "react";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  
  const popularMovies = useSelector((store) => store.movies.popularMovies)

  // Fetching the data(now playing movies) from TMDB API and pushing it to the store(update the store)
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results)); // Pushing my json movies result to my movies store
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
