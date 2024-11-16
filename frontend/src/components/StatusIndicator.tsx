import defaultProfile from "@/assets/default-profile-avatar.webp"
import { useStatusStore } from "@/store/useStatusStore";

interface ConversationProps {
    name: string;
    slidesCount: number;
    avatar?: string;
}

export default function StatusIndicator({name, slidesCount, avatar}: ConversationProps) {
    const { openStatus } = useStatusStore()
    
    return (
        <div onClick={() => openStatus()} className="flex items-center gap-2 hover:bg-neutral-100 p-2 rounded-lg cursor-pointer">
            <div className="min-w-12 w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
                <img src={avatar ?? defaultProfile} alt="profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
                <p className="text-neutral-600 line-clamp-1">{name}</p>
            </div>
            <div className="ml-auto text-sm text-neutral-400 whitespace-nowrap flex">
                X{slidesCount}
            </div>
        </div>
    )
}