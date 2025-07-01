export default function ChatList({ chats, selectUser }) {
  return (
    <ul className="flex-1 overflow-y-auto">
      {chats.map((chat) => (
        <li key={`chat-${chat.id}`} onClick={() => selectUser(chat)}>
          <div className="flex p-2 my-1 border rounded-md shadow-sm bg-slate-200 hover:bg-slate-300 cursor-pointer">
            <img
              className="rounded-full w-12 h-12 object-cover"
              src={chat.profile_pic}
              alt={chat.sender}
            />
            <div className="pl-2 flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <p className="text-base font-semibold truncate">
                  {chat.sender}
                </p>
                <p className="text-green-500 text-xs font-medium whitespace-nowrap">
                  {chat.chat[chat.chat.length - 1]["time"]}
                </p>
              </div>
              <p className="truncate text-sm text-gray-700">
                {chat.chat[chat.chat.length - 1]["text"]}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
