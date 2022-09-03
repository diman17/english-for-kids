const URL = 'http://localhost:3000/api';

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

const getCategories = async () => {
  const response = await fetch(`${URL}/categories`);
  const categories = await response.json();
  return categories.map((category: CategoryFromDataBase) => adapter(category));
};

export default getCategories;
