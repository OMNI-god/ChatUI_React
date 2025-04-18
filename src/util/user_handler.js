import { URL_Cloud, URL_local } from "./default";

const user_handler = {
    login_or_register: async (username, password, isLogin) => {
        const headers = { "Content-Type": "application/json" };
        const body = JSON.stringify({ username, password });

        try {
            const response = await fetch(
                `${URL_local}/api/Users/${isLogin ? "Login" : "Register"}`,
                { method: "POST", headers, body }
            );
            if (!response.ok) throw new Error("Failed to fetch");
            return await response.json();
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    },
    getUser: async (email) => {
        const headers = { "Content-Type": "application/json" };
        const body = JSON.stringify({ email });

        try {
            const response = await fetch(`${URL_local}/api/Users/GetUser`, {
                method: "POST",
                headers,
                body,
            });
            if (!response.ok) throw new Error("Failed to fetch");
            return await response.json();
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    },
};

export default user_handler;