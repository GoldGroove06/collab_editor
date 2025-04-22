
import { useState } from "react";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import Grid from "../components/ui/Grid";
import { GlowingEffect } from "../components/ui/glowing-effect";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { TextField, Em, Callout } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";




export default function Home() {
    const [roomId, setRoomId] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [errorColor, setErrorColor] = useState("red");    
    const router = useRouter();

    const generateRoomId = () => {
        const newRoomId = uuidv4();
        setRoomId(newRoomId);

        if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
            navigator.clipboard.writeText(newRoomId)
                .then(() => {setErrorMessage("Room ID copied to clipboard!");setErrorColor("green"); setError(true)})

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
            setErrorColor("red");
            setErrorMessage("Please enter a room ID and username.");
            setError(true);
        }
    };

    return (
        <div className="bg-black">

            <Navbar />
            
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

            
            <div className=" p-8  flex justify-center items-center">
            <Grid/>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4">

            
            {error && <Callout.Root color={errorColor}>
		<Callout.Icon>
			<InfoCircledIcon />
		</Callout.Icon>
		<Callout.Text>
			{errorMessage}
		</Callout.Text>
	</Callout.Root>}
    </div>
            <div className="text-white  flex flex-row justify-center space-x-16 pb-16">
            
                <div className="text-3xl ">
                    <br></br>
                    Just <Em>Start</Em> Coding<br />
                    No <Em>Signups</Em>. No <Em>installs</Em>.<br />
                    Click <Em>Start</Em> to launch your session.<br />
                </div>
                <div className="space-y-4 space-x-4" id="start-id">
        <br></br>
        
                    <TextField.Root placeholder="Room ID"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                    />

                    <TextField.Root placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <button onClick={joinRoom} className="bg-white rounded-full p-2 text-black">Join Room</button>
                    <button onClick={generateRoomId} className="bg-white rounded-full p-2 text-black">Create Room</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

