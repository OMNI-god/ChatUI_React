
const sender_div_out_css="flex justify-end items-center mb-4";
const sender_div_in_css="bg-indigo-600 text-white p-2 rounded-md max-w-3/4";

const receiver_div_out_css="flex justify-start items-center mb-4";
const receiver_div_in_css="bg-gray-200 p-2 rounded-md max-w-3/4";

export default function Texts({chats}) {  
return(
    <>
    {chats.map((msg, index) => (
        <div key={index} className={msg.isSender?sender_div_out_css:receiver_div_out_css}>
            <div className={msg.isSender?sender_div_in_css:receiver_div_in_css}>
            <p>{msg.text}</p>
            <p className="text-right text-xs/[2px] pt-1.5 text-">{msg.time}</p>
            </div>
        </div>
    ))}
    </>
)
}