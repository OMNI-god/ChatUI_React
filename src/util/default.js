import { useState } from "react";

const defaultConfig = {
    user_details: {
        user_email: "",
        username: "",
        connectionID: "",
        isLogin: false,
        chats: []
        
    }
}

export const URL_Cloud = "https://chatappv1-gyatf3b2evffcxga.centralindia-01.azurewebsites.net"
export const URL_Cloud_Oracle = "http://140.245.252.36:5002"
export const URL_local = "https://localhost:7038"

export default defaultConfig;