import { API_OPTIONS } from "../utils/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/redux/slices/movieSlice";
import { useEffect } from "react";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies)

  // Fetching the data(now playing movies) from TMDB API and pushing it to the store(update the store)
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results)); // Pushing my json movies result to my movies store
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
