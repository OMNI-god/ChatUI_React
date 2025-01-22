import { useEffect, useRef, useState } from "react";
import chats from "../../util/chats";
import Input from "../Input/Input";
import Chat from "./Chat";

export default function Sidebar({ onSelect, isSelected }) {
    const searchParam = useRef("");
    const [chat, setChat] = useState(chats);
    function handleChatSelect(event) {

    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setChat(chats.filter((chat) => chat.sender.toLowerCase().includes(event.target.value.toLowerCase())));
        }, 300);
    })
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleChatSelect(event);
        }
    }
    return (
        <div className="flex flex-col h-screen min-w-[33.33%] max-w-[33.33%] bg-gray-100 border-r">
            {/* Header */}
            <div className="h-16 flex items-center justify-between p-4 bg-gray-200 border-b">
                <div className="font-bold text-lg">Chats</div>
            </div>
            {/* Search */}
            <Input onKeyDown={handleKeyDown} onChange={(event) => setTimeout(() => { handleChatSelect(event) }, 2000)} htmlFor="search" divStyle="p-4 rounded-md" id="search" type="text" placeholder="Search or start a new chat" className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600" />
            {/* Chat List */}
            <div className="flex-1 overflow-x-hidden">
                {chat.map((chat) => (
                    <Chat key={chat.id} isSelected={isSelected} onSelect={onSelect} {...chat} />
                ))}
            </div>
        </div>
    );
}
