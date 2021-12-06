import React from "react";
import Style from "./Select.module.css";

const Select = ({ options, value, setValue }) => {
  return (
    <div>
      <select className={Style.Select} value={value} onChange={({ target }) => setValue(target.value)}>
        <option disabled value="">
          Tipo
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
