// Components
import Conversation from "@/components/Conversation";
import SearchMessages from "@/components/Search";

// Layout
import GeneralSideMenu from "@/layout/GeneralSideMenu";

export default function MessagesSideMenu() {
    return (
        <GeneralSideMenu>
            <div className="min-h-16 h-16 px-6 bg-white flex items-center border-b border-neutral-200">
                <h1 className="text-2xl font-bold text-neutral-600">Messages</h1>
            </div>
            <div className="px-4 py-4">
                <SearchMessages />
            </div>
            <div className="flex py-2 flex-col gap-2 px-2 overflow-y-auto scrollbar">
                <Conversation id="1" name="John Max" lastMessage="Hello, how are you?" lastSeen="2h" />
                <Conversation id="2" name="Jane Milly" lastMessage="I'm fine, thank you!" lastSeen="4h" />
                <Conversation id="3" name="Jim School Mate 😒😒😒😒😒😒😒😒😒" lastMessage="What's up?" lastSeen="1d" />
                <Conversation id="4" name="Jill Chill" lastMessage="Not much, just chilling" lastSeen="2w" />
                <Conversation id="5" name="Jack Store" lastMessage="I'm going to the store" lastSeen="2m" />
                <Conversation id="6" name="John Max" lastMessage="Hello, how are you?" lastSeen="2h" />
                <Conversation id="7" name="Jane Milly" lastMessage="I'm fine, thank you!" lastSeen="4h" />
                <Conversation id="8" name="Jim School Mate 😒😒😒😒😒😒😒😒😒" lastMessage="What's up?" lastSeen="1d" />
                <Conversation id="9" name="Jill Chill" lastMessage="Not much, just chilling" lastSeen="2w" />
                <Conversation id="10" name="Jack Store" lastMessage="I'm going to the store" lastSeen="2m" />
                <Conversation id="11" name="John Max" lastMessage="Hello, how are you?" lastSeen="2h" />
                <Conversation id="12" name="Jane Milly" lastMessage="I'm fine, thank you!" lastSeen="4h" />
                <Conversation id="13" name="Jim School Mate 😒😒😒😒😒😒😒😒😒" lastMessage="What's up?" lastSeen="1d" />
                <Conversation id="14" name="Jill Chill" lastMessage="Not much, just chilling" lastSeen="2w" />
                <Conversation id="15" name="Jack Store" lastMessage="I'm going to the store" lastSeen="2m" />
                <Conversation id="16" name="John Max" lastMessage="Hello, how are you?" lastSeen="2h" />
                <Conversation id="17" name="Jane Milly" lastMessage="I'm fine, thank you!" lastSeen="4h" />
                <Conversation id="18" name="Jim School Mate 😒😒😒😒😒😒😒😒😒" lastMessage="What's up?" lastSeen="1d" />
                <Conversation id="19" name="Jill Chill" lastMessage="Not much, just chilling" lastSeen="2w" />
                <Conversation id="20" name="Jack Store" lastMessage="I'm going to the store" lastSeen="2m" />
            </div>
        </GeneralSideMenu>
    )
}