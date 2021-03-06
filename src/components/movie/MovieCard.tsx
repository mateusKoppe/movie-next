import dayjs from "dayjs";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { getMovieImage } from "../../lib/moviesHelper";
import Movie from "../../types/Movie";
import MovieDetailModal from "./MovieDetailModal";

interface MovieCardProps {
  movie: Movie;
}

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 115, 97, 0.6);
  opacity: 0;
  transition: 0.2s opacity ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  text-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.7);
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.4em;

  &:hover {
    ${Content} {
      opacity: 1;
    }
  }
`;

const Cover = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const getYear = (date: string) => {
  return dayjs(date).format("YYYY");
};

const MovieCard: FunctionComponent<MovieCardProps> = ({ movie }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <Wrapper>
        <Cover
          src={getMovieImage(movie.poster_path)}
          alt={movie.title}
        />
        <Content onClick={() => setIsOpened(true)}>
          <span>{getYear(movie.release_date)}</span>
          <h2>{movie.title}</h2>
        </Content>
      </Wrapper>
      <MovieDetailModal
        movie={movie}
        visible={isOpened}
        onClose={() => setIsOpened(false)}
      />
    </>
  );
};

export default MovieCard;
