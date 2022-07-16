/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";

// import db from "./../../db.json";
function Home() {
  const [users, setuser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/db.json");
    const data = await result.json();
    setuser(data.users);
    console.log(data.users);
  };

  return (
    <div className="container">
      <div className="py-4 ">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead bg-dark text-white">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">user name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <button>delete</button>
                  <button>update</button>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
