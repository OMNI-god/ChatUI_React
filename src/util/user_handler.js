const user_handler = {
    login_or_register: async (username, password,isLogin) => {
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
            const response = await fetch(`https://chatappv1-gyatf3b2evffcxga.centralindia-01.azurewebsites.net/api/Users/${isLogin?"Login":"Register"}`, requestOptions);
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