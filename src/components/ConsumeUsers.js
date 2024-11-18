import React, { useState, useEffect } from "react";

const ConsumeUsers = () => {
  const [users, setUsers] = useState([]);

  //Implement Debounce
  const [search, setSearch] = useState(""); //Search
  const [debouncedSearch, setDebouncedSearch] = useState(""); // Status search debounce

  const URL = "https://jsonplaceholder.typicode.com/users";

  const showData = async (term) => {
    const response = await fetch(`${URL}?q=${term}`);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 5000); // Response time

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    showData(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a name:"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
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
