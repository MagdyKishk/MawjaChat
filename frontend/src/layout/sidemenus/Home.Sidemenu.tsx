// Components
import StatusIndicator from "@/components/StatusIndicator";

// Layout
import GeneralSideMenu from "@/layout/GeneralSideMenu";

export default function HomeSideMenu() {
    return (
        <GeneralSideMenu>
            <div className="min-h-16 h-16 px-6 bg-white flex items-center border-b border-neutral-200">
                <h1 className="text-2xl font-bold text-neutral-600">Status</h1>
            </div>
            <div className="flex py-2 flex-col gap-2 px-2 overflow-y-auto scrollbar">
                <StatusIndicator name="John Max" slidesCount={1} />
                <StatusIndicator name="Jane Milly" slidesCount={4} />
                <StatusIndicator name="Jim School Mate 😒😒😒😒😒😒😒😒😒"  slidesCount={5} />
                <StatusIndicator name="Jill Chill" slidesCount={2} />
                <StatusIndicator name="Jack Store" slidesCount={3} />
            </div>
        </GeneralSideMenu>
    )
}