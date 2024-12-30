import Texts from "./Texts";
import chats from "../../util/chats";

export default function Chat_window() {
    return (
        <div className="flex flex-col flex-1 bg-gray-100">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gray-200 border-b">
                <div className="font-bold text-lg">{chats.sender}</div>
            </div>
            {/* Chat */}
            <div className="flex-1 overflow-y-auto p-4">
                <Texts chats={chats.chat} />
            </div>
            {/* Input */}
            <div className="flex items-center p-4 bg-gray-200 border-t">
                <div
                    role="textbox"
                    contentEditable
                    className="max-h-24 overflow-auto flex-1 p-2 rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-left break-words"
                ></div>
                <button className="ml-2 bg-indigo-600 text-white p-2 rounded-md">Send</button>
            </div>
        </div>
    );
}