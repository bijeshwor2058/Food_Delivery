import React from "react";
import styles from "./singnup.module.css";
import { Auth, googleProvider } from "../../config/firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onInputUser = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));


  };
  const OnClicksignupwithGoogle = async () => {
    try {
      const data = await signInWithPopup(Auth, googleProvider);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  
  // setInterval(() => {
  //   navigate('/login')
  // }, 3000);

  const onClickRegister = async () => {
    try {
      const data = await createUserWithEmailAndPassword(Auth, email, password);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form>
      <div className={styles.Sign_container}>
        <div className={styles.signup_pages}>
          <h2>Register</h2>
          <div className={styles.input}>
            <label htmlFor="">Name:</label>
            <input onChange={onInputUser} id="name" type="text" required />
          </div>

          <div className={styles.input}>
            <label htmlFor="">Email:</label>
            <input onChange={onInputUser} id="email" type="email" required />
          </div>

          <div className={styles.input}>
            <label htmlFor="">Password:</label>
            <input
              onChange={onInputUser}
              id="password"
              type="password"
              required
            />
          </div>
        
          <button onClick={onClickRegister} className={styles.registerBtn}>
            Register
          </button>

          <button
            onClick={OnClicksignupwithGoogle}
            className={styles.registerBtn}
          >
            Signup With Google
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
