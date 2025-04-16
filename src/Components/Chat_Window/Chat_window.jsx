import { memo } from "react";
import ChatInput from "./ChatInput";
import Texts from "./Texts";

const Chat_window=memo(function Chat_window({ chat }) {
    return (
        <div className="flex flex-col flex-1 bg-gray-100">
            {/* Header */}
            <div className="max-h-16 flex items-center p-4 bg-gray-200 border-b">
                <img className="rounded-full object-cover w-12 h-12" src={chat.profile_pic} alt="profile pic" />
                <div className="font-bold text-2xl pl-2">{chat.sender}</div>
            </div>
            {/* Chat */}
            <div className="flex-1 overflow-y-auto p-4">
                <Texts chats={chat.chat} />
            </div>
            {/* Input */}
            <ChatInput />
        </div>
    );
});
export default Chat_window;