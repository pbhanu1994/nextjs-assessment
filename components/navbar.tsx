import React from 'react';
import Link from 'next/link';

export default function NavBar() {
    return (
        <div className="flex flex-wrap justify-around items-center bg-gray-200">
            <div className="">
                <img className="h-16" src="./img/logo.png" alt="logo" />
            </div>
            <div className="">
                <Link href="/not-found"><span className="underline cursor-pointer p-2">Events</span></Link>
                <Link href="/not-found"><span className="underline cursor-pointer p-2">Speakers</span></Link>
                <Link href="/not-found"><span className="underline cursor-pointer p-2">Blog</span></Link>
                <Link href="/not-found"><span className="underline cursor-pointer p-2">Login</span></Link>
            </div>
        </div>
  );
};