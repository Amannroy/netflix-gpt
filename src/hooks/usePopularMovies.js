import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const usePopularMovies = () => {
  const dispatch = useDispatch();

  // Fetching the data(now playing movies) from TMDB API and pushing it to the store(update the store)
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results)); // Pushing my json movies result to my movies store
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
