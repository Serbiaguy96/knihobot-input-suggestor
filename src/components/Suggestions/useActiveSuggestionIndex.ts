import { useState, useEffect, useMemo } from "react";
import _reduce from "lodash/reduce";
import { SuggestionsType } from "../../global/types";

const UP_ARROW = "ArrowUp";
const DOWN_ARROW = "ArrowDown";

const useActiveSuggestionIndex = (inputValue: string, suggestions: SuggestionsType, isSuggestorVisible: boolean) => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const countSuggestions = (): number => {
        return _reduce(suggestions, (result, value) => {
            return result += value.length;
        }, 0);
    }

    const numberOfSuggestions = useMemo(countSuggestions, [suggestions]);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (!isSuggestorVisible) return;

        switch(e.code) {
            case DOWN_ARROW: {
                const indexToSet = (activeIndex + 1) % (numberOfSuggestions);
                setActiveIndex(indexToSet);
                return;
            }
            case UP_ARROW: {
                const index = activeIndex === -1 || activeIndex == 0 ? numberOfSuggestions : activeIndex;
                const indexToSet = (index - 1);
                setActiveIndex(indexToSet);
                return;
            }
            default:
                return;
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [activeIndex, isSuggestorVisible])

    useEffect(() => {
        setActiveIndex(-1);
    }, [inputValue, suggestions])

    return { activeIndex  };
}

export default useActiveSuggestionIndex;