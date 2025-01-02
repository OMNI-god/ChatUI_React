export default function Chat({ sender, chat, onSelect, id, isSelected }) {
    let selected = false;
    if (isSelected === id) selected = true;
    console.log(selected);
    return <button onClick={() => onSelect(id)}
        className={`${selected?"bg-gray-300":""} w-full flex items-center p-4 hover:bg-gray-400 cursor-pointer`}>
        <div className="h-12 min-w-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
            {sender[0]}
        </div>
        <div className="ml-4 flex-1">
            <div className="flex justify-between items-center">
                <h4 className="font-bold text-gray-800">{sender}</h4>
                <span className="text-sm text-gray-500">{chat[chat.length - 1].time}</span>
            </div>
            <p className="text-sm text-gray-600 overflow-hidden whitespace-nowrap text-justify">{chat[chat.length - 1].text}</p>
        </div>
    </button>
}