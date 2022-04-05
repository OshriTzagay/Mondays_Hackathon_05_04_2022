import React, { useContext } from "react";
import { loginUser } from "../../../Services/User-Service";
import { UsersContext } from "../../../Context/User/User-context";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { user, setUser } = useContext(UsersContext);
  const Navigate = useNavigate();

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

  return (
    <div>
      <label htmlFor="Email">Email:</label>
      <br />
      <input type="text" />
      <br />

      <label htmlFor="password">Password:</label>
      <br />
      <input type="password" />
      <button>SEND!</button>
    </div>
  );
}
