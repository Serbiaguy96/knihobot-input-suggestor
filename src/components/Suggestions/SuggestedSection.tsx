import React, { Fragment, FC } from "react";
import cn from "classnames";
import SuggestedItem from "./SuggestedItem";
import { SuggestionsItemType } from "../../global/types";

interface SuggestedSectionType {
  title: string;
  suggestedItems: SuggestionsItemType[];
  activeIndex: number;
  topPossibleIndex: number;
  setActiveIndex: (newIndex: number) => void;
}

const SuggestedSection: FC<SuggestedSectionType> = ({
  title,
  suggestedItems,
  activeIndex,
  topPossibleIndex,
  setActiveIndex,
}) => {
  const indexToStart = topPossibleIndex - suggestedItems.length;

  const renderSuggestedItem = (
    { url, name }: SuggestionsItemType,
    index: number
  ) => {
    const actualIndex = indexToStart + index;
    return (
      <SuggestedItem
        index={actualIndex}
        name={name}
        url={url}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    );
  };

  return (
    <Fragment>
      <h3>{title}</h3>
      {suggestedItems.map(renderSuggestedItem)}
    </Fragment>
  );
};

export default SuggestedSection;
