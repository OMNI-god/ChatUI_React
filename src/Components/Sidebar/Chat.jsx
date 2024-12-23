export default function Chat({name, message, time}) {
return <button
className="w-full flex items-center p-4 hover:bg-gray-200 cursor-pointer">
<div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
    {name[0]}
</div>
<div className="ml-4 flex-1">
    <div className="flex justify-between items-center">
        <h4 className="font-bold text-gray-800">{name}</h4>
        <span className="text-sm text-gray-500">{time}</span>
    </div>
    <p className="text-sm text-gray-600 truncate">{message}</p>
</div>
</button>
}