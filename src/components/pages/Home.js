/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [users, setuser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setuser(result);
  };

  return (
    <div className='container'>
      <div className='py-4 '>
        <h1>Home Page</h1>
        <table className='table border shadow'>
          <thead className="thead bg-dark text-white">
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>user name</th>
              <th scope='col'>Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {
            console.log(users.map())
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
