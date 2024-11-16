// React
import { useEffect, useRef, useState } from "react";

// FontAwesome
import { faArrowLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import Input from "@/components/input/Input";

// Layout
import ContentLayout from "@/layout/ContentLayout";

// Route
import { useParams } from "react-router-dom";

// Store
import { useChatStore } from "@/store/useChatStore";

// Util
import { cn } from "@/util/cn";

// Assets
import defaultProfileAvatar from "@/assets/default-profile-avatar.webp"

const myUserId = "123"

function isScrolledToTop(div: HTMLDivElement) {
    return Math.abs(div.scrollTop) == div.scrollHeight - div.clientHeight
}

export default function Chat() {
    const {id: chatId} = useParams()
    const {
        messages,
        closeChat,
        displayedMessages,
        moreAvailable,
        getMoreMessages,
        resetChat,
    } = useChatStore();
    const [messageValue, setMessageValue] = useState("")
    const chatDiv = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        resetChat();
    }, [chatId, resetChat])

    useEffect(() => {
        if (chatDiv.current) {
            chatDiv.current.scrollTop = chatDiv.current.scrollHeight
        }
    }, [chatDiv, messages])
    
    useEffect(() => {
        const div = chatDiv.current

        function handleLazyLoading(div: HTMLDivElement) {
            if (isScrolledToTop(div) && moreAvailable) {
                getMoreMessages()
                return;
            }
        }

        if (div) {
            if (div.clientHeight == div.scrollHeight && moreAvailable) {
                getMoreMessages()
                return
            }
            div.addEventListener("scroll", () => handleLazyLoading(div))
        }

        return () => {
            div?.removeEventListener("scroll", () => handleLazyLoading(div))
        }

    }, [getMoreMessages, moreAvailable, displayedMessages])

    function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (messageValue.trim() === "") return;
        const processedMessage = messageValue.trim();

        console.log(processedMessage)
        setMessageValue("")
    }

    return (
        <ContentLayout>
            <div className="flex items-center gap-2 min-h-16 h-16 bg-white px-6 border-b border-neutral-200">
                <FontAwesomeIcon onClick={closeChat} icon={faArrowLeft} className="w-6 h-6 md:hidden cursor-pointer hover:text-neutral-400" title="Back" />
                <div className="flex items-center gap-4">
                    <img src={defaultProfileAvatar} alt="profile" className="w-10 h-10 rounded-full object-cover" />
                    <h1 className="text-xl font-bold text-neutral-600">John Max</h1>
                </div>
            </div>
            <div ref={chatDiv} className="h-full flex flex-col-reverse gap-4 overflow-auto scrollbar">                
                {displayedMessages.map((message) => (
                    <ChatMessage key={message.id} {...message} />
                ))}
            </div>
            <div className="w-full min-h-16 bg-white border-t border-neutral-200 px-6 flex items-center">
                <form onSubmit={handleSendMessage} className="flex items-center w-full">
                    <Input name="message" value={messageValue} onChange={(e) => setMessageValue(e.target.value)} type="text" placeholder="Message" className="w-full border p-2 px-8 rounded-full" />
                    <FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6 cursor-pointer hover:text-neutral-400 ml-4" />
                </form>
            </div>
        </ContentLayout>
    )
}

function ChatMessage({userId, username, message, timestamp}: {userId: string, username: string, message: string, timestamp: string}) {
    const isMyMessage = userId === myUserId;

    return (
        <div className={cn("p-4 w-fit space-y-2", isMyMessage && "ml-auto")}> 
            {!isMyMessage && <div className="flex items-center gap-2">
                <img src={defaultProfileAvatar} alt="profile" className="w-10 h-10 rounded-full object-cover" />
                <h1 className="text-xl font-bold text-neutral-600">{username}</h1>
            </div>}
            <p className={cn("text-neutral-600 bg-white mt-2 rounded-xl p-4 w-fit", isMyMessage && "bg-blue-500 text-white")}>{message}</p>
            <p className={cn("text-neutral-400 text-sm", isMyMessage && "text-right")}>{timestamp}</p>
        </div>
    )
}
