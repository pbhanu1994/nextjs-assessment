import React from 'react';

export default function ContactUs() {
    return (
        <div className="m-5 mb-10">
            <div>
                <article className="flex prose lg:prose-xl">
                    <h2 className="pr-10">Contact us</h2>
                </article>
            </div>
            <div className="mt-8 flex justify-center">
                <input type="text" className="px-3 py-3 w-3/12 mr-1 mt-0 border border-gray-500 outline-none rounded" placeholder="Name" />
                <input type="email" className="px-3 py-3 w-3/12 ml-1 mt-0 border border-gray-500 outline-none rounded" placeholder="Email" />
            </div>
            <div className="mt-5 flex justify-center">
                <textarea className="px-5 py-10 w-3/6 h-3/6 m-10 mt-0 border border-gray-500 outline-none rounded"></textarea>
            </div>
            <div className="flex justify-center">
                <button type="button" className="shadow-md flex justify-center ml-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
            </div>
        </div>
  );
};