import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    upcomingMovies: null,
    trendingMovies: null,
    horrorMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovies = action.payload;
    }
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTrailerVideo,
  addUpcomingMovies,
  addTrendingMovies,
  addHorrorMovies
} = moviesSlice.actions;
export default moviesSlice.reducer;
