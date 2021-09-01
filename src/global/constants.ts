import { SuggestionsType } from "./types";

export const COMMON_SUGGESTIONS: SuggestionsType = {
  "ČASTO SE HLEDÁ...": [
    {
      url: "/#",
      name: "Harry Potter",
    },
    {
      url: "/#",
      name: "Stephen King",
    },
    {
      url: "/#",
      name: "Star Wars",
    },
    {
      url: "/#",
      name: "Terry Pratchet",
    },
  ],
};

export const SUGGESTIONS_DATA: SuggestionsType = {
    "books": [
        {
            "url": "https://knihobot.cz/hledani/?ext=1&title=R.U.R.",
            "name": "R.U.R."
        },
      {
            "url": "https://knihobot.cz/hledani/?ext=1-&author=Karel+Capek",
            "name": "Karel Capek"
        }
    ],
    "authors": [
        {
            "url": "https://knihobot.cz/hledani/?ext=1-&author=Karel+Capek",
            "name": "Karel Capek"
        }
    ],
    "categories": [
        {
            "url": "https://knihobot.cz/kategorie/302-ceska",
            "name": "Česká próza"
        }
    ]
};