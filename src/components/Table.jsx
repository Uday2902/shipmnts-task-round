import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import mockData from "../assets/data";

const Table = ({ propsData }) => {
  let { column, value, operator } = propsData;
  value = parseInt(value);
  const [ans, setAns] = useState([]);

  useEffect(() => {
    console.log("useeffectcolumn", column, value, operator);
    const fetchData = () => {
      let ans2 = [];
      if (column === "id" || column === "age" || column === "salary") {
        ans2 = mockData.filter((element) => {
          if (operator === "Equals") {
            return element[column] === value;
          } else if (operator === "Less than") {
            return element[column] < value;
          } else if (operator === "Less than or equal") {
            return element[column] <= value;
          } else if (operator === "Greater than") {
            return element[column] > value;
          } else if (operator === "Greater than or equal") {
            return element[column] >= value;
          } else if (operator === "Range") {
            const temp = value.split(",");
            return element[column] >= temp[0] && element[column] <= temp[1];
          } else if (operator === "Not equal") {
            return element[column] != value;
          }
        });
      }
      setAns(ans2);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>A basic HTML table</h2>
      <table width={"100%"}>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>role</th>
          <th>hiredate</th>
          <th>isActive</th>
          <th>salary</th>
          <th>department</th>
          <th>projectsCompleted</th>
          <th>lastLogin</th>
          <th>accessLevel</th>
        </tr>
        {ans?.map((element) => {
          return (
            <tr key={element.id}>
              <th>{element.id}</th>
              <th>{element.name}</th>
              <th>{element.age}</th>
              <th>{element.role}</th>
              <th>{element.hiredate}</th>
              <th>{element.isActive}</th>
              <th>{element.salary}</th>
              <th>{element.department}</th>
              <th>{element.projectsCompleted}</th>
              <th>{element.lastLogin}</th>
              <th>{element.accessLevel}</th>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Table;
