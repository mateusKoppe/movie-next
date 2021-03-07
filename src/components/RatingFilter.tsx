import { FunctionComponent } from "react";
import styled from "styled-components";
import Rating from "../types/Rating";

interface RatingFilterProps {
  value: Rating | null;
  onChange: Function;
}

const RATING_OPTIONS: Rating[] = [
  {
    min: 0,
    max: 2,
  },
  {
    min: 2,
    max: 4,
  },
  {
    min: 4,
    max: 6,
  },
  {
    min: 6,
    max: 8,
  },
  {
    min: 8,
    max: 10,
  },
];

const Wrapper = styled.div`
  max-width: 120rem;
  margin: auto;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5em;
  padding: 0.3rem 1.6rem;
`;

const Stars = styled.div`
  display: flex;
  gap: 0.3em;
`;

const Star = styled.input<{ active: boolean }>`
  width: 2.8rem;
  filter: ${(props) => (props.active ? "none" : "grayscale(80%)")};
  cursor: pointer;
  transition: 0.2s all ease;

  &:focus {
    transform: scale(1.2);
  }
`;

const Label = styled.span`
  font-weight: bold;
  font-size: 1.75rem;
`;

const RatingFilter: FunctionComponent<RatingFilterProps> = ({
  value,
  onChange,
}) => {
  const isRatingActive = (rating: Rating) => {
    if (!value) return false;

    return value.max === rating.max && value.min === rating.min;
  };

  const handleClick = (rating: Rating) => {
    if (isRatingActive(rating)) {
      onChange(null);
      return;
    }

    onChange(rating);
  };

  return (
    <Wrapper>
      <Label>Rating:</Label>
      <Stars>
        {RATING_OPTIONS.map((rating) => (
          <Star
            type="image"
            onClick={() => handleClick(rating)}
            src="/images/star.svg"
            alt="Rating star"
            active={isRatingActive(rating)}
          />
        ))}
      </Stars>
    </Wrapper>
  );
};

export default RatingFilter;
