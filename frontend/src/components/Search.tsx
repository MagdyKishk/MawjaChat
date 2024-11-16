import { useState } from "react";
import Input from "./input/Input";

export default function SearchMessages() {
    const [search, setSearch] = useState("")

    return (
        <div>
            <Input 
                placeholder="Search..." 
                name="search" 
                value={search} 
                onChange={(e) => {setSearch(e.target.value)}} 
                type="text" 
                className="border rounded-md p-2" 
                autoComplete="off"
            />
        </div>
    )
}