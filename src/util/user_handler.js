import { URL_Cloud, URL_Cloud_oracle, URL_local } from "./default";

const user_handler = {
  login_or_register: async (username, password, isLogin) => {
    const headers = { "Content-Type": "application/json" };
    const body = JSON.stringify({ username, password });

    try {
      const response = await fetch(
        `${URL_Cloud_oracle}/api/Users/${isLogin ? "Login" : "Register"}`,
        { method: "POST", headers, body }
      );
      // if (!response.ok) throw new Error("Failed to fetch");
      return await response.json();
    } catch (error) {
      console.log("Error:", error);
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
            // if (!response.ok) throw new Error("Failed to fetch");
            return await response.json();
        } catch (error) {
            console.log("Error:", error);
        }
    },
};

export default user_handler;
