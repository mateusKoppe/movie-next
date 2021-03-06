import { FunctionComponent } from "react";
import { range } from "lodash";

import dayjs from "dayjs";
import styled from "styled-components";
import Movie from "../../types/Movie";
import Modal, { CloseButton } from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface MovieDetailModalProps {
  movie: Movie;
  visible: boolean;
  onClose: Function;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 28rem auto;
  gap: 1.5rem;
`;

const Cover = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 1.5rem;
`;

const Stars = styled.div`
  color: #ffc107;
  font-size: 1.85rem;
`;

const StyledModal = styled(Modal)<{ backdrop: string }>`
  &,
  ${CloseButton} {
    color: white;
    text-shadow: 0 .1em 0.7em black;
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
    background-image: url(${({ backdrop }) => backdrop});
    background-size: cover;
    background-position: center;
    filter: brightness(40%) contrast(80%);
    z-index: -1;
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
      backdrop={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
      title="Movie Details"
      visible={visible}
      onClose={onClose}
      width={850}
    >
      <Wrapper>
        <div>
          <Cover
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
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
