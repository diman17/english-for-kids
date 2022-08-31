export type Category = {
  id: string;
  name: string;
  previewImage: string;
};

export type Categories = Category[];

export type Card = {
  id: string;
  image: string;
  audio: string;
  text: string;
  translate: string;
  category: string;
};

export type Cards = Card[];
