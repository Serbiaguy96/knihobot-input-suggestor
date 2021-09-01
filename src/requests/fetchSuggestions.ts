import axios from "axios"
import { SuggestionsType } from "../global/types";
import { SUGGESTIONS_DATA } from "../global/constants";


// TODO 
const BASE_URL = "https://knihobot.cz";

export const fetchSuggestions = <T>(suggestions: string) => {
    return axios.get<T>(`/ts-api/search/suggestions?q=${suggestions}`);
}

export const fetchMockedSuggestions = (suggestions: string): SuggestionsType => {
    const filteredSuggestions = {} as SuggestionsType;
    Object.keys(SUGGESTIONS_DATA).forEach((key: string) => {
        const sectionData = SUGGESTIONS_DATA[key];

        const arrWithFilteredValues = sectionData.filter((val) => String(val.name).includes(suggestions));
        
        if (arrWithFilteredValues.length) {
          filteredSuggestions[key] = arrWithFilteredValues;
        }
    })
    return filteredSuggestions;
}