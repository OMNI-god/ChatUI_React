import * as signalR from "@microsoft/signalr";
import { API_url } from "../configuration/config";

let connection = null;
const userId = localStorage.getItem("UserID");

export const startConnection = async (onMessageReceived, onConnectionId) => {
  connection = new signalR.HubConnectionBuilder()
    .withUrl(`${API_url}/chat?userId=${userId}`, {
      withCredentials: true,
    })
    .withAutomaticReconnect()
    .build();

  connection.on("ReceiveMessageAsync", (message) => {
    console.log("📩 Received:", message);
    if (onMessageReceived) onMessageReceived(message);
  });

  connection.on("ReceiveConnIDAsync", (connId) => {
    console.log("🔗 Connection ID:", connId);
    if (onConnectionId) onConnectionId(connId);
  });

  try {
    await connection.start();
    console.log("✅ SignalR connected.");
  } catch (err) {
    console.error("❌ SignalR connection failed:", err);
  }
};

export const stopConnection = async () => {
  if (connection) {
    await connection.stop();
    connection = null;
    console.log("stopped");
  }
};

export const sendMessage = async (to, from, msg) => {
  if (!connection) return;
  const jsonData = JSON.stringify({ to, from, msg });
  await connection.invoke("SendMessageToUserAsync", jsonData);
};
