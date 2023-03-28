import React, { useState } from "react";
import quoralogo from '../images/quora_logo1.png'
import '../styles/App.css';
import { Link, useNavigate } from "react-router-dom";



function Rag() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password || !email) {
      window.alert("All fields are required");
      return;
    }

    // create a new user object
    const newUser = {
      username,
      password,
      email
    };

    // retrieve existing users from local storage or create an empty array if none exist
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // add the new user to the array of users
    const updatedUsers = [...existingUsers, newUser];

    // store the updated array of users in local storage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate("/login");
  };

  return (
    <>
      <div className="home">
        <img src={quoralogo} />
      </div>

      <div className="form">

        <form onSubmit={handleSubmit}>
          <label>
            Username <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <label>
            Email <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <button type="submit">Register</button>
          <br />
          <p className='existing-account'>
            Already Have An Account? <Link to={"/"}> Please Login</Link>
          </p>
        </form>


      </div>
    </>
  )
}

export default Rag