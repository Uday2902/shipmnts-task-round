import React from "react";
import "./Filters.css";
import Table from "./Table";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {setOperatorState, setColumnState, setVlaueState} from "../state/dataSlice"

// id: 1,
//     name: "Alice Johnson",
//     age: 28,
//     role: "Engineer",
//     hireDate: "2022-01-15",
//     isActive: true,
//     salary: 85000,
//     department: "Development",
//     projectsCompleted: 5,
//     lastLogin: "2024-07-28T14:48:00.000Z",
//     accessLevel: "Admin"

const Filters = () => {
  const [columnName, setColumnName] = useState("id");
  const [operator, setOperator] = useState("Equals");
  const [value, setValue] = useState();
  const [propsData, setPropsData] = useState({column: "", value: "", operator: ""});
  const [flag, setFlag] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = () => {
        setPropsData({
            column: columnName,
            value: value,
            operator: operator
        })
        dispatch(setColumnState({column: columnName}));
        dispatch(setOperatorState({operator: operator}));
        dispatch(setVlaueState({value}));
        setFlag(true);
    }

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
      name: [
        "Contains",
        "Not contains",
        "Equals",
        "Not equal",
        "Starts with",
        "Ends with",
        "Is null",
        "Is not null",
      ],
      age: [
        "Equals",
        "Less than",
        "Less than or equal",
        "Greater than",
        "Greater than or equal",
        "Range",
        "Not equal",
      ],
      role: [
        "Contains",
        "Not contains",
        "Equals",
        "Not equal",
        "Starts with",
        "Ends with",
        "Is null",
        "Is not null",
      ],
      hireDate: [
        "Contains",
        "Not contains",
        "Equals",
        "Not equal",
        "Starts with",
        "Ends with",
        "Is null",
        "Is not null",
      ],
      isActive: ["Is null", "Is not null", "Equals"],
      salary: [
        "Equals",
        "Less than",
        "Less than or equal",
        "Greater than",
        "Greater than or equal",
        "Range",
        "Not equal",
      ],
      department: [
        "Contains",
        "Not contains",
        "Equals",
        "Not equal",
        "Starts with",
        "Ends with",
        "Is null",
        "Is not null",
      ],
      projectsCompleted: [
        "Equals",
        "Less than",
        "Less than or equal",
        "Greater than",
        "Greater than or equal",
        "Range",
        "Not equal",
      ],
      lastLogin: [
        "Contains",
        "Not contains",
        "Equals",
        "Not equal",
        "Starts with",
        "Ends with",
        "Is null",
        "Is not null",
      ],
      accessLevel: [],
    },
  };

  const onOptionChangeHandler = (e) => {
    setColumnName(e.target.value);
  };

  const handleChange = (e) => {
    setValue(e.target.value)
  };

  const onOptionChangeHandlerOperator = (e) => {
    setOperator(e.target.value)
  }

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
          onChange={onOptionChangeHandlerOperator}
        >
          {data["operators"][columnName]?.map((ele) => {
            return (
              <option key={ele} value={ele}>
                {ele}
              </option>
            );
          })}
        </select>

        <input onChange={handleChange} type="text" placeholder="value"></input>
        <button onClick={handleSubmit} >Submit</button>
        {
            flag? (<Table propsData = {propsData} />) : (<></>)
        }
      </div>
    </div>
  );
};

export default Filters;
