import React, { useState } from 'react';
import Avatar from "@radui/ui/Avatar"
import { Copy, Info, Users, Code } from "lucide-react";
import Accordion from "@radui/ui/Accordion";



function EditorSidebar({username, roomId, users}) {

    const [isHovering, setIsHovering] = useState(false);
    const [activeSection, setActiveSection] = useState("roomInfo");
    
    const copyRoomId = () => {
        navigator.clipboard.writeText(roomId);
        alert("Room ID copied to clipboard!");
    };

   

    const mouseHandler = () => {
        const newHoverState = !isHovering;
        setIsHovering(newHoverState);
        
        
    }

    return (
        <div
        onMouseEnter={mouseHandler}
      onMouseLeave={mouseHandler}
       className="flex flex-col w-10 hover:w-1/5 bg-gray-800 shadow-2xl rounded-tr-lg rounded-br-lg transition-all duration-300 ease-in-out">
        <Code /> {isHovering && <span className="ml-2">Collab</span>}

        <Accordion.Root >
            <Accordion.Item value={`item-1`}>
                <Accordion.Header>
                    <Accordion.Trigger index={`1`}> <Info /> {isHovering && <span className="ml-2 hover:pl-2">Room Info</span>}</Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content index={`1`}>
                <div className="space-y-4">
                            <div className="relative transform-style-3d perspective-1000">
                                <h2 className="text-lg font-bold">Username</h2>
                                <span className="text-sm text-gray-300 bg-gray-600 px-2 py-1 rounded-lg shadow-md transform-3d rotate-x-10 hover:rotate-x-0 transition-transform duration-300">
                                    {username}
                                </span>
                            </div>
                            <div className="relative transform-style-3d perspective-1000">
                                <h2 className="text-lg font-bold">Room ID</h2>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-300 bg-gray-600 px-2 py-1 rounded-lg shadow-md transform-3d rotate-y-10 hover:rotate-y-0 transition-transform duration-300">
                                        {roomId}
                                    </span>
                                    <button onClick={copyRoomId} className="p-2 bg-blue-500 rounded-full hover:bg-blue-400 transition">
                                        <Copy size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                </Accordion.Content>

            </Accordion.Item>

            <Accordion.Item value={`item-2`}>
                <Accordion.Header>
                    <Accordion.Trigger index={`2`}> <Users /> {isHovering && <span className="ml-2 hover:pl-2">Participants</span>}</Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content index={`2`}>
                <div className="space-y-3">
                            <h3 className="text-lg font-semibold mb-3">Participants</h3>
                            {users.map((user, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-center font-semibold shadow-lg transform hover:scale-105 transition">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-md text-white">{user}</span>
                                </div>
                            ))}
                        </div>
                </Accordion.Content>

            </Accordion.Item>
        </Accordion.Root>
            {/* <button
                        className={`w-full p-3 rounded-lg text-left ${activeSection === "roomInfo" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                        onClick={() => setActiveSection("roomInfo")}
                    >
                        <Info /> {isHovering && <span className="ml-2 hover:pl-2">Room Info</span>}
                    </button>
                    <button
                        className={` inline	p-3 rounded-lg text-left ${activeSection === "participants" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                        onClick={() => setActiveSection("participants")}
                    >
                        <Users /> {isHovering && <span className="ml-2 hover:pl-2">Participants</span>}
                    </button>

                    <div className="mt-4">
                    {activeSection === "roomInfo" && (
                        <div className="space-y-4">
                            <div className="relative transform-style-3d perspective-1000">
                                <h2 className="text-lg font-bold">Username</h2>
                                <span className="text-sm text-gray-300 bg-gray-600 px-2 py-1 rounded-lg shadow-md transform-3d rotate-x-10 hover:rotate-x-0 transition-transform duration-300">
                                    {username}
                                </span>
                            </div>
                            <div className="relative transform-style-3d perspective-1000">
                                <h2 className="text-lg font-bold">Room ID</h2>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-300 bg-gray-600 px-2 py-1 rounded-lg shadow-md transform-3d rotate-y-10 hover:rotate-y-0 transition-transform duration-300">
                                        {roomId}
                                    </span>
                                    <button onClick={copyRoomId} className="p-2 bg-blue-500 rounded-full hover:bg-blue-400 transition">
                                        <Copy size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === "participants" && (
                        
                    )} */}

                    
                    
                {/* </div> */}

               <Avatar src="https://i.pravatar.cc/1000" /> 
            </div>
    );
}

export default EditorSidebar;