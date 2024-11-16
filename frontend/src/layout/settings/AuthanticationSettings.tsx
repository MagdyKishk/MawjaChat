import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentLayout from "../ContentLayout";
import { useSettingsStore } from "@/store/useSettings";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button";
import EmailsTable from "@/components/EmailsTable";
import { useState } from "react";
import Input from "@/components/input/Input";

const mockEmails = [
    { email: "magdyksihk@gmail.com", isVerified: true },
    { email: "magdyksihk314@gmail.com", isVerified: false },
    { email: "magdykishk314159265358979323@gmail.com", isVerified: true },
]

export default function AuthanticationSettings() {
    const { closeSetting } = useSettingsStore();

    const [addingNewEmail, setAddingNewEmail] = useState<boolean>(false)

    return (
        <ContentLayout>
            <div className="flex items-center gap-2 min-h-16 h-16 bg-white px-6 border-b border-neutral-200 ">
                <FontAwesomeIcon onClick={closeSetting} icon={faArrowLeft} className="w-6 h-6 md:hidden cursor-pointer hover:text-neutral-400" title="Back" />
                <div className="flex items-center gap-4">
                    Authentication
                </div>
            </div>
            <div className="h-full bg-white p-4 flex flex-col gap-4 overflow-auto">
                <div>
                    <h1 className="text-xl p-2 border-b w-fit">Emails</h1>
                    <EmailsTable
                        emails={mockEmails}
                        onDeleteEmail={(str) => console.log(str)}
                        onVerifyEmail={(str)=> console.log(str)}
                    />
                    {addingNewEmail && <AddEmailForm setAddingNewEmail={setAddingNewEmail} />}
                    {!addingNewEmail && <Button className="mt-4 text-sm" onClick={() => setAddingNewEmail(true)}>Add Email</Button>}
                </div>
                <div>
                    <h1 className="text-xl p-2 border-b w-fit">Password</h1>
                    <div className="mt-4 flex gap-4">
                        <Button className="text-sm">Forgot Password</Button>
                        <Button className="text-sm">Change Password</Button>
                    </div>
                </div>
            </div>
        </ContentLayout>
    );
}

function AddEmailForm({setAddingNewEmail }: {setAddingNewEmail:React.Dispatch<React.SetStateAction<boolean>>}) {
    const [newEmailValue, setEmailValue] = useState<string>("");
    
    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }
    
    return (
        <form onSubmit={(e) => handleFormSubmit(e)}>
            <Input
                value={newEmailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                type={"email"}
                placeholder="New Email Address"
                name="newEmail"
                className="text-sm border my-4 rounded-md"
            ></Input>
            <div className="flex gap-2">
                <Button className="text-sm">Submit</Button>
                <Button className="text-sm" onClick={() => setAddingNewEmail(false)}>Cancel</Button>
            </div>
        </form>
    )
}