import { useState, useEffect, useMemo } from "react";
import _reduce from "lodash/reduce";
import { SuggestionsType } from "../../global/types";
import { ARROW_DOWN_CODE, ARROW_UP_CODE } from "../../global/constants";

// Hook, ktery se stara o uchovani informace o tom, ktera polozka z napovidace je aktivni (zabarvena)

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
            case ARROW_DOWN_CODE: {
                const indexToSet = (activeIndex + 1) % (numberOfSuggestions);
                setActiveIndex(indexToSet);
                return;
            }
            case ARROW_UP_CODE: {
                const index = activeIndex === -1 || activeIndex === 0 ? numberOfSuggestions : activeIndex;
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
    }, [activeIndex, isSuggestorVisible, numberOfSuggestions])

    useEffect(() => {
        setActiveIndex(-1);
    }, [inputValue, suggestions])

    return { activeIndex, setActiveIndex  };
}

export default useActiveSuggestionIndex;