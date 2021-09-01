import React, { FC } from "react";
import { Search, Clear } from "@material-ui/icons";

// komponenta slouzici pro input

export interface SearchInputType {
  inputValue: string;
  onChangeInputValue: (newValue: string) => void;
  setSuggestorVisibility: (newV: boolean) => void;
}

const SearchInput: FC<SearchInputType> = ({
  inputValue,
  onChangeInputValue,
  setSuggestorVisibility,
}) => {
  const setSuggestorVisible = () => setSuggestorVisibility(true);
  return (
    <div className="search-input-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          name="search-input"
          value={inputValue}
          placeholder="Najít knihu, autora nebo kategorii..."
          onChange={(e) => onChangeInputValue(e.target.value)}
          onFocus={setSuggestorVisible}
        />
        {inputValue && (
          <Clear fontSize="large" onClick={() => onChangeInputValue("")} />
        )}
      </div>
      <div className="search-input-search-container">
        <Search />
      </div>
    </div>
  );
};

export default SearchInput;
