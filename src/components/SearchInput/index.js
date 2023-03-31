import iconSearch from "assets/icons/search/buscar.png";
import { useState } from "react";
import { useLocation } from "wouter";
import { keywordSearch } from "components/SearchInput/functions/keywordSearch";
import {
  handleChangeSearch,
  handleSubmitSearch,
} from "components/SearchInput/functions/SearchFormValidators";

const SearchInput = () => {
  const [search, setSearch] = useState(keywordSearch());
  const [path, pushLocation] = useLocation();

  return (
    <div
      className="SearchInput"
      onSubmit={(event) => handleSubmitSearch({ event, search, pushLocation })}
    >
      <form className="SearchInput__form">
        <input
          placeholder="Ej: Asunción o Asunción,PY"
          className="SearchInput__inputText"
          onChange={(event) => handleChangeSearch({ event, setSearch })}
          value={search}
          maxLength="30"
        ></input>
        <button className="SearchInput__button">
          <img src={iconSearch} alt="search" className="SearchInput__img" />
        </button>
      </form>
    </div>
  );
};
export default SearchInput;
