import React from "react";
import Styled from "styled-components";

const Select = Styled.select`
  border-color: #FF9900;
  margin: 20px;
  cursor: pointer;
  background-color: black;
  color: white;
  width: 50%;
`;

const Option = Styled.option`
  margin: 20px;
`;

const FilterSelector = ({ option, handleChange }) => {
  return (
    <Select onChange={handleChange}>
      {option.map((res) => (
        <Option value={res.name}>{res.name}</Option>
      ))}
    </Select>
  );
};

export default FilterSelector;
