import { API_OPTIONS } from "../utils/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/redux/slices/movieSlice";
import { useEffect } from "react";
const useTrendingMovies = () => {
  const dispatch = useDispatch();
  
  const trendingMovies = useSelector((store) => store.movies.trendingMovies)

  // Fetching the data(now playing movies) from TMDB API and pushing it to the store(update the store)
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);
    dispatch(addTrendingMovies(json.results)); // Pushing my json movies result to my movies store
  };

  useEffect(() => {
    !trendingMovies && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
