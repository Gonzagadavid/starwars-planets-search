import { useState } from 'react';

const useArray = (arrayInit) => {
  const [array, setArray] = useState(arrayInit);
  const addItem = (item) => setArray([...array, item]);
  const removeItem = (index) => setArray(array.filter((_, i) => index !== i));
  return [array, addItem, removeItem];
};

export default useArray;
