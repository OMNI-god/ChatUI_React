import profile_pic from "../assets/image.png";

const chats = [
    {
        id: 1,
        sender: "John Hoe",
        profile_pic: profile_pic,
        chat: [
            { text: "Hey, how are you?", time: "12:00 PM", isSender: false },
            { text: "I'm good, what about you?", time: "12:01 PM", isSender: true },
            { text: "I'm good too", time: "12:02 PM", isSender: false },
            { text: "How's your day going?", time: "12:03 PM", isSender: true },
            { text: "It's going great", time: "12:04 PM", isSender: false },
            { text: "That's good to hear", time: "12:05 PM", isSender: true }
        ]
    },
    {
        id: 2,
        sender: "Alice Smith",
        profile_pic: profile_pic,
        chat: [
            { text: "Hey, are you free today?", time: "9:00 AM", isSender: false },
            { text: "Yes, I am. What's up?", time: "9:01 AM", isSender: true },
            { text: "Can we meet for coffee?", time: "9:02 AM", isSender: false },
            { text: "Sure, what time?", time: "9:03 AM", isSender: true },
            { text: "Around 3 PM", time: "9:04 AM", isSender: false }
        ]
    },
    {
        id: 3,
        sender: "Tom Brown",
        profile_pic: profile_pic,
        chat: [
            { text: "Did you finish the report?", time: "10:00 AM", isSender: false },
            { text: "Almost done, just need a few minutes.", time: "10:01 AM", isSender: true },
            { text: "Alright, let me know once you're done. its your boi badsha", time: "10:02 AM", isSender: false }
        ]
    },
    {
        id: 4,
        sender: "Jane Doe",
        profile_pic: profile_pic,
        chat: [
            { text: "Can you send me the files?", time: "8:00 AM", isSender: false },
            { text: "Sure, give me a moment.", time: "8:01 AM", isSender: true },
            { text: "Thanks!", time: "8:02 AM", isSender: false }
        ]
    },
    {
        id: 5,
        sender: "Bob Marley",
        profile_pic: profile_pic,
        chat: [
            { text: "What's your plan for the weekend?", time: "2:00 PM", isSender: false },
            { text: "Nothing much, just relaxing.", time: "2:01 PM", isSender: true },
            { text: "Want to hang out?", time: "2:02 PM", isSender: false }
        ]
    },
    {
        id: 6,
        sender: "Sarah Lee",
        profile_pic: profile_pic,
        chat: [
            { text: "Are you joining the meeting?", time: "11:00 AM", isSender: false },
            { text: "Yes, I'll be there.", time: "11:01 AM", isSender: true }
        ]
    },
    {
        id: 7,
        sender: "Mike Tyson",
        profile_pic: profile_pic,
        chat: [
            { text: "Have you seen the news?", time: "7:00 AM", isSender: false },
            { text: "Not yet, what happened?", time: "7:01 AM", isSender: true },
            { text: "It's all over the headlines.", time: "7:02 AM", isSender: false }
        ]
    },
    {
        id: 8,
        sender: "Emma Watson",
        profile_pic: profile_pic,
        chat: [
            { text: "Can you help me with this task?", time: "3:00 PM", isSender: false },
            { text: "Sure, let me check.", time: "3:01 PM", isSender: true },
            { text: "Thanks so much!", time: "3:02 PM", isSender: false }
        ]
    },
    {
        id: 9,
        sender: "Liam Neeson",
        profile_pic: profile_pic,
        chat: [
            { text: "Have you completed your assignment?", time: "5:00 PM", isSender: false },
            { text: "Yes, I submitted it this morning.", time: "5:01 PM", isSender: true },
            { text: "Great job!", time: "5:02 PM", isSender: false }
        ]
    },
    {
        id: 10,
        sender: "Sophia Loren",
        profile_pic: profile_pic,
        chat: [
            { text: "Are you available for a quick call?", time: "6:00 PM", isSender: false },
            { text: "Yes, let me call you in a minute.", time: "6:01 PM", isSender: true },
            { text: "Alright, talk soon!", time: "6:02 PM", isSender: false }
        ]
    }
];

export default chats;
