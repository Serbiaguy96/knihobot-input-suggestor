import React, { useState } from "react";
import KnihobotSuggestor from "./KnihobotSuggestor";
import useSuggestionsData from "./useSuggestionsData";

const Container = () => {
  const { inputValue, suggestions, onChangeSearchInput } = useSuggestionsData();
  const [isSuggestorVisible, setSuggestorVisibility] = useState(false);

  return (
    <KnihobotSuggestor
      inputValue={inputValue}
      onChangeInputValue={onChangeSearchInput}
      suggestions={suggestions}
      isSuggestorVisible={isSuggestorVisible}
      setSuggestorVisibility={setSuggestorVisibility}
    />
  );
};

export default Container;
