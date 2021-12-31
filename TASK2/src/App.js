import React, { useState } from "react";
import loader from "./loader.gif";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    // console.log(jsonResponse);
    setUsers(jsonResponse.data);
    document.getElementById("loader").style.display = "block";
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("data").style.display = "block";
    }, 1000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2 id="heading">LetsGrowMore</h2>
        <button onClick={loadUsers}>Get Users</button>
      </header>
      <div id="loader">
        <img src={loader} alt="..loading" />
      </div>
      <div id="data">
        <h3>USERS</h3>
        <ul>
          {users.map(({ id, first_name, last_name, email, avatar }) => {
            return (
              <li key={id}>
                <img src={avatar} alt="" />
                <p> ID : {id}</p>
                <p>
                  Name : {first_name} {last_name}
                </p>
                <p>Email : {email}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
