import { forwardRef, useState } from 'react';

const Input=forwardRef(function ({ lable, isPassword, inputType, divStyle, htmlFor, ...props },ref) {
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    return <div className={divStyle}>
        <label htmlFor={htmlFor} className="text-left block text-sm font-medium leading-6 text-gray-900">
            {lable}
        </label>
        <div className="mt-2">
            <input ref={ref} type={isPassword && showPassword ? "text": inputType}
                {...props}
            />
            {isPassword && <button
                type="button"
                onClick={handlePasswordToggle}
                className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
            >
                {showPassword ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5 text-gray-500"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12c0 0 3.5 6 7.5 6s7.5-6 7.5-6-3.5-6-7.5-6S4.5 12 4.5 12z" />
                        <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5 text-gray-500"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12c0 0 3.5 6 7.5 6s7.5-6 7.5-6-3.5-6-7.5-6S4.5 12 4.5 12z" />
                    </svg>
                )}
            </button>}
        </div>
    </div>
});
export default Input;