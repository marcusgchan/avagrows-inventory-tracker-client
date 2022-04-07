import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import useLogin from "../contexts/UserContext";
import styles from "./styles/Login.module.css";
import logo from "../imgs/logo.PNG";
import Input from "./Input";

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
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formInputs}>
            <label htmlFor="username" className={`${styles.fontStyles}`}>
              Username
            </label>
            <Input
              className={styles.textField}
              style={{ width: "100%" }}
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Input>
            <label htmlFor="password" className={`${styles.fontStyles}`}>
              Password
            </label>
            <Input
              className={styles.textField}
              style={{ width: "100%" }}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </div>
          <button className={`${styles.fontStyles} ${styles.btn}`}>
            login
          </button>
        </form>
      </section>
    </section>
  );
}

export default Login;
