import React, { useEffect, useState } from 'react';
import { Cards, Category as CategoryType } from '../../../types/common';
import { getCountCardsByCategoryId } from '../../../utils/common';
import styles from './category.module.css';
import DefaultView from './default-view/DefaultView';
import RenameView from './rename-view/RenameView';

type CategoryProps = {
  updateCategories: () => void;
  category: CategoryType;
  cards: Cards;
};

function Category(props: CategoryProps) {
  const { updateCategories, category, cards } = props;
  const { id, name } = category;

  const [isRename, setIsRename] = useState(false);
  const [count, setCount] = useState<number | null>(null);
  const [categoryName, setCategoryName] = useState(name);

  useEffect(() => {
    setCount(getCountCardsByCategoryId(cards, id));
  }, [cards]);

  return (
    <article className={styles.category}>
      {isRename ? (
        <RenameView
          setCategoryName={setCategoryName}
          setIsRename={setIsRename}
          name={name}
          categoryId={id}
          categoryName={categoryName}
        />
      ) : (
        <DefaultView
          setIsRename={setIsRename}
          updateCategories={updateCategories}
          categoryId={id}
          categoryName={categoryName}
          count={count}
        />
      )}
    </article>
  );
}

export default Category;
