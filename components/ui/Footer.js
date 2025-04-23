import React from 'react';
import Link from 'next/link';

function Footer() {
    return (
        <div className='flex flex-col w-full bg-black justify-center items-center h-[10vh] text-white'>
            Collab Code Editor © 2025
            
                <div className='text-sm text-gray-400'>UI made with ❤️ by <Link href="https://github.com/GoldGroove06" className='underline'>GoldGroove06</Link></div>
         
        </div>
    );
}

export default Footer;