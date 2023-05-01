import { Checkbox } from "@mui/material";
import React from "react";

const Options = ({ data, toggleOptionselected, optionState }) => {
     console.log("optionstate", optionState)
  return (
    <ul>
      <li className="variantShow">
        <div className="variantInner">
          <input
          type="checkbox"
            //   {...label}
            // defaultChecked
            className="checkmark"
            checked={optionState}
            onChange={() => toggleOptionselected(data, !optionState)}
           
          />

          <span>{data?.title}</span>
        </div>
        <div className="variantInner1">
          <span>{data?.price}</span>
          <span>{data?.inventory_quantity}</span>
        </div>
      </li>
    </ul>
  );
};

export default Options;
