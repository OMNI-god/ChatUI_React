const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.shiftKey) {
        // Allow newline in the contentEditable div
        return;
      }
      // Prevent default Enter behavior (creating a newline)
      event.preventDefault();

      // Send the message
    //   const message = messageRef.current.innerText.trim();
    //   if (message) {
    //     messageRef.current.innerText = ""; // Clear the input
    //   }
    }
  };

  const handleSendClick = () => {
    // const message = messageRef.current.innerText.trim();
    // if (message) {
    //   messageRef.current.innerText = ""; // Clear the input
    // }
  };
export default function ChatInput() {
    return (<div className="flex items-center p-4 bg-gray-200 border-t">
        <div
            role="textbox"
            contentEditable
            onKeyDown={handleKeyDown}
            className="max-h-24 overflow-auto flex-1 p-2 rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-left break-words"
        ></div>
        <button onClick={handleSendClick} className="ml-2 bg-indigo-600 text-white p-2 rounded-md">Send</button>
    </div>);
}