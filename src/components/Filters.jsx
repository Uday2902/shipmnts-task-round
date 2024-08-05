import React from "react";
import "./Filters.css";
import { useState } from "react";

const Filters = () => {
  const [columnName, setColumnName] = useState("id");
  const [operator, setOperator] = useState("Euqals");

  const data = {
    filters: ["column", "value", "operator"],
    column: [
      "id",
      "name",
      "age",
      "role",
      "hireDate",
      "isActive",
      "salary",
      "department",
      "projectsCompleted",
      "accessLevel",
    ],
    operators: {
      id: [
        "Equals",
        "Less than",
        "Less than or equal",
        "Greater than",
        "Greater than or equal",
        "Range",
        "Not equal",
      ],
      name: [],
      age: [
        "Equals",
        "Less than",
        "Less than or equal",
        "Greater than",
        "Greater than or equal",
        "Range",
        "Not equal",
      ],
      role: [],
      hireDate: [],
      isActive: [],
      salary: [
        "Equals",
        "Less than",
        "Less than or equal",
        "Greater than",
        "Greater than or equal",
        "Range",
        "Not equal",
      ],
      department: [],
      projectsCompleted: [
        "Equals",
        "Less than",
        "Less than or equal",
        "Greater than",
        "Greater than or equal",
        "Range",
        "Not equal",
      ],
      lastLogin: [],
      accessLevel: [],
    },
  };

  const onOptionChangeHandler = (e) => {
    setColumnName(e.target.value);
  };

  return (
    <div className="filter-main-div">
      <div className="custom-select">
        <select
          value={columnName}
          key={"column"}
          onChange={onOptionChangeHandler}
        >
          {data["column"]?.map((ele) => {
            return (
              <option key={ele} value={ele}>
                {ele}
              </option>
            );
          })}
        </select>

        <select
          value={operator}
          key={"operator"}
          onChange={onOptionChangeHandler}
        >
          {data["operators"][columnName]?.map((ele) => {
            return (
              <option key={ele} value={ele}>
                {ele}
              </option>
            );
          })}
        </select>

        {/* <select
          value={columnName}
          key={"column"}
          onChange={onOptionChangeHandler}
        >
          {data["column"]?.map((ele) => {
            return (
              <option key={ele} value={ele}>
                {ele}
              </option>
            );
          })}
        </select> */}

      </div>
    </div>
  );
};

export default Filters;
