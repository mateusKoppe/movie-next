import { FormEvent, FunctionComponent, useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  position: relative;
`;

const Input = styled.input`
  background-color: white;
  border-radius: 2em;
  padding: 0.8em 1.2em;
  border: 0;
  outline: none;
  font-size: 1.75rem;
  width: 30rem;
`;

const Button = styled.button`
  background-color: #ff7361;
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.6rem;
  padding: 0.6em 0.9em;
  border-radius: 2em;
  color: white;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  outline: none;
`;

interface SearchInputProps {
  onSearch: Function
}

const SearchInput: FunctionComponent<SearchInputProps> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSearch(search);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        required
        placeholder="Search for a movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchInput;
