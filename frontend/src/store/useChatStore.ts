import { create } from 'zustand'

const initialMessages: Message[] = Array.from({ length: 700 }, (_, i) => {
    // Generate timestamps for the last 30 days, with 10 messages per day
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(i/10));
    date.setHours(9 + (i % 10)); // Spread messages throughout work hours (9am-7pm)
    date.setMinutes(Math.floor(Math.random() * 60));
    
    const isUserMessage = Math.random() > 0.5;
    
    const commonPhrases = [
        "Hey, how's it going?",
        "Just finished that feature we discussed Just finished that feature we discussed",
        "Can you review my PR when you get a chance? Can you review my PR when you get a chance?",
        "Great work on that last commit!",
        "Should we schedule a meeting to discuss this?",
        "I'm running into an interesting bug here",
        "The tests are passing now",
        "Did you see the latest deployment?",
        "Let me know if you need any help with that",
        "I'll take a look at it this afternoon",
        "The documentation has been updated",
        "That makes sense to me",
        "Good catch on that edge case!",
        "I'll push the changes shortly",
        "The performance looks much better now"
    ];

    return {
        id: (i + 1).toString(),
        userId: isUserMessage ? "123" : "1",
        username: isUserMessage ? "Me" : "John Max",
        message: commonPhrases[Math.floor(Math.random() * commonPhrases.length)],
        timestamp: date.toISOString()
    };
}).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

interface Message {
    id: string;
    userId: string;
    username: string;
    message: string;
    timestamp: string;
}

interface ChatStore {
    isChatOpen: boolean,
    isGroupChat: boolean,

    messages: Message[],

    moreAvailable: boolean,
    
    currentDate: Date,

    displayedMessages: Message[],
    setDisplayMessages: (messages: Message[]) => void,
    getMoreMessages: () => void,
    // Actions
    openChat: () => void,
    closeChat: () => void,
    resetChat: () => void,
    resetChatStore: () => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
    isChatOpen: false,
    isGroupChat: false,
    messages: initialMessages,
    
    // Messages that are currently being displayed
    displayedMessages: [],

    setDisplayMessages: (messages: Message[]) => set(() => ({displayedMessages: messages})),

    getMoreMessages: () => {
        if (!get().moreAvailable) return
        const {currentDate, messages} = get()
        const newDisplayedMessages = messages.filter((message: Message) => new Date(message.timestamp).toLocaleDateString() === currentDate.toLocaleDateString())
        const nextIndex = messages.indexOf(newDisplayedMessages[newDisplayedMessages.length - 1]) + 1
        if (nextIndex < messages.length) {
            set(() => ({currentDate: new Date(messages[nextIndex].timestamp)}))
        } else {
            set(() => ({moreAvailable: false}))
        }
        set(() => ({displayedMessages: [...get().displayedMessages, ...newDisplayedMessages]}))
    },
    
    moreAvailable: true,
    
    // getChat: () => set(() => ({isChatOpen: })),
    currentDate: new Date(initialMessages[0].timestamp),

    openChat: () => set(() => ({isChatOpen: true})),
    closeChat: () => {
        set(useChatStore.getInitialState())
    },
    resetChat: () => set(() => ({ ...useChatStore.getInitialState(), isChatOpen: get().isChatOpen })),
    resetChatStore: () => set(() => (useChatStore.getInitialState()))
}))