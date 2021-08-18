import { arrayOf, bool, func, number, oneOfType, string } from 'prop-types';
import React from 'react';

const Select = ({ id, labelText, options, value, onChange }) => (
  <label htmlFor={ id }>
    {labelText}
    <select
      id={ id }
      data-testid={ id }
      value={ value }
      onChange={ onChange }
    >
      {options.map((option) => <option key={ option }>{option}</option>)}
    </select>
  </label>
);

Select.propTypes = {
  id: string.isRequired,
  labelText: string.isRequired,
  options: arrayOf(string).isRequired,
  value: oneOfType([string, number, bool]).isRequired,
  onChange: func.isRequired,
};

export default Select;
