import AppHeader from "./components/AppHeader";
import Hero from "./components/Hero";
import useMovies from "./hooks/useMovies";

function App() {
  const { movies, searchMovies } = useMovies();

  return (
    <div>
      <AppHeader></AppHeader>
      <Hero onSearch={searchMovies} />
    </div>
  );
}

export default App;
