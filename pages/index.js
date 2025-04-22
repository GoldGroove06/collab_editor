
import { useState } from "react";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

import BgPattern from "../components/BgPattern"
import Heading from "@radui/ui/Heading"
import Navbar from "../components/ui/Navbar";
import SplitText from "../components/ui/SplitText";
import EnterAnimation from "../components/ui/EnterAnimation";
import Card from "@radui/ui/Card"

export default function Home() {
    const [roomId, setRoomId] = useState("");
    const [username, setUsername] = useState("");
    const router = useRouter();

    const generateRoomId = () => {
        const newRoomId = uuidv4();
        setRoomId(newRoomId);

        if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
            navigator.clipboard.writeText(newRoomId)
                .then(() => alert("Room ID copied to clipboard!"))
                .catch(() => alert("Copy manually: " + newRoomId));
        } else {
            // Fallback for unsupported browsers
            const textArea = document.createElement("textarea");
            textArea.value = newRoomId;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand("copy");
                alert("Room ID copied to clipboard!");
            } catch {
                alert("Copy manually: " + newRoomId);
            }
            document.body.removeChild(textArea);
        }
    };

    const joinRoom = () => {
        if (roomId && username) {
            router.push(`/editor/${roomId}?username=${username}`);
        } else {
            alert("Enter username and room ID");
        }
    };

    return (
        <div className="bg-black">
            <Navbar/>
            <div className="bg-[url('/images/image.svg')] bg-cover bg-no-repeat bg-center h-screen w-full bg-black text-white">
            
           <div className="flex flex-col ml-16 justify-center h-screen ">
           
           <div className="text-7xl font-serif font-extrabold scale-100      text-white">
  Collab Code Editor
  
</div>


            <div className="text-xl">
            A lightweight collaborative code editor that lets you write and share code in real time.

            </div>
            <div className="text-xl">
            No setup, no clutter — just code with your team, effortlessly.
            </div>
            </div>
            </div>
            <div className="text-white">
                <ul className="flex flex-row space-x-16 justify-center items-center">
                    <li><Card>CPP</Card></li>
                    <li><Card>JavaScript</Card></li>
                    <li><Card>Python</Card></li>
                    <li><Card>Java</Card></li>
                </ul>
            </div>
            
            <button onClick={joinRoom}>Join Room</button>
            <button onClick={generateRoomId}>Create Room</button>
            <div>
            <input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                placeholder="Room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
            />
            </div>

        </div>
    );
}

