import React from "react";
import Styled from "styled-components";

const Filter = Styled.div`
  margin: 20px;
  color : white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1em;
`;

const FilterByKM = ({ value, handleChange }) => {
  return (
    <Filter>
      <input
        onChange={handleChange}
        type="range"
        value={value}
        max="150"
        min="0"
        step="5"
      />
      <output>{value}/150km</output>
    </Filter>
  );
};

export default FilterByKM;
