import ChatHeader from "./ChatHeader";
import UserChat from "./UserChat";

export default function ChatWindow({ user }) {
  return (
    <>
      {user && (
        <>
          <ChatHeader user={user} />
          <UserChat user={user} />
        </>
      )}
      {!user&&<div className="flex bg-slate-200 rounded-md items-center justify-center min-w-0 w-full h-full"><p>No chet selected</p></div>}
    </>
  );
}
