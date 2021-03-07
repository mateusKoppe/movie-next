import { FunctionComponent } from "react";
import { range } from "lodash";

import dayjs from "dayjs";
import styled, { css } from "styled-components";
import Movie from "../../types/Movie";
import Modal, { CloseButton } from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { coverSize, getMovieImage } from "../../lib/moviesHelper";

interface MovieDetailModalProps {
  movie: Movie;
  visible: boolean;
  onClose: Function;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 645px) {
    display: grid;
    grid-template-columns: 28rem auto;
    gap: 1.5rem;
  }
`;

const Cover = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 1.5rem;
  max-width: 30rem;
  margin: auto;
`;

const Stars = styled.div`
  color: #ffc107;
  font-size: 1.85rem;
`;

const StyledModal = styled(Modal)<{ backdrop?: string }>`
  &,
  ${CloseButton} {
    ${({ backdrop }) =>
      backdrop &&
      css`
        color: white;
        text-shadow: 0 0.1em 0.7em black;
      `}
  }

  p {
    line-height: 1.5;
    font-size: 1.8rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: brightness(40%) contrast(80%);
    z-index: -1;

    ${({ backdrop }) =>
      backdrop &&
      css`
        background-image: url(${backdrop});
      `}
  }
`;

const MovieDetailModal: FunctionComponent<MovieDetailModalProps> = ({
  movie,
  visible,
  onClose,
}) => {
  const stars = range(Math.ceil(movie.vote_average / 2));

  return (
    <StyledModal
      backdrop={movie.backdrop_path && getMovieImage(movie.backdrop_path, coverSize.backdrop)}
      title="Movie Details"
      visible={visible}
      onClose={onClose}
      width={850}
    >
      <Wrapper>
        <div>
          <Cover
            src={getMovieImage(movie.poster_path, coverSize.medium)}
            alt={movie.title}
            width="100%"
          />
        </div>
        <div>
          <h2>
            {movie.title} ({dayjs(movie.release_date).format("YYYY")})
          </h2>
          <Stars>
            {stars.map((_) => (
              <FontAwesomeIcon icon={faStar} />
            ))}
          </Stars>
          <p>{movie.overview}</p>
        </div>
      </Wrapper>
    </StyledModal>
  );
};

export default MovieDetailModal;
