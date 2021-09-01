import React, { FC } from "react";
import SearchInput, { SearchInputType } from "../SearchInput/SearchInput";
import { ClickAwayListener } from "@material-ui/core";
import Suggestions from "../Suggestions/Suggestions";
import { SuggestionsType } from "../../global/types";

import "../../global/styles.scss";

type KnihobotSuggestorTypes = SearchInputType & {
  suggestions: SuggestionsType;
  isSuggestorVisible: boolean;
};

const KnihobotSuggestor: FC<KnihobotSuggestorTypes> = ({
  inputValue,
  onChangeInputValue,
  suggestions,
  isSuggestorVisible,
  setSuggestorVisibility,
}) => {
  return (
    <ClickAwayListener onClickAway={() => setSuggestorVisibility(false)}>
      <div className="knihobot-sugesstor-container">
        <SearchInput
          inputValue={inputValue}
          onChangeInputValue={onChangeInputValue}
          setSuggestorVisibility={setSuggestorVisibility}
        />
        <Suggestions
          inputValue={inputValue}
          onChangeInputValue={onChangeInputValue}
          suggestions={suggestions}
          isSuggestorVisible={isSuggestorVisible}
        />
      </div>
    </ClickAwayListener>
  );
};

export default KnihobotSuggestor;
