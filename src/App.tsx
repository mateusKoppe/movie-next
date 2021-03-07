import AppHeader from "./components/layout/AppHeader";
import RatingFilter from "./components/RatingFilter";
import Hero from "./components/sections/Hero";
import MoviesGrid from "./components/movie/MoviesGrid";
import useMovies from "./hooks/useMovies";

function App() {
  const { movies, searchQuery, applySearchQuery, rating, applyRating } = useMovies();

  return (
    <div>
      <AppHeader />
      <Hero onSearch={applySearchQuery} searchQuery={searchQuery} />
      <RatingFilter value={rating} onChange={applyRating} />
      <MoviesGrid list={movies} />
    </div>
  );
}

export default App;
