export default function UserChat({ user }) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
  <div className="flex-1 overflow-y-auto rounded-md bg-slate-100">
    {user.chat.map((value, idx) => (
      <div
        key={`message-${idx}`}
        className={`flex w-full p-2 ${value.isSender ? "justify-start" : "justify-end"}`}
      >
        <div
          className={`max-w-xs ${
            value.isSender ? "bg-blue-500 text-white" : "bg-green-500 text-white"
          } rounded-lg p-2`}
        >
          <p>{value.text}</p>
          <div className="flex justify-end">
            <p className="text-xs text-gray-200">{value.time}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  <textarea
    className="w-full border rounded-md resize-none p-2 overflow-y sc"
    placeholder="Type a message..."
  />
</div>

  );
}
