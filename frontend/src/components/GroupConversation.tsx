import defaultProfile from "@/assets/default-profile-avatar.webp"
import { useChatStore } from "@/store/useChatStore";
import { Link } from "react-router-dom";

interface GroupConversationProps {
    id: string;
    name: string;
    lastMessage: string;
    lastSeen: string;
    avatar?: string;
}

export default function GroupConversation({id, name, lastMessage, lastSeen, avatar}: GroupConversationProps) {
    const {openChat} = useChatStore()
    
    return (
        <Link onClick={() => openChat()} to={`/groups/${id}`} className="flex items-center gap-2 hover:bg-neutral-100 p-2 rounded-lg cursor-pointer">
            <div className="min-w-12 w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
                <img src={avatar ?? defaultProfile} alt="profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
                <p className="text-neutral-600 line-clamp-1">{name}</p>
                <p className="text-sm text-neutral-400 line-clamp-1">{lastMessage}</p>
            </div>
            <div className="ml-auto text-sm text-neutral-400 whitespace-nowrap">
                <p>Last Seen: <span>{lastSeen}</span></p>
            </div>
        </Link>
    )
}