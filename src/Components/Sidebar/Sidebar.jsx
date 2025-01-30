/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import chats from "../../util/chats";
import Input from "../Input/Input";
import Chat from "./Chat";

export default function Sidebar({ onSelect, isSelected }) {
    const [searchValue, setSearchValue] = useState(""); // State for search input
    const [chat, setChat] = useState(chats);

    // Filter chats based on searchValue
    useEffect(() => {
        const timer = setTimeout(() => {
            setChat(chats.filter((chat) => chat.sender.toLowerCase().includes(searchValue.toLowerCase())));
        }, 300);
        return () => clearTimeout(timer);
    }, [searchValue]);

    // Update search value on input change
    function handleSearchChange(event) {
        setSearchValue(event.target.value);
    }

    return (
        <div className="flex flex-col h-screen min-w-[33.33%] max-w-[33.33%] bg-gray-100 border-r">
            {/* Header */}
            <div className="h-16 flex items-center justify-between p-4 bg-gray-200 border-b">
                <div className="font-bold text-lg">Chats</div>
            </div>
            {/* Search */}
            <Input
                value={searchValue} // Controlled component
                onChange={handleSearchChange} // Handle input change
                onKeyDown={(e) => e.key === "Enter" && setSearchValue(e.target.value)} // Handle "Enter" key press
                htmlFor="search"
                divStyle="p-4 rounded-md"
                id="search"
                type="text"
                placeholder="Search or start a new chat"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            {/* Chat List */}
            <div className="flex-1 overflow-x-hidden">
                {chat.map((chat) => (
                    <Chat key={chat.id} isSelected={isSelected} onSelect={onSelect} {...chat} />
                ))}
            </div>
        </div>
    );
}
