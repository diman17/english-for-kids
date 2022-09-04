export type Category = {
  id: number;
  name: string;
  previewImage: string;
};

export type Categories = Category[];

export type Card = {
  id: number;
  image: string;
  audio: string;
  text: string;
  translate: string;
  categoryId: number;
};

export type Cards = Card[];
