import React, { useState } from 'react';
import Avatar from "@radui/ui/Avatar"
import { Copy, Info, Users, Code, User } from "lucide-react";
import Accordion from "@radui/ui/Accordion";



function EditorSidebar({username, roomId, users}) {

    const [isHovering, setIsHovering] = useState(false);
    const [activeSection, setActiveSection] = useState("roomInfo");
    
    const copyRoomId = () => {
        navigator.clipboard.writeText(roomId);
        alert("Room ID copied to clipboard!");
    };

   

    const mouseHandler = (state) => {
    
        setIsHovering(state);
        
        
    }

    return (
        <div
        onMouseEnter={() =>mouseHandler(false)}
      onMouseLeave={() => mouseHandler(true)}
       className="flex flex-col w-10 hover:w-64 bg-[#272627] shadow-2xl rounded-tr-lg rounded-br-lg transition-all duration-300 ease-in-out border-[#404141] border-r-2 text-[#dddcdd]">
       

        {isHovering ?
        <div className='ml-2 space-y-4 mt-4'>
        <Code />    
        <Info />
        <Users/>
        </div>
            :
        <>
        <span className="ml-2 flex items-center mt-4">
            <Code /><span className='ml-1'>Collab</span>
  </span>
        <Accordion.Root 
        customRootClass="bg-[#272627] space-y-4"
        >
            <Accordion.Item value={`item-1`}>
                <Accordion.Header>
                    <Accordion.Trigger index={`1`}> <span className="ml-2 flex items-center">
            <Info /><span className='ml-1 hover:pl-1'>Room Info</span>
  </span></Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content index={`1`}>
                <div className="space-y-4">
                            <div className="relative transform-style-3d perspective-1000">
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
                    <Accordion.Trigger index={`2`}> 
                        <span className="ml-2 flex items-center">
            <Users /><span className='ml-1 hover:pl-1'>Participants</span>
  </span>
  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content index={`2`}>
                <div className="space-y-3">
                           
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
        </>
        
}
            

               <div className='mt-auto flex flex-row mb-2'><Avatar src="https://i.pravatar.cc/1000" /> {!isHovering && <span className="ml-2 hover:pl-2">{username}</span>}</div>
            </div>
    );
}

export default EditorSidebar;