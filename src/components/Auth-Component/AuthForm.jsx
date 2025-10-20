import { useDispatch, useSelector } from "react-redux";
import CircleLoader from "../ui/Loading-Animations";
import { authActions, auth_service } from "../../strore/AuthSlice";
import styles from "./AuthForm.module.css";
import Modal from "../ui/Modal";
import { API_url } from "../../configuration/config";
import { useState } from "react";

const initialState = {
  username_email: "",
  username: "",
  email: "",
  password: "",
};

export default function AuthForm({ isLogin, setIsLogin }) {
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
    passwordMatched: false,
  });

  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const config = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    if (isLogin) {
      dispatch(auth_service(`${API_url}/api/Users/Login`, config));
    } else if (!isLogin && password.passwordMatched) {
      dispatch(auth_service(`${API_url}/api/Users/Register`, config));
    }
  }

  function handleChange(event) {
    setPassword((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  function handleBlur() {
    if (password.password === password.confirmPassword) {
      setPassword((prev) => {
        return { ...prev, passwordMatched: true };
      });
    } else {
      setPassword((prev) => {
        return { ...prev, passwordMatched: false };
      });
    }
  }
  if (error) {
    console.error(error);
  }
  return (
    <>
      {error && (
        <Modal
          isOpen={error != null}
          callBack={() => dispatch(authActions.setError(null))}
        >
          <p>{error}</p>
        </Modal>
      )}
      <form onSubmit={handleSubmit} className={styles.userForm}>
        <h1
          className={`${styles.formHeading} ${
            isLogin ? "text-[#4c6ef5]" : "text-[#7950f2]"
          }`}
        >
          {isLogin ? "Login" : "Register"}
        </h1>

        <div className={styles.fields}>
          <div>
            <label htmlFor={`${isLogin ? "username_email" : "username"}`}>
              {isLogin ? "Username/Email" : "Username"}
              <span></span>
            </label>
            <input
              name={`${isLogin ? "username_email" : "username"}`}
              id={`${isLogin ? "username_email" : "username"}`}
              type="text"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="email">Email</label>
              <input name="email" id="email" type="email" required />
            </div>
          )}

          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className={!password.passwordMatched ? styles.mismatch : ""}
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                required
                onChange={(e) => handleChange(e)}
                onBlur={handleBlur}
              />
            </div>
          )}
        </div>

        <div className={styles.actions}>
          <p onClick={() => setIsLogin((prev) => !prev)}>
            {isLogin ? "Register" : "Login"}
          </p>
          <button
            disabled={isLoading}
            className={`${isLogin ? "bg-[#91a7ff]" : "bg-[#b197fc]"}`}
          >
            <span className={`${isLoading ? "opacity-50" : "opacity-100"}`}>
              {isLogin ? "Login" : "Register"}
            </span>
            {isLoading && (
              <div className=" w-full absolute inset-0 flex items-center justify-center">
                <CircleLoader width="30" height="30" />
              </div>
            )}
          </button>
        </div>
      </form>
    </>
  );
}
