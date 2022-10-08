const URL =
  'https://english-for-kids-nbnjp13wz-diman17.vercel.app/api/categories';

type CategoryFromDataBase = {
  category_id: number;
  name: string;
};

const adapter = (data: CategoryFromDataBase) => ({
  id: data.category_id,
  name: data.name,
});

export const getCategories = async () => {
  const response = await fetch(`${URL}`);
  const categories = await response.json();
  return categories.map((category: CategoryFromDataBase) => adapter(category));
};

export const createCategory = async (name: string) => {
  await fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
    }),
  });
};

export const updateCategory = async (id: number, name: string) => {
  await fetch(`${URL}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      name,
    }),
  });
};

export const deleteCategory = async (id: number) => {
  await fetch(`${URL}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
    }),
  });
};
