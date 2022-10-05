const URL = 'http://localhost:3000/api/categories';

type CategoryFromDataBase = {
  category_id: number;
  name: string;
  preview_image: string;
};

const adapter = (data: CategoryFromDataBase) => ({
  id: data.category_id,
  name: data.name,
  previewImage: data.preview_image,
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

export const updateCategoryName = async (id: number, name: string) => {
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
