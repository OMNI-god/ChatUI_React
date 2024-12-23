import Input from "../Input/Input";
import Chat from "./Chat";

export default function Sidebar() {
    const chats = [
        { id: 1, name: "John Doe", message: "Hey, how are you?", time: "12:30 PM" },
        { id: 2, name: "Jane Smith", message: "Let's meet tomorrow!", time: "11:15 AM" },
        { id: 3, name: "Alice Brown", message: "Great job on the project!", time: "10:45 AM" },
    ];

    return (
        <div className="flex flex-col h-screen w-80 bg-gray-100 border-r">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gray-200 border-b">
                <div className="font-bold text-lg">Chats</div>
            </div>
            {/* Search */}
            <Input htmlFor="search" divStyle="p-4 rounded-md" id="search" type="text" placeholder="Search or start a new chat" className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600" />

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto">
                {chats.map((chat) => (
                    <Chat key={chat.id} {...chat} />
                ))}
            </div>
        </div>
    );
}
