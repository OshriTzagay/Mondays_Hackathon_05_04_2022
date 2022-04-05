import React, { useContext } from "react";
import { loginUser } from "../../../Services/User-Service";
import { UsersContext } from "../../../Context/User/User-context";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { user, setUser } = useContext(UsersContext);
  const Navigate = useNavigate();

  const changingTheValue = (e) => {
    user[e.target.name] = e.target.value;
  };
  const SendTheLoginUser = (e) => {
    e.preventDefault();

    console.log(user);

    loginUser(user).then((res) => {
      if (res.token) {
        localStorage.setItem("token", res.token);

        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        setUser({ ...decoded.user });
        alert(`welcome ${decoded.user.FirstName} `);

        Navigate("/home");
      } else {
        alert("Check your password or email");
      }
    });
  };

  return (
    <div>
      <label htmlFor="Email">Email:</label>
      <br />
      <input type="text" name="Email" onChange={changingTheValue} />
      <br />

      <label htmlFor="password">Password:</label>
      <br />
      <input type="password" name="Password" onChange={changingTheValue} />
      <button onClick={SendTheLoginUser}>SEND!</button>
    </div>
  );
}
