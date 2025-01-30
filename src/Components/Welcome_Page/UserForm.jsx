/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/display-name */
import { useRef, useState } from 'react';
import { ReactComponent as MainIcon } from "../../assets/Main_Icon.jsx";
import Input from '../Input/Input.jsx';
import user_handeler from '../../util/user_handler.js';

export default function () {
    const [isLogin, setIsLogin] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState("");
    let confirnPasswordStyle = "";
    const username_email = useRef("");
    const password = useRef("");
    const username = useRef("");
    function handleSubmit(event) {
        // event.preventDefault();
        if (event.target.checkValidity()) {
            if (isLogin && (username_email.current.value != "" && password.current.value != "")) {
                console.log(username_email.current.value, password.current.value);
                user_handeler.login_or_register(username_email.current.value, password.current.value, isLogin);
            }
            else if (username_email.current.value != "" && password.current.value != "" && username.current.value != "" && confirmPassword == password.current.value) {
                console.log(username_email.current.value, password.current.value);
                user_handeler.login_or_register(username_email.current.value, password.current.value, isLogin);
            }
        }
    }
    function handleConfirmPasswordChange(event) {
        setConfirmPassword(event.target.value);
    }
    if (confirmPassword != password.current.value && !isLogin) {
        confirnPasswordStyle = "bg-red-100";
    }
    if (password.current.value != "" && confirmPassword == password.current.value && !isLogin) {
        confirnPasswordStyle = "bg-green-100";
    }
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="border rounded-md shadow-sm flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <MainIcon className="justify-start" />
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        {!isLogin && <Input ref={username} htmlFor="username" label="Username" id="username" name="username" type="text" required autoComplete="username" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />}
                        <Input ref={username_email} htmlFor="email" label={isLogin?"Username/Email":"Email"} id="email" name="email" type={`${isLogin ? "text" : "email"}`} required autoComplete="email" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    {isLogin && <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>}
                                </div>
                            </div>
                            <Input ref={password} htmlFor="password" divStyle="mt-2 relative" inputType="password" isPassword={true} id="password" name="password" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        {!isLogin && <Input onChange={handleConfirmPasswordChange} htmlFor="confirm-password" label="Confirm Password" divStyle="mt-2 relative" inputType="password" isPassword={true} id="confirm-password" name="confirm-password" className={`p-2 block ${confirnPasswordStyle} w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`} />}
                        <div>
                            <button
                                onClick={(event) => handleSubmit(event)}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {isLogin ? "Sign in" : "Sign up"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-5 text-center text-sm text-gray-500">
                        {isLogin ? "New User ? " : "Already registered ? "}
                        <a onClick={() => setIsLogin(!isLogin)} href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            {isLogin ? "Register Here" : "Login"}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
