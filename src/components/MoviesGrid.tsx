import { FunctionComponent } from "react";
import styled from "styled-components";
import Movie from "../types/Movie";
import MovieCard from "./MovieCard";

interface MoviesGridProps {
  list: Movie[];
}

const Wrapper = styled.section`
  max-width: 120rem;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  flex-wrap: wrap;
  gap: 2rem;
`;

const MoviesGrid: FunctionComponent<MoviesGridProps> = ({ list }) => {
  return (
    <Wrapper>
      {list.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </Wrapper>
  );
};

export default MoviesGrid;
