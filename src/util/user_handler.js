import { URL_Cloud } from "./default";
import { URL_local } from "./default";

const user_handler = {
    login_or_register: async (username, password, isLogin) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "username": username,
            "password": password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch(`${URL_local}/api/Users/${isLogin ? "Login" : "Register"}`, requestOptions);
            const result = await response.json();
            console.log(result);
            return Promise.resolve(result);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },
    getUser: async (eamil) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": eamil
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch(`${URL}/api/Users/GetUser"}`, requestOptions);
            const result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export default user_handler;