const URL = 'http://localhost:3000/api/cards';

type CardFromDataBase = {
  card_id: number;
  image: string;
  audio: string;
  audio_name: string;
  text: string;
  translate: string;
  category_id: string;
};

const adapter = (data: CardFromDataBase) => ({
  id: data.card_id,
  image: data.image,
  audio: data.audio,
  audioName: data.audio_name,
  text: data.text,
  translate: data.translate,
  categoryId: data.category_id,
});

export const getCardsByCategoryId = async (categoryId: number) => {
  const response = await fetch(`${URL}/${categoryId}`);
  const cards = await response.json();
  return cards.map((card: CardFromDataBase) => adapter(card));
};

export const getAllCards = async () => {
  const response = await fetch(`${URL}`);
  const cards = await response.json();
  return cards.map((card: CardFromDataBase) => adapter(card));
};

export const updateCard = async (
  id: number,
  image: string,
  audio: string,
  audioName: string,
  text: string,
  translate: string,
) => {
  await fetch(`${URL}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify({
      id,
      image,
      audio,
      audioName,
      text,
      translate,
    }),
  });
};
