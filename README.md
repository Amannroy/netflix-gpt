# Netflix Hunt

Netflix Hunt is a movie discovery web application that uses Firebase for authentication and TMDB API for fetching movie data. The app offers features like user authentication, responsive design, and movie trailers, along with a beautifully styled interface using TailwindCSS.

## Features

### Core Features:

- **User Authentication:**

  - Sign Up, Sign In, and Log Out functionality.
  - Firebase integration for secure authentication.
  - Profile updates including display name and profile picture.
  - Redirects based on authentication status (e.g., redirecting to login if the user is not signed in).

- **Movie Discovery:**
  - Fetch movies using TMDB's "Now Playing" and "Popular Movies" APIs.
  - Display movie trailers embedded with autoplay and mute.
  - Responsive design for an amazing user experience.
  - Multi-language support.

### Additional Functionalities:

- Redux store for managing global state (e.g., user and movie data).
- Custom hooks for fetching movie data (`usePopularMovies`, `useNowPlayingMovies`).
- TailwindCSS for styling the application.
- Memoization for performance optimization.
- Responsive UI with a modern design.

## Development Steps

- Create React App
- Configured TailwindCSS
- Header
- Routing
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create Signup User Account
- Implement Sign In User API
- Created Redux Store with userSlice
- Implemented Sign Out
- Update Profile
- BugFix: Signup User Display Name and profile picture update
- BugFix: If the user is not logged in, redirect /browse to login page and vice-versa.
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constant files
- Register for TMDB API & create an App & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update store with movies data
- Planning for MainContainer & SecondaryContainer
- Fetch Data for Trailer Video
- Update store with Trailer Video Data
- Embedded the YouTube Video and made it autoplay and mute
- Tailwind classes to make MainContainer look awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the browse page amazing with Tailwind CSS
- usePopularMovies Custom Hook
- Multi-Language Feature in our App
- Fetched Movies from TMDB
- Added .env file
- Added .env to .gitignore
- Made our site responsive
- Structured the code

## Project Setup

Before starting the project, ensure the following:

1. Add a `.env` file to your project root with the following variables:

   ```env
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key_here

   ```

2. Add `.env` to `.gitignore` to prevent sensitive data from being exposed:
   ```gitignore
   .env
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Code Snippets for User Benefit

### Firebase Authentication Redirection

Ensure users are redirected based on their authentication status:

```javascript
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthRedirect = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return null;
};

export default AuthRedirect;
```

### Fetching Data from TMDB API

Reusable custom hook for fetching "Now Playing" movies:

```javascript
import { useState, useEffect } from "react";

const useNowPlayingMovies = (apiKey) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  return movies;
};

export default useNowPlayingMovies;
```

### Responsive TailwindCSS Layout Example

TailwindCSS classes for responsive movie cards:

```html
<div
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
>
  <div class="movie-card">
    <img
      src="{movie.poster_path}"
      alt="{movie.title}"
      class="w-full h-auto rounded-lg shadow-md"
    />
    <h3 class="text-lg font-semibold mt-2">{movie.title}</h3>
  </div>
</div>
```

## Deployment

Steps to deploy the app to production:

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy using Firebase Hosting:
   ```bash
   firebase deploy
   ```

## How to Use

1. **Login or Sign Up:** Create an account or sign in using the login form.
2. **Browse Movies:** Explore the latest movies on the browse page, complete with trailers and descriptions.
3. **Search for Movies:** Use the search bar to find specific movies.
4. **Update Profile:** Update your display name or profile picture in the profile settings.

## Technologies Used

- **Frontend:** React, Redux, TailwindCSS.
- **Backend:** Firebase for Authentication and Hosting.
- **API:** TMDB API for movie data.

## Future Enhancements

- Implementing GPT-based movie recommendations.
- Adding user reviews and ratings.
- Enabling a "Watchlist" feature.
- Supporting more languages for international users.

---

Feel free to suggest further improvements or enhancements!
