import { useLocation, useHistory } from "react-router-dom";
import { StyledInput } from "../../Input";
import { StyledDiv } from "./styled";
import searchQueryParamName from "../searchQueryParamName";

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <StyledDiv>
      <StyledInput
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </StyledDiv>
  );
};

export default Search;
