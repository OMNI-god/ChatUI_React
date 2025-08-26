import { useDispatch, useSelector } from "react-redux";
import CircleLoader from "../ui/Loading-Animations";
import { authActions, user_service } from "../../strore/AuthSlice";
import styles from "./AuthForm.module.css";

const initialState = {
  username_email: "",
  username: "",
  email: "",
  password: "",
};

export default function AuthForm({ isLogin, setIsLogin }) {
  const isLoading = useSelector((state) => state.auth.isLoading);
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
    dispatch(user_service("https://localhost:7038/api/Users/Login", config));
  }

  return (
    <form onSubmit={handleSubmit} className={styles.userForm}>
      <h1 className={styles.formHeading}>{isLogin ? "Login" : "Register"}</h1>

      <div className={styles.fields}>
        <div>
          <label htmlFor={`${isLogin ? "username_email" : "username"}`}>
            {isLogin ? "Username/Email" : "Username"}
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
          <input name="password" id="password" type="password" required />
        </div>

        {!isLogin && (
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              required
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
            <div className="w-full absolute inset-0 flex items-center justify-center">
              <CircleLoader width="30" height="30" />
            </div>
          )}
        </button>
      </div>
    </form>
  );
}
