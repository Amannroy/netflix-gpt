import { API_OPTIONS } from "../utils/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "../utils/redux/slices/movieSlice";
import { useEffect } from "react";
const useHorrorMovies = () => {
  const dispatch = useDispatch();
  
  const horrorMovies = useSelector((store) => store.movies.horrorMovies)

  // Fetching the data(now playing movies) from TMDB API and pushing it to the store(update the store)
  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/multi?query=horror&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);
    dispatch(addHorrorMovies(json.results)); // Pushing my json movies result to my movies store
  };

  useEffect(() => {
    !horrorMovies && getHorrorMovies();
  }, []);
};

export default useHorrorMovies;
