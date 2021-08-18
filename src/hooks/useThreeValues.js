import { useState } from 'react';

const useThreeValues = (INITIAL_VALUE = ['', '', '']) => {
  const [value1, setValue1] = useState(INITIAL_VALUE[0]);
  const [value2, setValue2] = useState(INITIAL_VALUE[1]);
  const [value3, setValue3] = useState(INITIAL_VALUE[2]);

  const setValues = (array) => {
    setValue1(array[0]);
    setValue2(array[1]);
    setValue3(array[2]);
  };

  return [value1, value2, value3, setValues];
};

export default useThreeValues;
