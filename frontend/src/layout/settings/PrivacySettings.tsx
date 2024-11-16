import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ContentLayout from "../ContentLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSettingsStore } from "@/store/useSettings";

export default function PrivacySettings() {
    const { closeSetting } = useSettingsStore();
    return (
        <ContentLayout>
            <div className="flex items-center gap-2 min-h-16 h-16 bg-white px-6 border-b border-neutral-200">
                <FontAwesomeIcon onClick={closeSetting} icon={faArrowLeft} className="w-6 h-6 md:hidden cursor-pointer hover:text-neutral-400" title="Back" />
                <div className="flex items-center gap-4">
                    Privacy
                </div>
            </div>
        </ContentLayout>
    )
}