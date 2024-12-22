import { useState } from 'react';
import { ReactComponent as MainIcon } from "../../assets/Main_Icon.jsx";
import Input from '../Input/Input.jsx';

export default function (props) {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className='flex items-center justify-center min-h-screen px-20'>
            <div className="border rounded-md shadow-sm flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <MainIcon className="justify-start" />
                    <h2 className="mt-0 text-start text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {props.Heading}
                    </h2>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <Input htmlFor="email" lable="Email" id="email" name="email" type="email" required autoComplete="email" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <Input htmlFor="password" divStyle="mt-2 relative" inputType="password" isPassword={true} id="password" name="password" required autoComplete="current-password" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        {!isLogin&&<Input divStyle="mt-3.5" lable="Confirm Password" inputType="password" id="confirm_password" name="password" required autoComplete="current-password" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {isLogin?"Sign in":"Sign up"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-5 text-center text-sm text-gray-500">
                        {isLogin ? "New User ? " : "Already registered ? "}
                        <a onClick={()=>setIsLogin(!isLogin)} href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            {isLogin?"Register Here":"Login"}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
