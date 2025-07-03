import { useSelector } from "react-redux";
import CircleLoader from "../ui/Loading-Animations";
import { useActionState } from "react";

function auth(){
  
}

export default function AuthForm({ isLogin, setIsLogin }) {
  const isLoading = useSelector((state) => state.auth.isLoading);
  const[state,formAction]=useActionState(auth,{})
  return (
    <form action={formAction} className="m-3 w-4/6 bg-slate-100 p-2 rounded-md shadow-lg">
      <h1 className="font-extrabold h- text-purple-600 m-2">
        {isLogin ? "Login" : "Register"}
      </h1>
      <div className="m-2 flex-col flex">
        <label
          className="mb-1"
          htmlFor={`${isLogin ? "username_email" : "username"}`}
        >
          {`${isLogin ? "Username/Email" : "Username"}`}
        </label>
        <input
          name={`${isLogin ? "username_email" : "username"}`}
          id={`${isLogin ? "username_email" : "username"}`}
          className="p-2 rounded-md border border-collapse"
          type="text"
          required
        />
      </div>
      {!isLogin && (
        <div className="m-2 flex-col flex">
          <label className="mb-1" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            id="email"
            className="p-2 rounded-md border border-collapse"
            type="email"
            required
          />
        </div>
      )}
      <div className="m-2 flex-col flex">
        <label className="mb-1" htmlFor="password">
          Password
        </label>
        <input
          name="password"
          id="password"
          className="p-2 rounded-md border border-collapse"
          type="password"
          required
        />
      </div>
      {!isLogin && (
        <div className="m-2 flex-col flex">
          <label className="mb-1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            id="confirmPassword"
            className="p-2 rounded-md border border-collapse"
            type="password"
            required
          />
        </div>
      )}
      <div className="justify-between flex flex-1 m-2 items-center">
        <p
          className="font-bold text-purple-600 hover:text-purple-800 cursor-pointer"
          onClick={() => setIsLogin((prev) => !prev)}
        >
          {isLogin ? "Register" : "Login"}
        </p>
        <button
          disabled={isLoading}
          className={`relative p-2 bg-blue-600 rounded-md shadow-slate-100 text-white ${
            !isLoading && "hover:bg-blue-400"
          } overflow-hidden`}
        >
          {/* Text */}
          <span className={isLoading ? "opacity-50" : "opacity-100"}>
            {isLogin ? "Login" : "Register"}
          </span>

          {/* Overlay spinner */}
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
