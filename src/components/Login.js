import { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
// import { useLogin } from "../custom-hooks/useLogin";
import { UserContext } from "../contexts/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    userServices
      .login({ username, password })
      .then((res) => {
        setUser(res.data);
        navigate("/");
        console.log("logged in");
      })
      .catch((err) => console.log(err));
  }

  function getCurrentUser(e) {
    e.preventDefault();
    // userServices.getCurrentUser().then((res) => console.log(res.data));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">password</label>
      <input
        type="text"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">login</button>
      <button onClick={getCurrentUser}>get current user</button>
    </form>
  );
}

export default Login;
