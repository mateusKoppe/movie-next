import { useEffect, useState } from "react";
import Api from "../lib/Api";
import Movie from "../types/Movie";
import Rating from "../types/Rating";

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [rating, setRating] = useState<Rating | null>(null);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  const loadMovies = async () => {
    const response = await Api.get("/discover/movie");
    setMovies(response.data.results);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const applySearchQuery = async (query: string) => {
    if (!query) {
      loadMovies();
      return;
    }

    const response = await Api.get("/search/movie", { params: { query } });
    setMovies(response.data.results);
    setRating(null);
    setSearchQuery(query);
  };

  const applyRating = async (rating: Rating) => {
    setRating(rating);
    if (!rating) {
      loadMovies();
      return;
    }
    const response = await Api.get("/discover/movie", {
      params: {
        "vote_average.gte": rating.min,
        "vote_average.lte": rating.max,
      },
    });
    setSearchQuery(null);
    setMovies(response.data.results);
  };

  return { movies, searchQuery, applySearchQuery, rating, applyRating };
};

export default useMovies;
