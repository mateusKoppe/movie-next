import AppHeader from "./components/layout/AppHeader";
import RatingFilter from "./components/RatingFilter";
import Hero from "./components/sections/Hero";
import MoviesGrid from "./components/movie/MoviesGrid";
import useMovies from "./hooks/useMovies";

function App() {
  const { movies, searchMovies, rating, applyRating } = useMovies();

  return (
    <div>
      <AppHeader />
      <Hero onSearch={searchMovies} />
      <RatingFilter value={rating} onChange={applyRating} />
      <MoviesGrid list={movies} />
    </div>
  );
}

export default App;
