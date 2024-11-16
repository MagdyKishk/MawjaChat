// Components
import GroupConversation from "@/components/GroupConversation";
import SearchMessages from "@/components/Search";

// Layout
import GeneralSideMenu from "@/layout/GeneralSideMenu";

export default function GroupsSideMenu() {
    return (
        <GeneralSideMenu>
            <div className="min-h-16 h-16 px-6 bg-white flex items-center border-b border-neutral-200">
                <h1 className="text-2xl font-bold text-neutral-600">Groups</h1>
            </div>
            <div className="px-4 py-4">
                <SearchMessages />
            </div>
            <div className="flex py-2 flex-col gap-2 px-2 overflow-y-auto scrollbar">
                <GroupConversation id="1" name="John Max" lastMessage="Hello, how are you?" lastSeen="2h" />
                <GroupConversation id="2" name="Jane Milly" lastMessage="I'm fine, thank you!" lastSeen="4h" />
                <GroupConversation id="3" name="Jim School Mate 😒😒😒😒😒😒😒😒😒" lastMessage="What's up?" lastSeen="1d" />
                <GroupConversation id="4" name="Jill Chill" lastMessage="Not much, just chilling" lastSeen="2w" />
                <GroupConversation id="5" name="Jack Store" lastMessage="I'm going to the store" lastSeen="2m" />
            </div>
        </GeneralSideMenu>
    )
}