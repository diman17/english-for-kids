const URL = 'http://localhost:3000/api/cards';

type CardFromDataBase = {
  card_id: number;
  image: string;
  audio: string;
  text: string;
  translate: string;
  category_id: string;
};

const adapter = (data: CardFromDataBase) => ({
  id: data.card_id,
  image: data.image,
  audio: data.audio,
  text: data.text,
  translate: data.translate,
  categoryId: data.category_id,
});

export const getCardsByCategoryId = async (categoryId: number) => {
  const response = await fetch(`${URL}/${categoryId}`);
  const cards = await response.json();
  return cards.map((card: CardFromDataBase) => adapter(card));
};

export const getCountCardsByCategoryId = async (categoryId: number) => {
  const response = await fetch(`${URL}/${categoryId}/count`);
  const count = await response.json();
  return count;
};
