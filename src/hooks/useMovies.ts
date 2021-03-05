import { useEffect, useState } from "react";
import Api from "../lib/Api";
import Movie from "../types/Movie";

const API_KEY = "b2c89c46653f678014eee4a95e70925a";

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = async () => {
    const response = await Api.get("/discover/movie", {
      params: { api_key: API_KEY },
    });
    setMovies(response.data.results);
  };

  const searchMovies = async (query: string) => {
    if (!query) {
      loadMovies();
      return;
    }

    const response = await Api.get("/search/movie", {
      params: { api_key: API_KEY, query },
    });
    setMovies(response.data.results);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return { movies, searchMovies };
};

export default useMovies;
