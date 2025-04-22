import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import Editor from "@monaco-editor/react";
import { SegmentedControl } from "@radix-ui/themes";
import EditorSidebar from "../../components/ui/EditorSidebar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const socket = io("http://localhost:3001");

export default function EditorPage() {
    const router = useRouter();
    const { roomId, username } = router.query;
    const [code, setCode] = useState("");
    const [users, setUsers] = useState([]);
    const [language, setLanguage] = useState("javascript");
    const [theme, setTheme] = useState("vs-dark");
    const [activeSection, setActiveSection] = useState("roomInfo");
    const [value, setValue] = useState("left");

    useEffect(() => {
        if (!roomId || !username) return;
        socket.emit("join-room", { roomId, username });

        socket.on("update-code", (newCode) => setCode(newCode));
        socket.on("room-users", (roomUsers) => setUsers(roomUsers));

        return () => socket.disconnect();
    }, [roomId, username]);

   
    return (
        <div className="flex flex-row w-full h-screen bg-[#161716]"> {/* Added h-screen for full height */}
            {/* Sidebar Navigation */}
            <EditorSidebar username={username} roomId={roomId} users={users}/>
            
           
            

            {/* Editor Section (Right Side) */}
            <div className="m-auto w-4/5 p-6 rounded-tl-lg bg-[#161716]">
            <div className="flex flex-row justify-between  float-right">

                
                <SegmentedControl.Root defaultValue="vs-dark" value={theme} onValueChange={setTheme}>
	<SegmentedControl.Item value="vs-dark">Dark</SegmentedControl.Item>
	<SegmentedControl.Item value="vs-light">Light</SegmentedControl.Item>

</SegmentedControl.Root>  
</div>   
            <div className="flex flex-row justify-between">
            <ToggleGroup
                
                type="single" 
                value={language}
			    onValueChange={(value) => {
				if (value) setLanguage(value); 
                 
			}}
               
                >
                <ToggleGroupItem 
                    value="cpp"
                    className="hover:bg-black-800 rounded-full"
                   
                >C++</ToggleGroupItem>
                <ToggleGroupItem 
                    value="javascript"
                   className="hover:bg-black-700 rounded-full"
                >javascript </ToggleGroupItem>
                <ToggleGroupItem 
                    value="python"
                   className="hover:bg-black-700 rounded-full"
                >Python </ToggleGroupItem>

                <ToggleGroupItem 
                    value="java"
                   className="hover:bg-black-700 rounded-full"
                >Java </ToggleGroupItem>
                </ToggleGroup>
                </div>  
                         
                 <Editor
                    height={"80vh"}
                    width="100%"
                    language={language}
                    theme={theme}
                    value={code}
                    onChange={(newCode) => {
                        setCode(newCode);
                        socket.emit("code-changed", { roomId, code: newCode });
                    }}
                />
            </div>
        </div>
    );
}

