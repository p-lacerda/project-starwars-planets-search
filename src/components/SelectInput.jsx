import React from 'react';
import propTypes from 'prop-types';

function SelectInput({ htmlFor, dataId, arr, onChange }) {
  return (
    <label htmlFor={ htmlFor }>
      <select data-testid={ dataId } onChange={ onChange }>
        {arr.map((options) => (
          <option key={ options }>
            {options}
          </option>))}
      </select>
    </label>
  );
}

SelectInput.propTypes = {
  htmlFor: propTypes.string.isRequired,
  dataId: propTypes.string.isRequired,
  arr: propTypes.arrayOf(propTypes.any).isRequired,
  onChange: propTypes.func.isRequired,
};

export default SelectInput;
