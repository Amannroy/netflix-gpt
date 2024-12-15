import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../UI/MovieList';

const GPTMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;

  // Ensure movieNames exists
  if (!movieNames) return null;

  return (
    <div className="p-6 m-6 bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-xl text-white">
      <h2 className="text-2xl font-bold mb-4 text-center border-b-2 border-gray-600 pb-2">
        Search Movies
      </h2>
      {movieNames.map((movieName, index) => (
        <div
          key={movieName}
          className="mb-8 p-4 border border-gray-700 rounded-lg bg-opacity-80 bg-gray-900 shadow-lg"
        >
          <MovieList title={movieName} movies={movieResults[index]} />
          {/* Corrected Overview */}
          {movieResults[index]?.map((movie, idx) => (
            <div key={idx} className="mt-4">
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-gray-400">{movie.overview}</p>
            </div>
          ))}
        </div>
      ))}
      {movieNames.length === 0 && (
        <p className="text-center text-gray-400 italic">
          No suggestions available at the moment.
        </p>
      )}
    </div>
  );
};

export default GPTMovieSuggestions;
