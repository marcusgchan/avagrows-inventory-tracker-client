import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import useLogin from "../contexts/UserContext";
import styles from "./styles/Login.module.css";
import logo from "../imgs/logo.PNG";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useLogin();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    userServices
      .login({ username, password })
      .then((res) => {
        console.log("test2", res);
        setUser(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className={styles.background}>
      <section className={styles.introText}>
        <h1>Login to the Avagrows Inventory Tracker</h1>
        <img src={logo} alt="" className={styles.logo}></img>
      </section>
      <section className={styles.loginSection}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className={`${styles.fontStyles}`}>
            Username
          </label>
          <input
            className={styles.textField}
            autoComplete="off"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className={`${styles.fontStyles}`}>
            Password
          </label>
          <input
            className={styles.textField}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={`${styles.fontStyles} ${styles.btn}`}>
            login
          </button>
        </form>
      </section>
    </section>
  );
}

export default Login;
