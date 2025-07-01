const users = [
    { id: 1, name: "Emily", avatar: "https://i.pravatar.cc/150?img=5" },
    { id: 2, name: "David", avatar: "https://i.pravatar.cc/150?img=6" },
];

const messages = [
    {
        id: 1,
        sender: "John Hoe",
        profile_pic: "https://i.pravatar.cc/150?img=1",
        chat: [
            { text: "Hey, how are you?", time: "12:00 PM", isSender: false },
            { text: "I'm good, what about you?", time: "12:01 PM", isSender: true },
            { text: "I'm good too", time: "12:02 PM", isSender: false },
            { text: "How's your day going?", time: "12:03 PM", isSender: true },
            { text: "It's going great", time: "12:04 PM", isSender: false },
            { text: "That's good to hear", time: "12:05 PM", isSender: true },
        ],
    },
    {
        id: 2,
        sender: "Alice Smith",
        profile_pic: "https://i.pravatar.cc/150?img=2",
        chat: [
            { text: "Hey, are you free today?", time: "9:00 AM", isSender: false },
            { text: "Yes, I am. What's up?", time: "9:01 AM", isSender: true },
            { text: "Can we meet for coffee?", time: "9:02 AM", isSender: false },
            { text: "Sure, what time?", time: "9:03 AM", isSender: true },
            { text: "Around 3 PM", time: "9:04 AM", isSender: false },
        ],
    },
    {
        id: 3,
        sender: "Tom Brown",
        profile_pic: "https://i.pravatar.cc/150?img=3",
        chat: [
            { text: "Did you finish the report?", time: "10:00 AM", isSender: false },
            {
                text: "Almost done, just need a few minutes.",
                time: "10:01 AM",
                isSender: true,
            },
            {
                text: "Alright, let me know once you're done. its your boi badsha",
                time: "10:02 AM",
                isSender: false,
            },
        ],
    },
    {
        id: 4,
        sender: "Jane Doe",
        profile_pic: "https://i.pravatar.cc/150?img=4",
        chat: [
            { text: "Can you send me the files?", time: "8:00 AM", isSender: false },
            { text: "Sure, give me a moment.", time: "8:01 AM", isSender: true },
            { text: "Thanks!", time: "8:02 AM", isSender: false },
        ],
    },
    {
        id: 5,
        sender: "Bob Marley",
        profile_pic: "https://i.pravatar.cc/150?img=5",
        chat: [
            {
                text: "What's your plan for the weekend?",
                time: "2:00 PM",
                isSender: false,
            },
            { text: "Nothing much, just relaxing.", time: "2:01 PM", isSender: true },
            { text: "Want to hang out?", time: "2:02 PM", isSender: false },
        ],
    },
    {
        id: 6,
        sender: "Sarah Lee",
        profile_pic: "https://i.pravatar.cc/150?img=6",
        chat: [
            {
                text: "Are you joining the meeting?",
                time: "11:00 AM",
                isSender: false,
            },
            { text: "Yes, I'll be there.", time: "11:01 AM", isSender: true },
        ],
    },
    {
        id: 7,
        sender: "Mike Tyson",
        profile_pic: "https://i.pravatar.cc/150?img=7",
        chat: [
            { text: "Have you seen the news?", time: "7:00 AM", isSender: false },
            { text: "Not yet, what happened?", time: "7:01 AM", isSender: true },
            {
                text: "It's all over the headlines.",
                time: "7:02 AM",
                isSender: false,
            },
        ],
    },
    {
        id: 8,
        sender: "Emma Watson",
        profile_pic: "https://i.pravatar.cc/150?img=8",
        chat: [
            {
                text: "Can you help me with this task?",
                time: "3:00 PM",
                isSender: false,
            },
            { text: "Sure, let me check.", time: "3:01 PM", isSender: true },
            { text: "Thanks so much!", time: "3:02 PM", isSender: false },
        ],
    },
    {
        id: 9,
        sender: "Liam Neeson",
        profile_pic: "https://i.pravatar.cc/150?img=9",
        chat: [
            {
                text: "Have you completed your assignment?",
                time: "5:00 PM",
                isSender: false,
            },
            {
                text: "Yes, I submitted it this morning.",
                time: "5:01 PM",
                isSender: true,
            },
            { text: "Great job!", time: "5:02 PM", isSender: false },
        ],
    },
    {
        id: 10,
        sender: "Sophia Loren",
        profile_pic: "https://i.pravatar.cc/150?img=10",
        chat: [
            {
                text: "Are you available for a quick call?",
                time: "6:00 PM",
                isSender: false,
            },
            {
                text: "Yes, let me call you in a minute.",
                time: "6:01 PM",
                isSender: true,
            },
            { text: "Alright, talk soon!", time: "6:02 PM", isSender: false },
        ],
    },
    {
        id: 11,
        sender: "Elon Musk",
        profile_pic: "https://i.pravatar.cc/150?img=11",
        chat: [
            {
                text: "Did you see the latest launch?",
                time: "1:00 PM",
                isSender: false,
            },
            { text: "Yes! It was amazing!", time: "1:01 PM", isSender: true },
            {
                text: "Can't wait for the next one.",
                time: "1:02 PM",
                isSender: false,
            },
            {
                text: "Did you see the latest launch?",
                time: "1:00 PM",
                isSender: false,
            },
            { text: "Yes! It was amazing!", time: "1:01 PM", isSender: true },
            {
                text: "Can't wait for the next one.",
                time: "1:02 PM",
                isSender: false,
            },
            {
                text: "Did you see the latest launch?",
                time: "1:00 PM",
                isSender: false,
            },
            { text: "Yes! It was amazing!", time: "1:01 PM", isSender: true },
            {
                text: "Can't wait for the next one.",
                time: "1:02 PM",
                isSender: false,
            },
            { text: "Yes! It was amazing!", time: "1:01 PM", isSender: true },
            {
                text: "Can't wait for the next one.",
                time: "1:02 PM",
                isSender: false,
            },
            {
                text: "Did you see the latest launch?",
                time: "1:00 PM",
                isSender: false,
            },
            { text: "Yes! It was amazing!", time: "1:01 PM", isSender: true },
            {
                text: "Can't wait for the next one.",
                time: "1:02 PM",
                isSender: false,
            },
            { text: "Yes! It was amazing!", time: "1:01 PM", isSender: true },
            {
                text: "Can't wait for the next one.",
                time: "1:02 PM",
                isSender: false,
            },
            {
                text: "Did you see the latest launch?",
                time: "1:00 PM",
                isSender: false,
            },
            { text: "Yes! It was amazing!", time: "1:01 PM", isSender: true },
            {
                text: "Can't wait for the next one.",
                time: "1:02 PM",
                isSender: false,
            },
            { text: "Yes! It was amazing!", time: "1:01 PM", isSender: true },
            {
                text: "Can't wait for the next one.",
                time: "1:02 PM",
                isSender: false,
            },
            {
                text: "Did you see the latest launch?",
                time: "1:00 PM",
                isSender: false,
            },
            { text: "Yes! It was amazing!", time: "1:01 PM", isSender: true },
            {
                text: "Can't wait for the next one.",
                time: "1:02 PM",
                isSender: false,
            }
        ],
    },
    {
        id: 12,
        sender: "Bill Gates",
        profile_pic: "https://i.pravatar.cc/150?img=12",
        chat: [
            {
                text: "Are you attending the tech summit?",
                time: "2:30 PM",
                isSender: false,
            },
            { text: "Yes, I’ll be speaking there.", time: "2:31 PM", isSender: true },
            {
                text: "Great! Looking forward to it.",
                time: "2:32 PM",
                isSender: false,
            },
        ],
    },
    {
        id: 13,
        sender: "Taylor Swift",
        profile_pic: "https://i.pravatar.cc/150?img=13",
        chat: [
            {
                text: "Are you coming to the concert?",
                time: "7:00 PM",
                isSender: false,
            },
            { text: "Of course! Can't wait!", time: "7:01 PM", isSender: true },
            { text: "Awesome! See you there.", time: "7:02 PM", isSender: false },
        ],
    },
    {
        id: 14,
        sender: "Cristiano Ronaldo",
        profile_pic: "https://i.pravatar.cc/150?img=14",
        chat: [
            { text: "Training today at 5?", time: "9:00 AM", isSender: false },
            { text: "Yes! I’ll be there early.", time: "9:01 AM", isSender: true },
            {
                text: "Great, see you on the field.",
                time: "9:02 AM",
                isSender: false,
            },
        ],
    },
    {
        id: 15,
        sender: "Sundar Pichai",
        profile_pic: "https://i.pravatar.cc/150?img=15",
        chat: [
            {
                text: "The keynote draft is ready.",
                time: "11:00 AM",
                isSender: false,
            },
            {
                text: "Perfect. I’ll review it today.",
                time: "11:01 AM",
                isSender: true,
            },
            { text: "Thanks!", time: "11:02 AM", isSender: false },
        ],
    },
    {
        id: 16,
        sender: "Oprah Winfrey",
        profile_pic: "https://i.pravatar.cc/150?img=16",
        chat: [
            { text: "Did you finish the book?", time: "8:00 PM", isSender: false },
            { text: "Yes, it was amazing!", time: "8:01 PM", isSender: true },
            { text: "Glad you liked it!", time: "8:02 PM", isSender: false },
        ],
    },
    {
        id: 17,
        sender: "Mark Zuckerberg",
        profile_pic: "https://i.pravatar.cc/150?img=17",
        chat: [
            {
                text: "New feature release tomorrow.",
                time: "4:00 PM",
                isSender: false,
            },
            {
                text: "I’ll prepare the announcement.",
                time: "4:01 PM",
                isSender: true,
            },
            { text: "Awesome!", time: "4:02 PM", isSender: false },
        ],
    },
    {
        id: 18,
        sender: "Lionel Messi",
        profile_pic: "https://i.pravatar.cc/150?img=18",
        chat: [
            { text: "Big match this weekend!", time: "6:00 PM", isSender: false },
            { text: "Yes! Let’s get ready.", time: "6:01 PM", isSender: true },
            { text: "Vamos!", time: "6:02 PM", isSender: false },
        ],
    },
    {
        id: 19,
        sender: "Jennifer Lawrence",
        profile_pic: "https://i.pravatar.cc/150?img=19",
        chat: [
            { text: "Movie night soon?", time: "5:30 PM", isSender: false },
            { text: "Definitely! Let’s plan.", time: "5:31 PM", isSender: true },
            { text: "I’ll pick a movie.", time: "5:32 PM", isSender: false },
        ],
    },
    {
        id: 20,
        sender: "Keanu Reeves",
        profile_pic: "https://i.pravatar.cc/150?img=20",
        chat: [
            { text: "Ready for the new project?", time: "10:00 AM", isSender: false },
            { text: "Absolutely. Let’s do it.", time: "10:01 AM", isSender: true },
            {
                text: "Awesome. You’re breathtaking!",
                time: "10:02 AM",
                isSender: false,
            },
        ],
    },
];

export { users, messages };
