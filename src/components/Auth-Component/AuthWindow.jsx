import { useState } from "react";
import AuthForm from "./AuthForm";

export default function AuthWindow() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-screen h-screen flex overflow-hidden relative">
      <div
        className={`bg-blue-200 w-1/2 h-full absolute top-0 transition-transform duration-700 ${
          isLogin ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={`bg-green-200 w-1/2 h-full absolute top-0 right-0 flex justify-center items-center transition-transform duration-700 ${
          isLogin ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
    </div>
  );
}
