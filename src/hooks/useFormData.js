import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSearchData = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const onInputChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSearchQuery = (evt) => {
    evt.preventDefault();
    navigate(`/search/${query}`);
    setQuery("");
  };

  return {
    query,
    onInputChange,
    handleSearchQuery,
  };
};
