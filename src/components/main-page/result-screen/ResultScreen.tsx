import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import successImage from '../../../assets/images/success.jpg';
import failureImage from '../../../assets/images/failure.jpg';
import styles from './result-screen.module.css';
import successAudio from '../../../assets/audio/success.mp3';
import failureAudio from '../../../assets/audio/failure.mp3';
import { playAudio } from '../../../utils/common';
import {
  resetMistakes,
  setIsResultScreenShown,
} from '../../../store/slices/game';

import { RootState } from '../../../store/store';

function ResultScreen() {
  const mistakes = useSelector((state: RootState) => state.game.mistakes);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
      dispatch(setIsResultScreenShown(false));
      dispatch(resetMistakes());
    }, 3500);
  }, []);

  if (mistakes) {
    playAudio(failureAudio);

    return (
      <div className={styles.screen}>
        {mistakes > 1 ? (
          <p className={`${styles.text} ${styles['text-failure']}`}>
            {mistakes} mistakes...
          </p>
        ) : (
          <p className={`${styles.text} ${styles['text-failure']}`}>
            {mistakes} mistake...
          </p>
        )}
        <img src={failureImage} alt="failure" width="397" height="330" />
      </div>
    );
  }

  playAudio(successAudio);

  return (
    <div className={styles.screen}>
      <p className={`${styles.text} ${styles['text-success']}`}>success!</p>
      <img src={successImage} alt="success" width="478" height="392" />
    </div>
  );
}

export default ResultScreen;
