import { useState } from 'react';

export default (): [boolean, () => void] => {
  const [trigger, setValue] = useState(true);
  return [trigger, () => setValue(!trigger)];
};
