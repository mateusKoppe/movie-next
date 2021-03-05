import AppHeader from "./components/AppHeader";
import Hero from "./components/Hero";
import MoviesGrid from "./components/MoviesGrid";
import useMovies from "./hooks/useMovies";

function App() {
  const { movies, searchMovies } = useMovies();

  return (
    <div>
      <AppHeader />
      <Hero onSearch={searchMovies} />
      <MoviesGrid list={movies} />
    </div>
  );
}

export default App;
