export const shuffle = <T>(arr: T[]) => {
  const array = [...arr];
  if (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return array;
};

export const playAudio = (audioPath: string, delay: number) => {
  setTimeout(() => {
    const audio = new Audio(`data:audio/mp3;base64,${audioPath}`);
    audio.play();
  }, delay);
};
