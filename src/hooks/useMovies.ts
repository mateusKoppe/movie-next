import { useEffect, useState } from "react";
import Api from "../lib/Api";
import Movie from "../types/Movie";
import Rating from "../types/Rating";

const API_KEY = "b2c89c46653f678014eee4a95e70925a";

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [rating, setRating] = useState<Rating | null>(null);

  const loadMovies = async () => {
    const response = await Api.get("/discover/movie", {
      params: { api_key: API_KEY },
    });
    setMovies(response.data.results);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const searchMovies = async (query: string) => {
    if (!query) {
      loadMovies();
      return;
    }

    const response = await Api.get("/search/movie", {
      params: { api_key: API_KEY, query },
    });
    setMovies(response.data.results);
    setRating(null);
  };

  const applyRating = async (rating: Rating) => {
    setRating(rating);
    if (!rating) {
      loadMovies();
      return;
    }
    const response = await Api.get("/discover/movie", {
      params: {
        api_key: API_KEY,
        "vote_average.gte": rating.min,
        "vote_average.lte": rating.max,
      },
    });
    setMovies(response.data.results);
  };

  return { movies, searchMovies, rating, applyRating };
};

export default useMovies;
