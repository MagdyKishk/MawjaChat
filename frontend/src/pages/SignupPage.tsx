// Components
import Button from "@/components/Button";
import Input from "@/components/input/Input";
import PasswordInput from "@/components/input/PasswordInput";

// Layouts
import Form from "@/layout/Form";

// Routing
import { Link } from "react-router-dom";

// Utils
import { cn } from "@/util/cn";
import { useState } from "react";
import UsernameInput from "@/components/input/UsernameInput";

export default function SignupPage() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(username, password)
    }

    return (
        <div
            className={cn(
                // Layout
                "w-full h-screen flex justify-center items-center",
            )}
        >
            <Form formName="Signup" onSubmit={handleSubmit}>
                <div className={cn(
                    // Layout
                    "flex gap-4",
                    // Responsive
                    "sm:flex-row flex-col"
                )}>
                    <Input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} />
                    <Input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
                </div>
                <UsernameInput placeholder="Username" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                <Input type="text" placeholder="Email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                <PasswordInput placeholder="Password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                <PasswordInput placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} />
                <Button className="mt-4" buttonType="outline">Submit</Button>
                <p className="text-sm text-neutral-500 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500">Login</Link>
                </p>
            </Form>
        </div>
    )
}
