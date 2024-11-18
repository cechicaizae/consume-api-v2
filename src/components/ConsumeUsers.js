import React from "react";
import { useState, useEffect } from "react";
const ConsumeUsers = () => {
  //setear hooks useState
  const [users, setUsers] = useState([]);
  //funcion traer api
  const URL = "https://jsonplaceholder.typicode.com/users";
  //traer datos
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    showData([]);
  });

  //renderizamos la vista
  return (
    <div>
      <table align="center">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{`${user.name} ${user.username}`}</td>
              <td>{user.address.street}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsumeUsers;