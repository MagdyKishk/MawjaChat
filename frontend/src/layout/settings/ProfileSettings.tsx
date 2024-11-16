// React
import { useState } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Components
import Input from "@/components/input/Input";
import Button from "@/components/Button";
import Textarea from "@/components/input/Textarea";

// Layouts
import ContentLayout from "../ContentLayout";

// Stores
import { useSettingsStore } from "@/store/useSettings";

// Assets
import default_profile_avatar from "@/assets/default-profile-avatar.webp"

export default function ProfileSettings() {
    const { closeSetting } = useSettingsStore();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [bio, setBio] = useState("")
    const [profileAvatarPreview, setProfileAvatarPreview] = useState<(string | null)>(null)

    function handleProfilePic(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        const newProfileImage = e.target.files![0];
        const profileImageUrl = URL.createObjectURL(newProfileImage)
        setProfileAvatarPreview(profileImageUrl)
    }

    function onSubmition(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(e)
    }

    return (
        <ContentLayout>
            <div className="flex items-center gap-2 min-h-16 h-16 bg-white px-6 border-b border-neutral-200">
                <FontAwesomeIcon onClick={closeSetting} icon={faArrowLeft} className="w-6 h-6 md:hidden cursor-pointer hover:text-neutral-400" title="Back" />
                <div className="flex items-center gap-4">
                    Profile
                </div>
            </div>
            <div className="flex flex-col w-full h-full bg-white">
                <form onSubmit={onSubmition} className="h-full mx-auto min-w-3/6 w-5/6 p-6 flex flex-col gap-4">
                    <div className="overflow-hidden h-48 w-48 rounded-full mx-auto relative shadow-2xl border-2 border-white">
                        <input type="file" accept="image/*" className="w-full h-full absolute left-0 top-0 opacity-0 cursor-pointer" onChange={handleProfilePic} />
                        <img src={profileAvatarPreview || default_profile_avatar} alt="Profile Avatar" className="w-full h-full object-cover pointer-events-none" />
                    </div>
                    
                    <Input
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                    />
                    <Input
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                    />
                    <Textarea
                        name="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Bio"
                        resize={false}
                    />
                    <Button buttonType="filled" className="w-fit bg-neutral-600 hover:bg-neutral-700">
                        Submit
                    </Button>
                </form>
            </div>
        </ContentLayout>
    )
}