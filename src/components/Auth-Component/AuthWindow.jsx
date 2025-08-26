import { useState } from "react";
import AuthForm from "./AuthForm";
import styles from "./AuthWindow.module.css";

export default function AuthWindow() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.container}>
      {/* Left Panel */}
      <div
        className={`${styles.leftPanel} ${
          isLogin ? styles.leftLogin : styles.leftSignup
        } ${styles.slide}`}
      ></div>

      {/* Right Panel with fixed form */}
      <div
        className={`${styles.rightPanel} ${
          isLogin ? styles.rightLogin : styles.rightSignup
        }`}
      >
        <div className={`${styles.formWrapper} ${styles.formVisible}`}>
          <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />
        </div>
      </div>
    </div>
  );
}
