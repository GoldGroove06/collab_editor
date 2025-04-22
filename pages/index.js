
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
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000); // Hide the error after 3 seconds
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

            <div className="text-gray-500 bg-[#272627] flex text-3xl text pt-8 flex-col  justify-center items-center">

                <div className="flex flex-row space-x-32">
                    <div>CPP</div>
                    <div>JavaScript</div>
                    <div>Python</div>
                    <div>Java</div>

                </div>
                <hr className="border-gray-500 bg-[#272627] mt-8 w-[80%] mx-auto" />
            </div>
            <div className=" p-8 bg-[#272627]">
            <Grid/>
            </div>
            
            <div className="text-white bg-[#272627] flex flex-row justify-center space-x-16 pb-4">
            
                <div className="text-3xl ">
                    <br></br>
                    Just <Em>Start</Em> Coding<br />
                    No <Em>Signups</Em>. No <Em>installs</Em>.<br />
                    Click <Em>Start</Em> to launch your session.<br />
                </div>
                <div className="space-y-4 space-x-4">
        <br></br>
        {error && <Callout.Root color="green">
		<Callout.Icon>
			<InfoCircledIcon />
		</Callout.Icon>
		<Callout.Text>
			You will need  to install and access
			this application.
		</Callout.Text>
	</Callout.Root>}
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

