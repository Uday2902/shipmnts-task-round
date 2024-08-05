import React from "react";

const Table = ({mockData}) => {
    
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
        {mockData.map((element) => {
          return (
            <tr key={element.id} >
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
      <p>
        To understand the example better, we have added borders to the table.
      </p>
    </>
  );
};

export default Table;
