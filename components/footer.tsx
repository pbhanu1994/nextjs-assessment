import React from 'react';
import Link from 'next/link';
import { socialInfo } from '../services/footer';

export default function Footer() {
    return (
        <div className="flex flex-wrap justify-around items-center p-20 bg-gray-300">
            <div>
                <ul className="flex">
                    {socialInfo && socialInfo.map(social =>
                        <li key={social.id}>
                            <img className="w-12 h-12 mr-5" style={{ cursor: "pointer" }} src={social.img} alt={social.title} />
                        </li>
                    )}
                </ul>
            </div>
            <div className="">
                <img className="h-16" src="./img/logo.png" alt="logo" />
            </div>
            <div className="">
                <article className="prose lg:prose-xl">
                    <p className="font-bold text-center">Pixel 2020</p>
                </article>
                <Link href="/not-found"><span className="underline cursor-pointer p-2">Terms & Conditions</span></Link>
                <Link href="/not-found"><span className="underline cursor-pointer p-2">Privacy Policy</span></Link>
            </div>
        </div>
  );
};