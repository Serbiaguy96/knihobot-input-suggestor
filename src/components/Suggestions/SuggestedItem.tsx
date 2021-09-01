import React, { FC, useEffect } from "react";
import cn from "classnames";

const ENTER = "Enter";

interface SuggestedItemType {
  index: number;
  name: string;
  url: string;
  activeIndex: number;
}

const SuggestedItem: FC<SuggestedItemType> = ({
  index,
  name,
  url,
  activeIndex,
}) => {
  const handleEnterPress = (e: KeyboardEvent) => {
    if (e.code === ENTER && index === activeIndex) {
      window.location.href = url;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEnterPress);
    return () => {
      document.removeEventListener("keydown", handleEnterPress);
    };
  }, [index, activeIndex]);

  const divCn = cn({
    "suggestions-item-container": true,
    "hover-over-item-container": index === activeIndex,
  });
  return (
    <div className={divCn} key={index}>
      <a href={url} dangerouslySetInnerHTML={{ __html: name }} />
    </div>
  );
};

export default SuggestedItem;
