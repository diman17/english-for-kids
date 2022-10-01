import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import correctStar from '../../assets/icons/star-win.svg';
import wrongStar from '../../assets/icons/star.svg';
import styles from './stars.module.css';

function Stars() {
  const stars = useSelector((state: RootState) => state.game.stars);

  return (
    <div className={styles.stars}>
      {stars.map((star) => {
        if (star) {
          return <img src={correctStar} alt="correct" width="30" height="30" />;
        }
        return <img src={wrongStar} alt="wrong" width="30" height="30" />;
      })}
    </div>
  );
}

export default Stars;
