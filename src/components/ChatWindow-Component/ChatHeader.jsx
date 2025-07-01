export default function ChatHeader({ user }) {
  return (
    <>
      {user && (
        <nav className="flex items-center border shadow-sm rounded-md p-1 bg-stone-100">
          <img
            src={user.profile_pic}
            alt={user.sender}
            className="w-12 h-12 object-contain rounded-full cursor-pointer"

          />
          <div className="flex justify-between px-2 min-w-0 w-full">
            <p className="font-bold">{user.sender}</p>
            <p>3 dot</p>
          </div>
        </nav>
      )}
    </>
  );
}
