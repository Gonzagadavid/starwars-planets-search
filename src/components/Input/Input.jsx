import { bool, func, number, oneOfType, string } from 'prop-types';
import React from 'react';

const Input = ({ id, labelText, type, value, onChange, name }) => (
  <label htmlFor={ id }>
    {type !== 'radio' ? labelText : ''}
    <input
      id={ id }
      data-testid={ id }
      type={ type }
      value={ value }
      onChange={ onChange }
      name={ name }
    />
    {type === 'radio' ? labelText : ''}
  </label>
);

Input.propTypes = {
  id: string.isRequired,
  labelText: string.isRequired,
  type: string.isRequired,
  name: string,
  value: oneOfType([string, number, bool]).isRequired,
  onChange: func.isRequired,
};

Input.defaultProps = {
  name: '',
};

export default Input;
