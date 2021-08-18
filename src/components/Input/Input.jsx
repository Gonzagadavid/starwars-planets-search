import { bool, func, number, oneOfType, string } from 'prop-types';
import React from 'react';

const Input = ({ id, labelText, type, value, onChange }) => (
  <label htmlFor={ id }>
    {labelText}
    <input
      id={ id }
      data-testid={ id }
      type={ type }
      value={ value }
      onChange={ onChange }
    />
  </label>
);

Input.propTypes = {
  id: string.isRequired,
  labelText: string.isRequired,
  type: string.isRequired,
  value: oneOfType([string, number, bool]).isRequired,
  onChange: func.isRequired,
};

export default Input;
