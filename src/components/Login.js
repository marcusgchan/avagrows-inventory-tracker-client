import { useState } from "react";
import userServices from "../services/userServices";
import styles from "./styles/Login.module.css";

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
    <body>
        <section className={styles.loginSection}>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
                <input
                    className={styles.textField}
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            <label htmlFor="password">Password:</label>
                <input
                    className={styles.textField}
                    type="text"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            <button>login</button>
        </form>
        </section>    
    </body>
    
  );
}

export default Login;
