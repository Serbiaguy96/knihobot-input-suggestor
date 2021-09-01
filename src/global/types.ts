export type SuggestionsItemType = {
    url: string;
    name: string;
};

export type SuggestionsType = {
    [key: string]: SuggestionsItemType[];
}