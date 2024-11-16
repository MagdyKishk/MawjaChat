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

export default function LoginPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
            <Form formName="Login" onSubmit={handleSubmit}
            
            >
                <Input type="text" placeholder="Username" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                <PasswordInput placeholder="Password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                <Button className="mt-4" buttonType="outline">Submit</Button>
                <p className="text-sm text-neutral-500 text-center">
                    Already have an account?{" "}
                    <Link to="/signup" className="text-blue-500">Signup</Link>
                </p>
            </Form>
        </div>
    )
}
