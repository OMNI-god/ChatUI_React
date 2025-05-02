import { useContext, useRef, useState } from "react";
import { ReactComponent as MainIcon } from "../../assets/Main_Icon.jsx";
import Input from "../Input/Input.jsx";
import user_handler from "../../util/user_handler.js";
import { RotatingLines } from "react-loader-spinner";
import userContext from "../../util/context.js";
import Modal from "../Modal/Modal.jsx";

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export default function UserForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState("");
    const usernameEmailRef = useRef("");
    const passwordRef = useRef("");
    const usernameRef = useRef("");
    const dialogRef = useRef();
    const { user, setUser } = useContext(userContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!event.target.checkValidity()) return;

        const emailOrUsername = usernameEmailRef.current.value;
        const password = passwordRef.current.value;
        const username = usernameRef.current.value;

        if (isLogin && emailOrUsername && password) {
            await handleLogin(emailOrUsername, password);
        } else if (!isLogin && emailOrUsername && password && username && confirmPassword === password) {
            await handleRegister(emailOrUsername, password, username);
        } else {
            setErrorText("Please fill all the fields correctly");
            dialogRef.current.open();
        }
    };

    const handleLogin = async (emailOrUsername, password) => {
        setLoading(true);
        try {
            const response = await user_handler.login_or_register(emailOrUsername, password, true);
            if (response.httpCode === 200) {
                setUser({
                    ...user,
                    isLogin: true,
                    username: emailOrUsername.match(regex) ? response.payload.userName : emailOrUsername,
                    user_email: emailOrUsername.match(regex) ? emailOrUsername : response.payload.userEmail,
                    connectionID: response.payload.connectionID,
                });
                sessionStorage.setItem("refreshToken", response.payload.refreshToken);
            } else {
                setErrorText("Login failed. Please try again.");
                dialogRef.current.open();
            }
        } catch (error) {
            console.error("Login Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (emailOrUsername, password, username) => {
        setLoading(true);
        try {
            const response = await user_handler.login_or_register(emailOrUsername, password, false);
            if (response.httpCode === 200) {
                setUser({
                    ...user,
                    isLogin: true,
                    username: response.payload.userName,
                    user_email: response.payload.userEmail,
                    connectionID: response.payload.connectionID,
                });
            } else {
                setErrorText("Registration failed. Please try again.");
                dialogRef.current.open();
            }
        } catch (error) {
            console.error("Register Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const confirmPasswordStyle =
        confirmPassword && confirmPassword !== passwordRef.current.value && !isLogin
            ? "bg-red-100"
            : confirmPassword === passwordRef.current.value && !isLogin
                ? "bg-green-100"
                : "";

    return (
        <div className="flex items-center justify-center  min-h-screen">
            <Modal errorText={errorText} ref={dialogRef} />
            <div className="border sm:w-full md:w:w-[33%] lg:w-[25%] rounded-md shadow-sm flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <MainIcon className="justify-start" />
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {!isLogin && (
                            <Input
                                ref={usernameRef}
                                htmlFor="username"
                                label="Username"
                                id="username"
                                name="username"
                                type="text"
                                required
                                autoComplete="username"
                                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        )}
                        <Input
                            ref={usernameEmailRef}
                            htmlFor="email"
                            label={isLogin ? "Username/Email" : "Email"}
                            id="email"
                            name="email"
                            type={isLogin ? "text" : "email"}
                            required
                            autoComplete="email"
                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                                {isLogin && (
                                    <a
                                        href="#"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot password?
                                    </a>
                                )}
                            </div>
                            <Input
                                ref={passwordRef}
                                htmlFor="password"
                                divStyle="mt-2 relative"
                                inputType="password"
                                isPassword={true}
                                id="password"
                                name="password"
                                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {!isLogin && (
                            <Input
                                onChange={handleConfirmPasswordChange}
                                htmlFor="confirm-password"
                                label="Confirm Password"
                                divStyle="mt-2 relative"
                                inputType="password"
                                isPassword={true}
                                id="confirm-password"
                                name="confirm-password"
                                className={`p-2 block ${confirmPasswordStyle} w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            />
                        )}
                        <div>
                            <button
                                disabled={loading}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {loading ? (
                                    <RotatingLines
                                        width="24"
                                        height="24"
                                        strokeColor="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                    />
                                ) : isLogin ? (
                                    "Sign in"
                                ) : (
                                    "Sign up"
                                )}
                            </button>
                        </div>
                    </form>

                    <p className="mt-5 text-center text-sm text-gray-500">
                        {isLogin ? "New User? " : "Already registered? "}
                        <a
                            onClick={() => setIsLogin(!isLogin)}
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
                        >
                            {isLogin ? "Register Here" : "Login"}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}