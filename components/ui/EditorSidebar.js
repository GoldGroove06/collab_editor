import React, { useState } from 'react';
import Avatar from "@radui/ui/Avatar"
import { Copy, Info, Users, Code, User } from "lucide-react";
import Accordion from "@radui/ui/Accordion";
import { DataList, IconButton, Flex, Card, Box, Text } from "@radix-ui/themes";
import { CopyIcon } from "@radix-ui/react-icons";
import Link from 'next/link';



function EditorSidebar({ username, roomId, users }) {

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
            onMouseEnter={() => mouseHandler(true)}
            onMouseLeave={() => mouseHandler(false)}
            className="flex flex-col items-center hover:items-start w-14 hover:w-64 bg-[#272627] shadow-2xl rounded-tr-lg rounded-br-lg transition-all duration-300 ease-in-out border-[#404141] border-r-2 text-[#dddcdd]">


            {isHovering ?
                <>
                    <span className="ml-2 flex items-center mt-2 pt-2">
                        <Link href="/" className='flex flex-row'><Code /><span className='ml-2 text-lg pb-2'>Collab</span></Link>
                    </span>
                    <Accordion.Root
                        customRootClass="bg-[#272627]"
                    >
                        <Accordion.Item value={`item-1`} className="pt-2 pb-2">
                            <Accordion.Header>
                                <Accordion.Trigger index={`1`}> <span className="ml-2 flex items-center w-full">
                                    <Info /><span className='ml-2 hover:pl-1'>Room Info</span>
                                </span></Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content index={`1`}>
                                <div className="space-y-4">

                                    <div className="ml-2 mr-2">


                                        <DataList.Root>

                                            <DataList.Item>
                                            <span className='text-white'>ID</span>
                                                <DataList.Value>
                                                    <Flex align="center" gap="2">
                                                        {roomId}
                                                        <IconButton
                                                            size="1"
                                                            aria-label="Copy value"
                                                            color="gray"
                                                            variant="ghost"
                                                            onClick={copyRoomId}
                                                        >

                                                            <CopyIcon />
                                                        </IconButton>
                                                    </Flex>
                                                </DataList.Value>
                                            </DataList.Item>
                                            <DataList.Item>
                                                <span className='text-white'>Name</span>
                                                <DataList.Value>{username}</DataList.Value>
                                            </DataList.Item>
                                        </DataList.Root>
                                    </div>
                                </div>
                            </Accordion.Content>

                        </Accordion.Item>

                        <Accordion.Item value={`item-2`} className="pt-2 pb-2">
                            <Accordion.Header>
                                <Accordion.Trigger index={`2`}>
                                    <span className="ml-2 flex items-center pr-32">
                                        <Users /><span className='ml-2 hover:pl-1'>Participants</span>
                                    </span>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content index={`2`}>
                                <div className="space-y-2 max-h-[40vh] overflow-y-auto">

                                    {users.map((user, index) => (

                                        <Card key={index} className='ml-3 bg-[#161716] w-[90%] mx-auto'
                                
                                        >
                                            <Flex gap="3" align="center">
                                                <Avatar
                                                    size="3"
                                                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                                                    radius="full"
                                                    fallback="T"
                                                />
                                                <Box>
                                                    <Text as="div" size="2" weight="bold" color='gray'>
                                                        {user}
                                                    </Text>

                                                </Box>
                                            </Flex>
                                        </Card>

                                    ))}
                                </div>
                            </Accordion.Content>

                        </Accordion.Item>
                    </Accordion.Root>
                </>
                :
                <div className=' space-y-4 mt-4'>
                    <Link href="/"><Code /></Link>
                    <Info />
                    <Users />
                </div>
                

            }


            <div className='mt-auto flex flex-row mb-2 items-center ml-1'><Avatar src="https://i.pravatar.cc/1000" /> {isHovering && <span className="ml-2 hover:pl-2">{username}</span>}</div>
        </div>
    );
}

export default EditorSidebar;