import { useEffect, useState } from "react";
import Api from "../lib/Api";
import Movie from "../types/Movie";

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = async () => {
    const response = await Api.get("/discover/movie", {
      params: { api_key: "b2c89c46653f678014eee4a95e70925a" },
    });
    setMovies(response.data.results)
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return { movies };
};

export default useMovies;
