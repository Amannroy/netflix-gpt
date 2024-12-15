import React, { useRef } from "react";
import lang from "../../utils/constants/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants/constants";
import { addGptMovieResult } from "../../utils/redux/slices/gptSlice";

const GPTSearchBar = () => {
  const langkey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await response.json();
    return json.results;
  };

  const handleSearchClick = async () => {
    const query = searchText.current.value;
    if (!query) return;

    // Fetch movie data from TMDB
    try {
      const movieResults = await searchMovieTMDB(query);
      dispatch(addGptMovieResult({ movieNames: [query], movieResults: [movieResults] }));
    } catch (error) {
      console.error("Error fetching data from TMDB:", error);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].search}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
