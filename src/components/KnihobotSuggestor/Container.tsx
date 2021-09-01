import React, { useState, useEffect } from "react";
import { ESCAPE_CODE } from "../../global/constants";
import KnihobotSuggestor from "./KnihobotSuggestor";
import useSuggestionsData from "./useSuggestionsData";

const Container = () => {
  const { inputValue, suggestions, onChangeSearchInput } = useSuggestionsData();
  const [isSuggestorVisible, setSuggestorVisibility] = useState(false);

  const onPressEscape = (e: KeyboardEvent) => {
    if (e.code === ESCAPE_CODE && isSuggestorVisible) {
      setSuggestorVisibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onPressEscape);
    return () => {
      document.removeEventListener("keydown", onPressEscape);
    };
  }, [isSuggestorVisible]);

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
