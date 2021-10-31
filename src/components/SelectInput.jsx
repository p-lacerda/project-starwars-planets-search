import React from 'react';

function SelectInput({ htmlFor, dataId, arr, onChange}) {
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

export default SelectInput;
