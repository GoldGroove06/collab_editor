import React from 'react';
import { Code } from "lucide-react";

function Navbar() {
    return (
        <div className='flex flex-row justify-between items-center bg-black p-4 b backdrop-blur-xl  sticky top-0 z-50 rounded-lg'>
            <div className='flex items-center space-x-2 text-white'>
                <Code/>
                <span className='text-xl font-bold '>Collab Code Editor</span>
            </div>
            <div className='flex items-center space-x-4'>
                <button className='bg-gray-700'>Get Started</button>
                
            </div>
            
        </div>
    );
}

export default Navbar;