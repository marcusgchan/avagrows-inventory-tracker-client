import { useState } from "react";
import userServices from "../services/userServices";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    userServices
      .login({ username, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
      <button>login</button>
    </form>
  );
}

export default Login;
