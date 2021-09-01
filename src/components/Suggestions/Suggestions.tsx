import React, { FC } from "react";
import cn from "classnames";
import { SuggestionsType } from "../../global/types";
import SuggestedSection from "./SuggestedSection";
import { COMMON_SUGGESTIONS } from "../../global/constants";
import useActiveSuggestionIndex from "./useActiveSuggestionIndex";

interface SuggestionsComponentType {
  suggestions: SuggestionsType;
  inputValue: string;
  onChangeInputValue: (newVal: string) => void;
  isSuggestorVisible: boolean;
}

const Suggestions: FC<SuggestionsComponentType> = ({
  suggestions,
  inputValue,
  onChangeInputValue,
  isSuggestorVisible,
}) => {
  const { activeIndex } = useActiveSuggestionIndex(
    inputValue,
    suggestions,
    isSuggestorVisible
  );

  const renderSuggestions = () => {
    const sectionTitles = Object.keys(suggestions);
    if (!sectionTitles.length) {
      return (
        <div className="no-suggestions-container">
          <p>Zatím jsme nic nenašli, zkuste prohledat celý náš web.</p>
          <button className="search-web-button">Prohledat celý web</button>
        </div>
      );
    }
    let maxIndex = 0;
    return sectionTitles.map((title) => {
      const suggestedItems = suggestions[title];
      maxIndex += suggestedItems.length;
      return (
        <SuggestedSection
          key={title}
          title={title}
          suggestedItems={suggestedItems}
          activeIndex={activeIndex}
          topPossibleIndex={maxIndex}
        />
      );
    });
  };

  const suggestionsContentCn = cn({
    "suggestions-content-container": true,
    "center-suggestions": !Object.keys(suggestions).length && inputValue,
  });

  if (!isSuggestorVisible) return null;

  return (
    <div className="suggestions-main-container">
      <div className={suggestionsContentCn}>{renderSuggestions()}</div>
      <footer className="suggestions-footer">
        <a href="/#">Podrobné vyhledávání</a>
      </footer>
    </div>
  );
};

export default Suggestions;
