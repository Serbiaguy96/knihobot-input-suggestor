import React, { Fragment, FC } from "react";
import cn from "classnames";
import SuggestedItem from "./SuggestedItem";
import { SuggestionsItemType } from "../../global/types";

interface SuggestedSectionType {
  title: string;
  suggestedItems: SuggestionsItemType[];
  activeIndex: number;
  topPossibleIndex: number;
}

const SuggestedSection: FC<SuggestedSectionType> = ({
  title,
  suggestedItems,
  activeIndex,
  topPossibleIndex,
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
