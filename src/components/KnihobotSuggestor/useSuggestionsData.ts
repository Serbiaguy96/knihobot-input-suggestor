import { useEffect, useState } from "react";
import produce from "immer";
import { fetchMockedSuggestions, fetchSuggestions } from "../../requests/fetchSuggestions";
import { SuggestionsType } from "../../global/types";
import { COMMON_SUGGESTIONS } from "../../global/constants";

const removeAllBoldTags = (suggestions: SuggestionsType): SuggestionsType => {
  return produce(suggestions, (draft: SuggestionsType) => {
    Object.entries(draft).forEach(([key, value]) => {
        value.forEach(({ name }, index) => {
            draft[key][index].name = name.replace("<strong>", "").replace("</strong>", "");
        })
    })
});
}

const markMatchedChars = (suggestions: SuggestionsType, inputValue: string): SuggestionsType => {
    if (!inputValue) {
        return removeAllBoldTags(suggestions);
    }
    const notMarkedSuggestions = removeAllBoldTags(suggestions);
    return produce(notMarkedSuggestions, (draft: SuggestionsType) => {
    Object.entries(draft).forEach(([key, value]) => {
        value.forEach(({ name }, index) => {
            draft[key][index].name = name.replace(inputValue, `<strong>${inputValue}</strong>`);
        })
    })
})
}

interface SuggestionDataReturnType {
    inputValue: string;
    suggestions: SuggestionsType;
    onChangeSearchInput: (newVal: string) => void;
}

const useSuggestionsData = (): SuggestionDataReturnType => {
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState({} as SuggestionsType);

    useEffect(() => {
        if (inputValue) {
            // TODO - doplnit v funkci fetch suggestions funkci url 
            /*fetchSuggestions<SuggestionsType>(sugguestionQuery)
            .then(({ data }) => {
                setSuggestions(data);
            })
            .catch((error) => console.log(error));*/
            const suggestedData = fetchMockedSuggestions(inputValue);
            setSuggestions(markMatchedChars(suggestedData, inputValue));
        }
    }, [inputValue]);


    return {
        suggestions: inputValue ? suggestions : COMMON_SUGGESTIONS,
        inputValue,
        onChangeSearchInput: setInputValue,
    }
};

export default useSuggestionsData;