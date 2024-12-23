export default function Chat_window() {
    return (
        <div className="flex flex-col flex-1 bg-gray-100">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gray-200 border-b">
                <div className="font-bold text-lg">John Doe</div>
            </div>
            {/* Chat */}
            <div className="flex-1 overflow-y-auto p-4">
                {/* Sender */}
                <div className="flex justify-end items-center mb-4">
                    <div className="bg-indigo-600 text-white p-2 rounded-md max-w-3/4">
                        Hey, how are you?
                    </div>
                </div>
                {/* Receiver */}
                <div className="flex justify-start items-center mb-4">
                    <div className="bg-gray-200 p-2 rounded-md max-w-3/4">
                        I'm good, thank you!
                    </div>
                </div>
                {/* Sender */}
                <div className="flex justify-end items-center mb-4">
                    <div className="bg-indigo-600 text-white p-2 rounded-md max-w-3/4">
                        Let's meet tomorrow!
                    </div>
                </div>
                {/* Receiver */}
                <div className="flex justify-start items-center mb-4">
                    <div className="bg-gray-200 p-2 rounded-md max-w-3/4">
                        Sure, I'll be there!
                    </div>
                </div>
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