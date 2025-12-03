export interface ICard {
  mainLanguage: string;
  otherLanguage: string;
  pronanciation: string;
  isFavourite: boolean;
  deckId: number;
}

export interface IDeck {
  id: number;
  name: string;
  email: string;
}

export interface Err {
  message: string
}