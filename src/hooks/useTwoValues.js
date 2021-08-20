import { useState } from 'react';

const useTwoValues = (INITIAL_VALUE = ['', '']) => {
  const [value1, setValue1] = useState(INITIAL_VALUE[0]);
  const [value2, setValue2] = useState(INITIAL_VALUE[1]);

  const setValues = (array) => {
    setValue1(array[0]);
    setValue2(array[1]);
  };

  return [value1, value2, setValues];
};

export default useTwoValues;
