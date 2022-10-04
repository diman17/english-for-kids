import React, { useEffect, useState } from 'react';
import { getCountCardsByCategoryId } from '../../../api/cards';
import { Category as CategoryType } from '../../../types/common';
import styles from './category.module.css';
import DefaultView from './default-view/DefaultView';
import RenameView from './rename-view/RenameView';

type CategoryProps = {
  category: CategoryType;
};

function Category(props: CategoryProps) {
  const { category } = props;
  const { id, name } = category;
  const [count, setCount] = useState('');
  const [isRename, setIsRename] = useState(false);
  const [categoryName, setCategoryName] = useState(name);

  useEffect(() => {
    getCountCardsByCategoryId(id).then((count) => setCount(count));
  }, [count]);

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
          categoryId={id}
          categoryName={categoryName}
          count={count}
        />
      )}
    </article>
  );
}

export default Category;
