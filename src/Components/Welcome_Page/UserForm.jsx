/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/display-name */
import { useContext, useRef, useState } from "react";
import { ReactComponent as MainIcon } from "../../assets/Main_Icon.jsx";
import Input from "../Input/Input.jsx";
import user_handeler from "../../util/user_handler.js";
import { RotatingLines } from "react-loader-spinner";
import userContext from "../../util/context.js";
import Modal from "../Modal/Modal.jsx";

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export default function () {
    const [isLogin, setIsLogin] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    let confirnPasswordStyle = "";
    let errorText = "";
    const username_email = useRef("");
    const password = useRef("");
    const username = useRef("");
    const { user, setUser } = useContext(userContext);

    function handleSubmit(event) {
        event.preventDefault();

        if (!event.target.checkValidity()) return;

        const emailOrUsername = username_email.current.value;
        const pwd = password.current.value;
        const uname = username.current.value;

        if (isLogin && emailOrUsername && pwd) {
            setLoading(true);
            user_handeler
                .login_or_register(emailOrUsername, pwd, true)
                .then((response) => {
                    if (response.httpCode === 200) {
                        setUser({
                            ...user,
                            isLogin: true,
                            username: !emailOrUsername.match(regex)
                                ? emailOrUsername
                                : response.payload.userName,
                            user_email: emailOrUsername.match(regex)
                                ? emailOrUsername
                                : response.payload.userEmail,
                            connectionID: response.payload.connectionID,
                        });
                        setErrorText("");
                    } else {
                        setUser({ ...user, isLogin: false });
                        setErrorText(response.message);
                    }
                })
                .catch((err) => {
                    console.error("Login Error:", err);
                    setErrorText("Login failed. Try again.");
                })
                .finally(() => setLoading(false));
        } else if (!isLogin && emailOrUsername && pwd && uname && confirmPassword === pwd) {
            setLoading(true);
            user_handeler
                .login_or_register(emailOrUsername, pwd, false)
                .then((response) => {
                    if (response.httpCode === 200) {
                        setUser({
                            ...user,
                            isLogin: true,
                            username: response.payload.userName,
                            user_email: response.payload.userEmail,
                            connectionID: response.payload.connectionID,
                        });
                        setErrorText("");
                    } else {
                        setUser({ ...user, isLogin: false });
                        setErrorText(response.message);
                    }
                })
                .catch((err) => {
                    console.error("Register Error:", err);
                    setErrorText("Registration failed.");
                })
                .finally(() => setLoading(false));
        }
    }

    function handleConfirmPasswordChange(event) {
        setConfirmPassword(event.target.value);
    }

    if (confirmPassword && confirmPassword !== password.current.value && !isLogin) {
        confirnPasswordStyle = "bg-red-100";
    } else if (confirmPassword === password.current.value && !isLogin) {
        confirnPasswordStyle = "bg-green-100";
    }
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Modal errorText={errorText} />
            <div className="border rounded-md shadow-sm flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <MainIcon className="justify-start" />
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        {!isLogin && (
                            <Input
                                ref={username}
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
                            ref={username_email}
                            htmlFor="email"
                            label={isLogin ? "Username/Email" : "Email"}
                            id="email"
                            name="email"
                            type={`${isLogin ? "text" : "email"}`}
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
                                <div className="text-sm">
                                    {isLogin && (
                                        <a
                                            href="#"
                                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                                        >
                                            Forgot password?
                                        </a>
                                    )}
                                </div>
                            </div>
                            <Input
                                ref={password}
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
                                className={`p-2 block ${confirnPasswordStyle} w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            />
                        )}
                        <div>
                            <button
                                {...{ disabled: loading }}
                                onClick={(event) => handleSubmit(event)}
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
                        {isLogin ? "New User ? " : "Already registered ? "}
                        <a
                            onClick={() => setIsLogin(!isLogin)}
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            {isLogin ? "Register Here" : "Login"}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
