export type Category = {
  id: number;
  name: string;
};

export type Categories = Category[];

export type Card = {
  id: number;
  image: string;
  audio: string;
  audioName: string;
  text: string;
  translate: string;
  categoryId: number;
};

export type Cards = Card[];
