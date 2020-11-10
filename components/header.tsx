import React from 'react';
import NavBar from './navbar';

export default function Header() {
    return (
        <>
            <NavBar />
            <div className="flex justify-center bg-gray-200">
                <div className="m-32 mt-10">
                    <div>
                        <article className="prose lg:prose-xl">
                            <h1 className="text-center" style={{ marginBottom: "1rem"}}>Welcome to Pixel 2020</h1>
                            <h3 className="text-center" style={{ marginTop: 0 }}>We are back again this year</h3>
                        </article>
                    </div>
                    <div className="mt-8 text-center">
                        <input type="email" className="px-3 py-2 border outline-none rounded" placeholder="email" />
                        <button type="button" className="shadow-md ml-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Sign up</button>
                    </div>
                </div>
            </div>
        </>
  );
};