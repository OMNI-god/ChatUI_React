export default function AuthForm({ isLogin, setIsLogin }) {
  return (
    <form className="m-3 w-4/6 bg-slate-100 p-2 rounded-md shadow-lg">
      <h1 className="font-extrabold h- text-purple-500 m-2">
        {isLogin ? "Login" : "Register"}
      </h1>
      <div className="m-2 flex-col flex">
        <label className="mb-1" htmlFor={`${isLogin?"username_email":"username"}`}>
          {`${isLogin?"Username/Email":"Username"}`}
        </label>
        <input
          name={`${isLogin?"username_email":"username"}`}
          id="username"
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
        <p onClick={() => setIsLogin((prev) => !prev)}>
          {isLogin ? "Register" : "Login"}
        </p>
        <button className="p-2 bg-blue-600 rounded-md shadow-slate-100 text-white hover:bg-blue-400">
          {isLogin?"Login":"Register"}
        </button>
      </div>
    </form>
  );
}
